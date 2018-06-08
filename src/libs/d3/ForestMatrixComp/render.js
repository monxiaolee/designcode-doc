import * as d3 from 'd3'
class TreeGraph {
	constructor(tree, treeName) {
		this.nodes = tree.nodes
		this.links = tree.mylinks
		this.options = tree.options
		this.options.width = 100 + d3.max(this.nodes, function(d) {return d.x })
		this.options.height = 100 + d3.max(this.nodes, function(d) {return d.y })
		this.svg = d3.select('#' + treeName)
					 .append('svg')
					 .attr('width',this.options.width)
					 .attr('height',this.options.height)
					//  .attr('height',this.options.height * tree.connectedComp.length)
	}

	drawTree() {
 		let nodes = this.nodes
 		let links = this.links
		let type = this.options.linkType22
		let root = this.root
		console.log('nodes',nodes[0])
		for(let i=0;i<nodes.length;i++){
			this.svg.append("circle")
			    .attr("cx",nodes[i].x)
			    .attr("cy",nodes[i].y)
			    .attr("r",this.options.nodesRadius)
			    .attr("fill","blue")
			    .attr("id",function(){
			    	return "matrixCircle" + nodes[i].index
			    })
			    .attr("opacity",1)

			this.svg.append("text")
			    .attr("x",nodes[i].x)
			    .attr("y",nodes[i].y)
				  .attr('dx', 8)
			    .attr("opacity",1)
			    .attr("id",function(){
			    	return "matrixText" + nodes[i].index
			    })
			    .style("font-size",'6px')
			    .text(nodes[i].index)
		}

		for (let i=0;i<links.length;i++) {
			let link = links[i]
			let sIndex = ((typeof link.source) == 'object') ? nodes.findIndex(function(value, index, arr){return value.identify == link.source.identify }) : link.source
			let tIndex = ((typeof link.target) == 'object') ? nodes.findIndex(function(value, index, arr){return value.identify == link.target.identify }) : link.target

			let source = nodes[sIndex]
			let target = nodes[tIndex]
			this.svg.append("line")
			    .attr("x1",source.x)
			    .attr("y1",source.y)
			    .attr("x2",target.x)
			    .attr("y2",target.y)
			    .attr("class",function() {
			    	return links[i].type
			    })
			    .attr("strok-dasharray",function() {
			    	if (links[i].type !== 'interLevelParents') {
			    		return '5,5'
			    	}
			    })
			    .attr("stroke",function() {
			    	switch (links[i].type) {
			    		case 'crossLevel':
			    		return 'pink'
			    		break

			    		case 'interLevelParents':
			    		return 'green'
			    		break

			    		case 'interLevelNParents':
			    		return 'orange'
			    		break

			    		case 'innerLevel':
			    		return 'purple'
			    		break
			    	}
			    })
			    .attr("stroke-width","0.5px")
			    .attr("opacity",function() {
			    	if (links[i].type === 'interLevelParents') {
			    		return 0.5
			    	} else {
			    		return 0.1
			    	}
			    })

			if (links[i].type === 'selfLoop') {
				d3.select('body').select('#' + 'matrixCircle' + links[i].source).attr('fill', 'red')
			}
		}
	}
}

function drawTree(tree,treeName){
	let treeGraph = new TreeGraph(tree,treeName);
	treeGraph.drawTree();
}

module.exports = drawTree
