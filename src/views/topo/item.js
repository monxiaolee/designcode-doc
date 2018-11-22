import * as d3 from 'd3'
import * as util from './util'
import { type, bgColor, icon, name } from './enum'

class Item {
	constructor(params) {
		this.container = params.container,
		this.id = params.id || util.makeId(),
		this.x = params.x,
		this.y = params.y,
		this.name = params.name,
		this.type = type[params.type]

		// 记录input/output元素的id和连线对象
	    this.inputIds = params.inputIds || new Set()
	    this.outputIds = params.outputIds || new Set()
	    this.inputPathIds = new Set()
	    this.outputPathIds = new Set()
	    this.data = params.data || null

		// 回调事件
		this.onDrag = params.onDrag
		this.onClick = params.onClick
		this.onMouseup = params.onMouseup
		this.onPortMousedown = params.onPortMousedown
		this.onPortMouseup = params.onPortMouseup

		// 私有属性
		this._group = null
		this._dragDeltaX = 0
		this._dragDeltaY = 0
		this._input = null
		this._output = null

		this._createElement()
		this._bindEvent()
	}

	getItemWidth() {
		return parseInt(this._group.select('rect').attr('width'))
	}

	/**
	* 创建svg元素
	*/
	_createElement() {
		let group = this.container.append('g')
			.attr('transform', 'translate('+this.x+', '+this.y+')')
		  // .attr("transform", "translate("+this.x+", "+this.y+")")
	      // .attr('transform', 'translate(${this.x}, ${this.y}')
	      .attr('class', 'item')
	    this._group = group
	    group.append('rect')
	      .attr('width', 120)
	      .attr('height', 30)
	      .attr('rx', 5)
	      .attr('fill', bgColor[this.type])
	      .attr('class', 'item item-rect')

	    let iconGroup = group.append('g')
	    iconGroup.append('rect')
	      .attr('x', 0)
	      .attr('y', 0)
	      .attr('width', 30)
	      .attr('height', 30)
	      .attr('fill', '#000')
	      .attr('fill-opacity', '0.05')
	    iconGroup.append('image')
	      .attr('href', icon[this.name])
	      .attr('x', 4)
	      .attr('y', 4)
	      .attr('width', 22)
	      .attr('height', 22)

	    let iconLine = d3.path()
	    iconLine.moveTo(30, 0)
	    iconLine.lineTo(30, 30)
	    iconGroup.append('path')
	      .attr('stroke-width', 0.5)
	      .attr('stroke', '#000')
	      .attr('stroke-opacity', 0.1)
	      .attr('d', iconLine)

	    let text = group.append('text')
	    let title = this.title || name[this.name]
	    this._text = text
	    text.text(title)
	      .attr('x', 73)
	      .attr('y', 14)
	      .attr('dy', '0.35em')
	      .attr('class', 'item_label')
	      .attr('text-anchor', 'middle')

	    if(['ACTION', 'FUNCTION'].indexOf(this.type)) {
	    	let input = group.append('g').attr('transform', 'translate(-5, 10)').attr('class', 'port_input')
	    	this._input = input
	    	input.append('rect')
	    		.attr('rx', 3)
	    		.attr('ry', 3)
	    		.attr('width', 10)
	    		.attr('height', 10)
	    		.attr('class', 'port')
	    }

	}

	/**
	* 绑定事件
	* @private
	*/
	_bindEvent() {
		this._group.on('mouseup', this._onMouseup.bind(this))
		let drag = d3.drag()
			.on("start", this._onGroupDragstart.bind(this))
			.on("drag", this._onGroupDrag.bind(this))

		this._group.call(drag)
		if(this._input) {
			this._input.on('mouseenter', this._onPortEnter)
			this._input.on('mouseleave', this._onPortLeave)
			this._input.on('mousedown', this._onPortMousedown.bind(this))
			this._input.on('mouseup', this._onPortMouseup.bind(this))
		}
	}

	/**
	*鼠标移入连线句柄
	*@private
	*/
	_onPortEnter() {
		d3.select(this).select('rect').classed('port-hovered', true)
	}

	/**
	*鼠标离开连线句柄
	*@private
	*/
	_onPortLeave() {
		d3.select(this).select('rect').classed('port-hovered', false)
	}

	/**
	*鼠标按下连线句柄
	*@private
	*/
	_onPortMousedown() {
		d3.event.stopPropagation()
		let portType = d3.select(d3.event.target.parentNode).attr('class').replace('port_', '')
		this.onPortMousedown(this, portType)
	}

	/**
	*鼠标在连线句柄抬起
	*@private
	*/
	_onPortMouseup() {
		d3.event.stopPropagation()
		let portType = d3.select(d3.event.target.parentNode).attr('class').replace('port_', '')
		this.onPortMouseup(this, portType)
	}

	/**
	* 开始拖拽
	* @private
	*/
	_onGroupDragstart() {
		this._dragDeltaX = d3.event.x - this.x
		this._dragDeltaY = d3.event.y - this.y
	}

	/**
	* 正在拖拽
	* @private
	*/
	_onGroupDrag() {
		this.x = d3.event.x - this._dragDeltaX
		this.y = d3.event.y - this._dragDeltaY
		this._group.raise().attr('transform', 'translate('+this.x+', '+this.y+')') //raise() 低头抬尾变元素的方法
		this.onDrag(this)
	}

	/**
	* 点击当前元素
	* @private
	*/
	_onClick() {
		d3.event.stopPropagation()
		this._group.classed('active', true)
		this.onClick(this)
	}

	/**
	* 鼠标在元素位置抬起
	* @private
	*/
	_onMouseup() {
		d3.event.stopPropagation()
		this.onMouseup(this)
	}


}

export default Item;