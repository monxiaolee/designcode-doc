import Nest from '../collection/nest.js'

class UnionFindSet {
	constructor(data) {
		this.data = data
		this.nodes = []
		this.originLinks = []
		this.links = []
		this.set(data)
		this.father = []
		this.connectedComp = []
	}

	set(data) {
		if (!data) {
			throw new Error('空数据集！')
		}

	  	if (data.nodes === undefined && !Array.isArray(data.nodes)) {
	  		throw new Error('空nodes！')
	  	}

	  	this.nodes = data.nodes
	 	this.originLinks = data.links
	}

	linksFormat() {
		let originLinks = this.originLinks
		let links = this.links
		let nodes = this.nodes

		originLinks.forEach(function(item) {
			let source = item.source
			let target = item.target

			let sIndex
			let tIndex

			switch (typeof source) {
				case 'object':
					sIndex = nodes.findIndex(function(value, index, arr) {return value.identify == source.identify})
					tIndex = nodes.findIndex(function(value, index, arr) {return value.identify == target.identify})
				  break
				case 'number':
					sIndex = source
					tIndex = target
			  	break
				default:
				throw new Error('links数据格式有误！')
			}

			links.push({ source: sIndex, target: tIndex })
		})
	}
	init() {
		let nodes = this.nodes
		let father = this.father
		nodes.forEach(function(item, i) {
			father[i] = i
		})
	}

	find(index) {
		while (this.father[index] !== index) {
			index = this.father[index]
		}
		return index
	}

	union(source, target) {
		let min = Math.min(source, target)
		let max = Math.max(source, target)
		this.father[max] = min
	}

	createFather() {
		let nodes = this.nodes
		let links = this.links
		for (let len = links.length, i = 0; i < len; i++) {
			let sIndex = links[i].source
			let tIndex = links[i].target
			let index1 = this.find(sIndex)
			let index2 = this.find(tIndex)

			if (index1 !== index2) {
				this.union(index1, index2)
			}
		}
		for (let len = nodes.length, i = 0; i < len; i++) {
			nodes[i].belongTree = this.father[i]
		}
	}

	createConnectedComp() {
		let connectedComp
		let nodes = this.nodes
		connectedComp = Nest().key(function (d) { return d.belongTree }).entries(nodes)
		let len = connectedComp.length
		// 计算每一棵树的结构
		for (let i = 0; i < len; i++) {
			let belongTree = connectedComp[i].key
			let upperBelongTree = nodes[belongTree].belongTree

			connectedComp[i].union = false

			if(connectedComp[i].values[0].belongTree !== upperBelongTree) {
				for (let valuesLen = connectedComp[i].values.length, j = 0; j < valuesLen; j++) {
					connectedComp[i].values[j].belongTree = upperBelongTree
					connectedComp[i].values[j].preBelongTree = true
				}

				let mergeTo = connectedComp.findIndex(function(value, index, arr) {
					return value.key == upperBelongTree
				})
				connectedComp[mergeTo].values = connectedComp[mergeTo].values.concat(connectedComp[i].values)
				connectedComp[i].union = true
			}
		}

		for (let i = 0; i < len; i++) {
			if (connectedComp[i].union === false) {
				this.connectedComp.push(connectedComp[i])
			}
		}
	}

	addTreeIndex() {
		let nodes = this.nodes
		let connectedComp = this.connectedComp

		for (let len = connectedComp.length, i = 0; i < len; i++) {
			for (let valueLen = connectedComp[i].values.length, j = 0; j < valueLen; j++) {
				connectedComp[i].values[j].treeIndex = j
			}
		}
	}

	main() {
		this.init()
		this.linksFormat()
		this.createFather()
		this.createConnectedComp()
	}
}

export default UnionFindSet
