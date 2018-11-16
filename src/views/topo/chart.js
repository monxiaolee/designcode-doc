import Item from './item'
import * as d3 from 'd3'

class Chart {
	constructor(params) {
		this.container = params.container

		this.list = {}
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
			type: params.type
		})

		this.list[item.id] = item
		console.log(item)
		return item

	}
}

export default Chart;