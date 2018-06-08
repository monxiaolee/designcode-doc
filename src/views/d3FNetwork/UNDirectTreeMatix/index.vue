<template>
	<div style="height: 100%">
		<d3FNetworkLayout>
			<div style="height: 100%;" id="undirectTreeMatrix">
				
			</div>
		</d3FNetworkLayout>
	</div>
</template>
<script>
	import d3FNetworkLayout from '../../../components/d3FNetwork-layout'
	import data from '../../../../assets/data/sss.json'

	import UnionFindSet from '../../../libs/d3/unionFindSet/UnionFindSet'
	import UNDirectForestMatrix from '../../../libs/d3/betterForest/UNDirectForestMatrix'
	import render from './render'

	export default {
		data () {
			return {
				data: data,
				unionFindSet: {},
				treeMatrix: {},
				width: 1920,
				height: 1000
			}
		},
		methods: {

		},
		mounted () {
			this.unionFindSet = new UnionFindSet(this.data)
			this.unionFindSet.main()
			this.tree = new UNDirectForestMatrix({nodes: this.data.nodes, links: this.data.links, connectedComp: this.unionFindSet.connectedComp}, this.width, this.height)
			this.treeMatrix = this.tree.main()
			render(this.treeMatrix, 'undirectTreeMatrix')
		},
		components: {
			d3FNetworkLayout
		}
	}
</script>