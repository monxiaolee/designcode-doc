<template>
	<div id="topo-container">
		<item-list id="item-list-left"></item-list>
		<div id="chart-container">
			<svg id="topo-chart" width="5000" height="5000"></svg>
		</div>
	</div>
</template>
<script>
	import * as d3 from "d3"
	import itemList from './item-list.vue'
	import Chart from './chart'
	
	let chart = null
	export default {
		name: "d3Topo",
		components: { itemList },
		data() {
			return {

			}
		},
		mounted() {
			let container = d3.select("#topo-chart")
			chart = new Chart({
				container: container
			})
			this.bindDragEvent()

		},
		methods: {
			bindDragEvent() {
				// 临时变量我再前边加个$
				let dragDeltaX, dragDeltaY, dragItem, $dragItem
				let items = d3.selectAll('.item-list .item')

				let drag =  d3.drag()
					.on("start", function() {
						let mousePosition = d3.mouse(this)
						dragDeltaX = mousePosition[0]
						dragDeltaY = mousePosition[1]
						dragItem = this.cloneNode(true)
						document.getElementsByTagName('body')[0].append(dragItem)
			            $dragItem = d3.select(dragItem)
			            getItemPosition($dragItem, d3.event.sourceEvent.x - dragDeltaX, d3.event.sourceEvent.y - dragDeltaY)
					})
					.on("drag", function() {
						getItemPosition($dragItem, d3.event.sourceEvent.x - dragDeltaX, d3.event.sourceEvent.y - dragDeltaY)
					})
					.on("end", function() {
						let $container = document.getElementById('chart-container')
						let position = {
			              x: d3.event.sourceEvent.x - dragDeltaX - $container.offsetLeft,
			              y: d3.event.sourceEvent.y - dragDeltaY - $container.offsetTop
			            }
			            if(position.x > 0) {
			            	console.log(position.x, position.y, $dragItem.attr('data-name'), $dragItem.attr('data-type'))
			            	chart.addItem({
			            		x: position.x,
			            		y: position.y,
			            		name: $dragItem.attr('data-name'),
               					type: $dragItem.attr('data-type')
			            	})

			            }
			            // $dragItem.remove()
						console.log('拖拽结束')
					})

				items.call(drag)

				let getItemPosition = function($item, x, y) {
		          	$item.attr('style', `position:absolute;transform:translate(${x}px, ${y}px)`)
		        }
			}
		}
	}
</script>
<style lang="less" scoped>
	#item-list-left {
		/*top是0 bottom是0 实现百分之百*/
	    position: absolute;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    width: 160px;
	    border-right: 1px solid #ccc;
	    background: #f3f3f3;
	}
	#chart-container {
    position: absolute;
    top: 0;
    left: 160px;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }

  #topo-chart {
    cursor: crosshair;

    /deep/ .item {
      cursor: move;

      &.active .item-rect {
        stroke: #999;
        stroke-width: 1px;
        stroke-dasharray: 5px;
      }
    }

    /deep/ .item_label {
      font-size: 13px;
      fill: #fff;
      stroke-width: 0;
      user-select: none;
    }

    /deep/ .port {
      fill: #ddd;
      stroke: #999;
      stroke-width: 1;
      cursor: crosshair;
    }

    /deep/ .port-hovered {
      fill: #ff7f0e;
      stroke: #ff7f0e;
    }

    /deep/ .line {
      fill: none;
      stroke: #999;
      stroke-width: 3px;

      &.active {
        stroke: #ff7f0e;
      }
    }
  }
</style>