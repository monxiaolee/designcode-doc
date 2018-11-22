import Item from './item'
import Line from './line'
import * as d3 from 'd3'

class Chart {
	constructor(params) {
		this.container = params.container

		this.list = {}
		this.lineList = {}
		this.drawingLine = false
    	this.currentLine = null

		this._bindEvent()
	}

	/*
	*添加元素
	*@param params 元素属性
	*/
	addItem(params) {
		let item = new Item({
			container: this.container,
			id: params.id,
			x: params.x,
			y: params.y,
			name: params.name,
			type: params.type,
			inputIds: params.inputIds,
			outputIds: params.outputIds,
			data: params.data,
			onDrag: this._onItemDrag.bind(this),
			onClick: this._onItemClick.bind(this),
			onMouseup: this._onItemMouseup.bind(this),
			onPortMousedown: this._onPortMousedown.bind(this),
			onPortMouseup: this._onPortMouseup.bind(this)
		})

		this.list[item.id] = item
		return item

	}

	/**
	 * 绑定事件 
	 */
	_bindEvent() {
		this.container.on('mousemove', this._onMousemove.bind(this))
		this.container.on('mouseup', this._onMouseup.bind(this))
	}

	/**
	* 创建连线
	* @ param fromItem
	* @ param portType
	* @ returns {Line}
	* @ private
	*/
	_addLine(fromItem, fromPortType, targetItem, targetPortType) {
		return new Line({
			container: this.container,
			fromItem: fromItem,
			fromPortType: fromPortType,
			targetItem: targetItem,
			targetPortType: targetPortType
		})
	}

	/**
	* 鼠标按下连线具柄回调
	*/
	_onPortMousedown(fromItem, fromPortType) {
		console.log("鼠标按下连线具柄回调")
		this.currentLine = this._addLine(fromItem, fromPortType)
		this.drawingLine = true
	}

	/**
	* 鼠标在画布中移动
	*/
	_onMousemove() {
		if(this.drawingLine && this.currentLine) {
			let coordinates = {
				x: d3.event.offsetX,
				y: d3.event.offsetY
			}
			this.currentLine.updataPath(coordinates)
			this.currentLine.path.classed('active', true)
		}
	}


	/**
	* 鼠标在连线具柄位置抬起后回调事件
	* @param targetItem
	* @param targetPortType
	* @private
	*/
	_onPortMouseup(targetItem, targetPortType) {
		console.log("鼠标在连上句柄位置抬起后的回调事件")
		if(!this.drawingLine) {
			return
		}

		this.currentLine.targetPortType = targetPortType
		this.currentLine.targetItem = targetItem
		this.currentLine.updataPath()
		this.currentLine.path.classed('active', false)

		// 记录input/output元素的id
		this.currentLine.fromItem[this.currentLine.fromPortType + 'Ids'].add(targetItem.id)
	    this.currentLine.fromItem[this.currentLine.fromPortType + 'PathIds'].add(this.currentLine.id)
	    this.currentLine.targetItem[this.currentLine.targetPortType + 'Ids'].add(this.currentLine.fromItem.id)
	    this.currentLine.targetItem[this.currentLine.targetPortType + 'PathIds'].add(this.currentLine.id)

		this.lineList[this.currentLine.id] = this.currentLine
		this.drawingLine = false
	}

	/**
    * 鼠标在元素位置抬起后回调事件，对元素进行自动连线
    * @param targetItem
    * @private
    */
    _onItemMouseup(targetItem) {
    	console.log("鼠标在元素位置抬起后回调事件，需要对元素进行自动连线")
    	if(!this.drawingLine)
    		return

    	this._onMouseup()
    }

	/**
	* 鼠标在空白处的回调事件
	*/
	_onMouseup() {
		if(!this.drawingLine) 
			return

		if(this.currentLine) {
			this.currentLine.remove()
			this.currentLine = null
		}
		this.drawingLine = false
	}


	/**
	 * 元素移动回调事件
	 * @ param item
	 */
	_onItemDrag(item) {
		console.log("元素移动的回调函数")

		console.log(this.lineList)
		if(item.inputPathIds.size) {
		    item.inputPathIds.forEach(id => {
		    	console.log(this.lineList[id])
		    	this.lineList[id].updataPath()
		    })
	    }

	    if(item.outputPathIds.size) {
		    item.outputPathIds.forEach(id => {
		    	this.lineList[id].updataPath()
		    })
	    }
	}

	/**
	 * 元素点击回调事件
	 * @ param item 元素实例对象
	 * @ private
	 */
	_onItemClick(item) {
		console.log("点击回调函数")
	}
}

export default Chart;