<template>
	<div style="height: 100%;">
		<d3FNetworkLayout>
			<div style="height: 100%;" id="forestMatrix">
				
			</div>
		</d3FNetworkLayout>
	</div>
</template>
<script>
	import d3FNetworkLayout from '../../../components/d3FNetwork-layout'
	import data from '../../../../assets/data/lmxTest06.json'

	import UnionFindSet from '../../../libs/d3/unionFindSet/UnionFindSet'
	import ForestMatrixCrosswise from '../../../libs/d3/betterForest/ForestMatrixCrosswise'
	import ForestMatrix from '../../../libs/d3/betterForest/ForestMatrix'
	import render from '../../../libs/d3/ForestMatrixComp/render'
	
	export default {
		data () {
			return {
				data: data,
				unionFindSet: {},
				width: 2000,
				height: 1000
			}
		},
		methods: {
		},
		mounted() {
			this.unionFindSet = new UnionFindSet(this.data)
			this.unionFindSet.main()
			console.log('这个forest是', this.unionFindSet.connectedComp.length, '树。')
			this.tree = new ForestMatrix({nodes: this.data.nodes, links: this.data.links, connectedComp: this.unionFindSet.connectedComp}, this.width, this.height)

			this.tree.setParams({
				childStep: 25, // 同一棵树同层次节点之间的距离
				levelStep: 200, // 同一棵树内层次之间的距离 默认为0,不设置的话，会自动计算,建议设置
				treeStep: 100, // 横向树之间的距离 默认值100
				matrixLength: 20, // matrix块状长度 默认为20
				matrixBox: 50 // matrix块状布局内的 box大小 默认为0,
			})

			this.tree.main('vertical')
			console.log(this.tree)
			render(this.tree, 'forestMatrix')
		},
		components: {
			d3FNetworkLayout
		}
	}
</script>
<style lang="less" scoped>
	.wrapper-content {
		width: 100%;
		height: 100%;
	}
</style>