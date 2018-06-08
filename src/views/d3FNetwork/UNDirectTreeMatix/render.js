import * as d3 from 'd3'
class TreeGraph {
	constructor(tree, treeName) {
		this.nodes = tree.nodes
		this.links = tree.mylinks
		this.originLinks = tree.originLinks
		this.options = tree.options
		this.options.width = 100 + d3.max(this.nodes, function(d) {return d.x })
		this.svg = d3.select('#' + treeName)
					 .append('svg')
					 .attr('width',this.options.width)
					 .attr('height',this.options.height * tree.connectedComp.length)
	}

	drawTree() {
 		let nodes = this.nodes		
 		let links = this.links
 		let originLinks = this.originLinks
		let type = this.options.linkType22

		for(let i=0;i<nodes.length;i++){
			this.svg.append("circle")
			    .attr("cx",nodes[i].x)
			    .attr("cy",nodes[i].y)
			    .attr("r",this.options.nodesRadius)
			    .attr("fill","blue")
			    .attr("id",function(){
			    	return "lineCircle" + nodes[i].id
			    })
			    .attr("opacity",1)
			this.svg.append("text")
			    .attr("x",nodes[i].x)
			    .attr("y",nodes[i].y)
			    .attr("opacity",0)
			    .attr("id",function(){
			    	return "lineText" + nodes[i].id
			    })
			    .style("font-size",1)
			    .text(nodes[i].depth)
		}

		for (let i=0;i<links.length;i++) {
			let sIndex = links[i].source
			let tIndex = links[i].target

			if (links[i].type == 'selfLoop') {
				console.log(JSON.stringify(originLinks[i]))
			}

			switch(links[i].type)	
			{
				case "crossLevel":
				this.svg.append("line")
				    .attr("x1",nodes[sIndex].x)
				    .attr("y1",nodes[sIndex].y)
				    .attr("x2",nodes[tIndex].x)
				    .attr("y2",nodes[tIndex].y)
				    .attr("class","crossLevel")
				    .attr("strok-dasharray","5,5")
				    .attr("stroke","pink")
				    .attr("stroke-width","0.5px")
				    .attr("opacity",1)
				break

				case "interLevelParents":
				this.svg.append("line")
					   .attr("x1",nodes[sIndex].x)
					   .attr("y1",nodes[sIndex].y)
					   .attr("x2",nodes[tIndex].x)
					   .attr("y2",nodes[tIndex].y)
					   .attr("class",'interlinkp')
					   .attr("stroke","green")
					   .attr("opacity",1)
				break

				// case "interLevelNParents":
				// this.svg.append("line")
				//    .attr("x1",nodes[sIndex].x)
				//    .attr("y1",nodes[sIndex].y)
				//    .attr("x2",nodes[tIndex].x)
				//    .attr("y2",nodes[tIndex].y)
				//     .attr("class","interlinknp")
				//     .attr("strok-dasharray","5,5")
				//     .attr("stroke","orange")
				//     .attr("stroke-width","0.5px")
				//     .attr("opacity",1)
				// break

				case "innerLevel":
				this.svg.append("path")
				    .attr("d",function(){
				    	let midY = Math.max(nodes[sIndex].y,nodes[tIndex].y) - 100
				    	let midX = (nodes[sIndex].x + nodes[tIndex].x) / 2
						let path = "M " + nodes[sIndex].x + "," + nodes[sIndex].y + " Q " + midX +"," + midY + " " + nodes[tIndex].x + "," + nodes[tIndex].y; 
						return path
				    })
				    .attr("fill","none")
				    .attr("stroke","purple")
				    .attr("class","innerlink")
				    .attr("opacity",1)
				break

				case "selfLoop":
				this.svg.append("circle")
				    .attr("cx",nodes[sIndex].x)
				    .attr("cy",nodes[sIndex].y - this.options.selfLoopRadius)
				    .attr("r",this.options.selfLoopRadius)
				    .attr("stroke","red")
				    .attr("fill","none")
				    .attr("stroke-width","1px")
				    .attr("opacity",0.5)
				    .attr("class","selfloop")
				break
			}
		}
	// 	for (let i=0;i<links.length;i++) {
	// 		let link = links[i]
	// 		let sIndex = link.source
	// 		let tIndex = link.target

	// 		this.svg.append("line")
	// 			    .attr("x1",nodes[sIndex].x)
	// 			    .attr("y1",nodes[sIndex].y)
	// 			    .attr("x2",nodes[tIndex].x)
	// 			    .attr("y2",nodes[tIndex].y)
	// 			    .attr("class","crossLevel")
	// 			    .attr("stroke","green")
	// 			    .attr("stroke-width","0.5px")
	// 			    .attr("opacity",0.5)
	// 	}
	}
}

function drawTree(tree,treeName){
	let treeGraph = new TreeGraph(tree,treeName);
	treeGraph.drawTree();
}

module.exports = drawTree