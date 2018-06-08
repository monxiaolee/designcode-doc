import Nest from '../collection/nest'

class UNDirectForestMatrix {
	constructor(data, width, height) {
		this.nodes = []
		this.mylinks = []
		this.originLinks = []
	    this.connectedComp = []
		this.setData(data)

		this.options = {
	      width: width,
	      height: height,

	      childStep: 15,
	      levelStep: 0,
	      treeStep: 100,
	      matrixLength: 20,

	      layoutFlag: 0,
	      verticalFlag: 0,
	      horizontalFlag: 0,

	      linkType1: 'innerLevel', // 同层次
	      linkType21: 'interLevelNParents', // 相邻非父子
	      linkType22: 'interLevelParents', // 父子层
	      linkType3: 'crossLevel', // 跨层次
	      linkType4: 'selfLoop', // 自环

	      nodesRadius: 7.5,
	      selfLoopRadius: 30
	    }
	}

	setData(data) {
	    if (!data) {
	    	throw new Error('空数据集！')
	    }
	    if (data && data.nodes === undefined && !Array.isArray(data.nodes)) {
	    	throw new Error('nodes数据格式有误！')
	    }
	    if (data && data.connectedComp === undefined && !Array.isArray(data.connectedComp)) {
	    	throw new Error('connectedComp数据格式有误！')
	    }
	    this.nodes = data.nodes
	    this.originLinks = data.links || []
	    this.linksFormat()
	    this.connectedComp = data.connectedComp

	    this.nodes.forEach(function (item) {
	      item.previousx = item.x
	      item.previousy = item.y
	    })
	}

