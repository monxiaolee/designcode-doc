import Item from './item'
import * as d3 from 'd3'

class Chart {
	constructor(params) {
		this.container = params.container

		this.list = {}

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
			onDrag: this._onItemDrag.bind(this),
			onClick: this._onItemClick.bind(this)
		})

		this.list[item.id] = item
		return item

	}

	/**
	 * 绑定事件 
	 */
	_bindEvent() {
		this.container.on('mousemove', this._onMousemove.bind(this))
	}

	/**
	 * 鼠标在画板中移动
	 */
	_onMousemove() {
		
	}

	/**
	 * 元素移动回调事件
	 * @ param item
	 */
	_onItemDrag(item) {
		console.log("元素移动的回调函数")
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