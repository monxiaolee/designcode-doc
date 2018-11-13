<template>
	<div id="topo-container">
		<item-list id="item-list-left"></item-list>
	</div>
</template>
<script>
	import * as d3 from "d3"
	import itemList from './item-list.vue'
	
	export default {
		name: "d3Topo",
		components: { itemList },
		data() {
			return {

			}
		},
		mounted() {
			let container = d3.select("#topo-container")
			this.bindDragEvent()

		},
		methods: {
			bindDragEvent() {
				let items = d3.selectAll('.item-list .item')

				let drag =  d3.drag().on("start", function() {
					console.log('111111')
				})
			}
		}
	}
</script>
<style lang="less" scoped="">
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
</style>