	linksFormat() {
		let originLinks = this.originLinks
		let mylinks = this.mylinks
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

			mylinks.push({ source: sIndex, target: tIndex })
		})
	}

	createNeighborMatrix() {
		let nodes = this.nodes
		let mylinks = this.mylinks

		nodes.forEach(function(item, i) {
			item.values = []
			item.matrix = []
			item.depth = 0
			item.parent = {}
			item.index = i
		})

		mylinks.forEach(function(item, i) {
			let source = item.source
			let target = item.target
			item.type = ''

			if (source !== target) {
					nodes[source].matrix.push({neighbor: target, linkIndex: i})
					nodes[target].matrix.push({neighbor: source, linkIndex: i})
			}	
		})
	}

	createLevelOrder() {
		let nodes = this.nodes
		let mylinks = this.mylinks
		let connectedComp = this.connectedComp

		connectedComp.forEach(function(item) {
			item.values[0].parent = { root: true }
			item.values[0].depth = 1
		})

		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let currentIndex
			let currentTree
			let currentNeighbor
			let queue = []
			let treeArray = []
			let currentBelongTree

			let values = connectedComp[i].values
			if (values.length > 0) {
				queue.push(values[0].index)
				currentBelongTree = values[0].belongTree
			}
			while (queue.length) {
				currentIndex = queue.pop()
				currentTree = nodes[currentIndex]
				treeArray.push(currentTree)
				for (let matrixLen = currentTree.matrix.length, j = 0; j < matrixLen; j++) {
					currentIndex = currentTree.matrix[j].neighbor
					currentNeighbor = nodes[currentIndex]
			        if (!currentNeighbor.parent.identify && currentNeighbor.belongTree == currentBelongTree && currentNeighbor.index !== currentBelongTree) {
			        	currentTree.values.push(currentNeighbor)
			        	currentNeighbor.parent = currentTree
			        	queue.unshift(currentIndex)
			        }
				}
			}
			connectedComp[i].treeArray = treeArray
		}
	}

	createDepth() {
		let nodes = this.nodes
		let connectedComp = this.connectedComp

		nodes.forEach(function(item, i) {
			if (item.parent.root && item.belongTree !== i) {
				throw new Error('数据有误！')
			} else if (!item.parent.root && !item.parent.identify) {
				throw new Error('数据处理有误！')
			}
		})

		connectedComp.forEach(function(outerItem) {
			let treeArray = outerItem.treeArray
			let currentLastParentIndex = 0
			let currentParentIndex
			let currentDepth = outerItem.values[0].depth
			treeArray.forEach(function(innerItem, i) {
				if (i > 0) {
					currentParentIndex = treeArray.indexOf(innerItem.parent)
					if (currentParentIndex == -1) {
						throw new Error('数据处理createLevelOrder有误！')
					}
					if (currentParentIndex > currentLastParentIndex) {
						currentLastParentIndex = i - 1
						currentDepth++
					} 
					innerItem.depth = currentDepth + 1
				}
			})
		})
	}

	setLinkType() {
		let nodes = this.nodes
		let mylinks = this.mylinks
		let options = this.options

		mylinks.forEach(function(item) {
			let sIndex = item.source
			let tIndex = item.target

			let source = nodes[sIndex]
			let target = nodes[tIndex]

			if (!source.depth || !target.depth) {
				throw new Error('数据处理有误！')
			}

			let depthDist = Math.abs(source.depth - target.depth)
			if (depthDist === 0) {
				if (source === target) {
					item.type = options.linkType4
				} else {
					item.type = options.linkType1
				}
			} else if (depthDist === 1) {
				if (source.parent === target || target.parent === source) {
					item.type = options.linkType22
				} else {
					item.type = options.linkType21
				}
			} else if (depthDist > 1) {
				item.type = options.linkType3
			}
		})

		mylinks.forEach(function(item) {
			if (!item.type) {
				console.log(JSON.stringify(item))
			}
		})
	}

	createLevelTree() {
		let connectedComp = this.connectedComp
		let options = this.options

		connectedComp.forEach(function(item) {
			let treeArray = item.treeArray
			let levelTree = []
			levelTree = Nest().key(function(d) {return d.depth}).entries(treeArray)
			item.levelTree = levelTree
       		item.levelStep = (options.height - options.nodesRadius) / item.levelTree.length - options.nodesRadius * 2
		})
	}

	findChildrenLenMax(arr) {
		let result = arr[0].values.length

		arr.forEach(function(item) {
			result = Math.max(result, item.values.length)
		})
		return result
	}

	initTreePos() {
		let radius = this.options.nodesRadius
		let childStep = this.options.childStep
		let matrixLength = this.options.matrixLength

		let nodes = this.nodes
		let connectedComp = this.connectedComp

		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let levelTree = connectedComp[i].levelTree
			let treeArray = connectedComp[i].treeArray
			let levelStep = connectedComp[i].levelStep

			levelTree[0].values[0].x = this.options.width / 2
			levelTree[0].values[0].y = 100

			let yPreDown = levelTree[0].values[0].y
			let yNowUp

			for (let levelLen = levelTree.length, j = 1; j < levelLen; j++) {
				let currentParent = levelTree[j].values[0].parent
				let currentIndex = 0
				let currentParentX = currentParent.x
				let currentChildLength = currentParent.values.length
				let maxChildrenLen = this.findChildrenLenMax(levelTree[j - 1].values)
				let maxLevel = (maxChildrenLen % matrixLength) ? (Math.floor(maxChildrenLen / matrixLength)) : (Math.floor(maxChildrenLen / matrixLength) - 1)
				let yStart = levelStep * (levelTree[j].key - 1) + radius * (levelTree[j].key * 2 - 1)
				let yEnd = yStart - radius * 2 * maxLevel
				yNowUp = yEnd
				if (Math.abs(yPreDown - yNowUp) < radius * 4 || (yPreDown - yNowUp) > radius * 4) {
					yStart += (radius * 4 + Math.abs(yPreDown - yNowUp))
				}
				yPreDown = yStart

				for (let valuesLen = levelTree[j].values.length, k = 0; k < valuesLen; k++) {
					if (currentParent !== levelTree[j].values[k].parent) {
						currentParent = levelTree[j].values[k].parent
						currentParentX = currentParent.x
						currentChildLength = currentParent.values.length
						currentIndex = 1
					} else {
						currentIndex++
					}

					let x
					let y
					if (currentParent.values.length <= matrixLength) {
                		x = parseFloat(currentIndex - (currentChildLength + 1) / 2) * (radius + childStep) + currentParentX
                		y = yStart
					} else {
						levelTree[j].values[k].cluster = true
		                x = parseFloat((currentIndex - 1) % 20 - 21 / 2) * (radius * 2) + currentParentX
		                y = yStart
		                if(currentIndex % matrixLength !== 0) {
		                    y -= Math.floor(currentIndex / matrixLength) * radius * 2
		                } else {
		                    y -= (Math.floor(currentIndex / matrixLength) - 1) * radius * 2
		                }
		            }
		            levelTree[j].values[k].x = x
		            levelTree[j].values[k].y = y
				}
			}
		}
	}

	adjustCoverNodes(connectedComp, node, moveDistX) {
		let nodes = this.nodes
		let coverMap = []
		let parentIndex = node.parent.index
		let parent = node.parent
		let child
		let treeArray = connectedComp.treeArray
		let levelTree = connectedComp.levelTree
		let currentNode = node
		let currentDepth = currentNode.depth
		let currentIndex = treeArray.indexOf(currentNode)
		let levelLen = levelTree.length
		//covered brother
		coverMap.push({key:node.depth,value:treeArray.indexOf(node)})
		//covered parents
		while (parentIndex) {
	    	parent = nodes[parentIndex]
	        let key = parent.depth
	        let value
	        if(!parent.cluster) {
	          value = treeArray.indexOf(parent)
	        } else {
	          let index = levelTree[parent.depth-1].values.findIndex(function(d){return d.parent===parent.parent})
	          value = treeArray.indexOf(levelTree[parent.depth-1].values[index])
	        }
	        coverMap.push({key:key,value:value})

	        if (!parent.root) {
	    		parentIndex = parent.parent.index
	    	} else {
	    		parentIndex = undefined
	    	}
	    }
	    //covered children
	    while (currentDepth <= levelLen-1) {
	    	let key
	    	let value
	    	let levelIndex = levelTree[currentDepth].values.findIndex(function(value,index,arr){return treeArray.indexOf(value.parent) >= currentIndex})
	    	if (levelIndex != -1) {
		      	value = treeArray.indexOf(levelTree[currentDepth].values[levelIndex])
		      	key = currentDepth + 1
		      	coverMap.push({key:key,value:value})
		      	currentNode = treeArray[value]
		      	currentDepth = currentNode.depth
		      	currentIndex = value
	    	} else {
	      		currentDepth = levelTree.length
	    	}
	  	}

	    for (let i = 0; i < coverMap.length; i++) {
	    	let levelDepth = coverMap[i].key
	    	let index = coverMap[i].value

	    	while (index < treeArray.length && treeArray[index].depth === levelDepth) {
	      		treeArray[index].x += moveDistX
	      		index++
	    	}
	    }
	}

	coverCheck() {
		let radius = this.options.nodesRadius
		let childStep = this.options.childStep
		let connectedComp = this.connectedComp
		let matrixLength = this.options.matrixLength
		let nodes = this.nodes

		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let levelTree = connectedComp[i].levelTree

			for (let j = levelTree.length - 1; j >=1 ; j--) {
				for (let valuesLen = levelTree[j].values.length - 1, k = 0; k < valuesLen; k++) {
					let nodePre = levelTree[j].values[k]
					let nodeAfter = levelTree[j].values[k + 1]

					if (nodePre.parent !== nodeAfter.parent) {
						if (nodePre.cluster) {
							let index = k - (nodePre.parent.values.length) + matrixLength
							nodePre = levelTree[j].values[index]
						}
						let coverOrNot = (nodeAfter.x - nodePre.x >= (childStep + radius)) ? false : true
						if (coverOrNot) {
				            let moveDistX = nodePre.x - nodeAfter.x + childStep + radius
				            this.adjustCoverNodes(connectedComp[i], nodeAfter,moveDistX)
				        }
					}
				}
			}
		}
	}

	//计算每棵树的坐标范围
	computedTreeRange() {
		let connectedComp = this.connectedComp
		let treeStep = this.options.treeStep
		let accumulationX = 0
		let accumulationY = 0
		//根节点位置调整
		connectedComp.forEach(function(item) {
			let levelTree = item.levelTree
			if (levelTree.length > 1) {
				let maxx = -Infinity
				let minx = Infinity
				let values = levelTree[1].values
				values.forEach(function(item) {
					maxx = Math.max(maxx, item.x)
					minx = Math.min(minx, item.x)
				})
				levelTree[0].values[0].x = (minx + maxx) / 2
			}
		})

		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let values = connectedComp[i].values
			let maxX = -Infinity
			let minX = Infinity
			let maxY = -Infinity
			let minY = Infinity
			let moveDistY = 0
			let moveDistX = 0

			for (let valueLen = values.length, j = 0; j < valueLen; j++) {
				maxX = Math.max(values[j].x, maxX)
				minX = Math.min(values[j].x, minX)
				maxY = Math.max(values[j].y, maxY)
				minY = Math.min(values[j].y, minY)
			}
			connectedComp[i].maxY = maxY
			connectedComp[i].minY = minY
			if (i > 0) {
				moveDistY = connectedComp[i - 1].maxY - connectedComp[i - 1].minY + treeStep + accumulationY
			}
			connectedComp[i].moveDistY = moveDistY
			accumulationY = moveDistY

			connectedComp[i].minX = minX
			connectedComp[i].maxX = maxX
			if (i > 0) {
				moveDistX = connectedComp[i - 1].maxX - connectedComp[i].minX + treeStep + accumulationX
			}
			connectedComp[i].moveDistX = moveDistX
			accumulationX = moveDistX
		}
	}
	//horizontal layout
	forestHorizontal() {
		let vFlag = this.options.verticalFlag
		let revertY = vFlag ? true : false
		this.options.verticalFlag = 0

		let connectedComp = this.connectedComp
		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let values = connectedComp[i].values
			let moveDistX = connectedComp[i].moveDistX
			let moveDistY = connectedComp[i].moveDistY
			for (let valuesLen = values.length, j = 0; j < valuesLen; j++) {
				values[j].x += moveDistX
				//撤销纵向布局的影响
				if (revertY) {
					values[j].y -= moveDistY
				}
			}
		}
	}
	//vertical layout
	forestVertical() {
		let hFlag = this.options.horizontalFlag
		let revertX = hFlag ? true : false
		this.options.horizontalFlag = 0

		let connectedComp = this.connectedComp
		for (let len = connectedComp.length, i = 0; i < len; i++) {
			let values = connectedComp[i].values
			let moveDistX = connectedComp[i].moveDistX
			let moveDistY = connectedComp[i].moveDistY
			for (let valuesLen = values.length, j = 0; j < valuesLen; j++) {
				values[j].y += moveDistY
				//撤销横向布局的影响
				if (revertX) {
					values[j].x -= moveDistX
				}
			}
		}
	}
	//forest排列
	forestLayout(style) {
		let layoutFlag = this.options.layoutFlag
		if (!layoutFlag) {
			this.computedTreeRange()
			this.options.layoutFlag++
		}
		let vFlag = this.options.verticalFlag
		let hFlag = this.options.horizontalFlag

		switch (style) {
			case 'vertical':
			if (vFlag === 0) {
				this.forestVertical()
				this.options.verticalFlag++
			} else {
				alert('already vertical layout!')
			}
			break

			case 'horizontal':
			if (hFlag === 0) {
				this.forestHorizontal()
				this.options.horizontalFlag++
			} else {
				alert('already horizontal layout!')
			}
			break
		}

		// this.nodes.forEach(function (item) {
		// 	if (item.fixed) {
		// 		item.x = item.previousx
		// 		item.y = item.previousy
		// 	}
	 //    })
	}

	main() {
		this.createNeighborMatrix()
		this.createLevelOrder()
		this.createDepth()
		this.setLinkType()
		this.createLevelTree()
		this.initTreePos()
		this.coverCheck()
		this.forestLayout('vertical')

		return this
	}
}

export default UNDirectForestMatrix
