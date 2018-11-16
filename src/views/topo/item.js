import * as d3 from 'd3'
import * as util from './util'
import { type } from './enum'

class Item {
	constructor(params) {
		this.constructor = params.constructor,
		this.id = params.id || util.makeId(),
		this.x = params.x,
		this.y = params.y,
		this.name = params.name,
		this.type = type[params.type]
	}
}

export default Item;