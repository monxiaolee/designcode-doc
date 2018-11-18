import * as d3 from 'd3'
import * as util from './util'
import { type, bgColor } from './enum'

class Item {
	constructor(params) {
		this.container = params.container,
		this.id = params.id || util.makeId(),
		this.x = params.x,
		this.y = params.y,
		this.name = params.name,
		this.type = type[params.type]

		// 回调事件
		this.onDrag = params.onDrag
		this.onClick = params.onClick

		// 私有属性
		this._group = null
		this._dragDeltaX = 0
		this._dragDeltaY = 0

		this._createElement()
		this._bindEvent()
	}

	/**
	* 创建svg元素
	* @private
	*/
	_createElement() {
		let group = this.container.append('g')
			.attr('transform', 'translate(${this.x}, ${this.y})')
			.attr('class', 'item')
		this._group = group
		group.append('rect')
			.attr('width', 120)
			.attr('height', 30)
			.attr('rx', 5)
			.attr('fill', bgColor[this.type])
			.attr('class', 'item item-rect')

		// let iconGroup = group.append('g')

	}

	/**
	* 绑定事件
	* @private
	*/
	_bindEvent() {
		let drag = d3.drag()
			.on("start", this._onGroupDragstart.bind(this))
			.on("drag", this._onGroupDrag.bind(this))

		this._group.call(drag)
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
		this._group.raise().attr('transform', 'translate(${this.x}, ${this.y})')
		// this.onDrag(this)
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


}

export default Item;