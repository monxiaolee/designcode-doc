import template from './template.html'
import style from './style.less'
import UnionFindSet from '../../../libenv/unionFindSet/UnionFindSet.js'
// import VerticalTree from '../../../libenv/betterForest/verticalTree.js'
import ForestMatrixCrosswise from '../../../libenv/betterForest/ForestMatrixCrosswise.js'
import ForestMatrix from '../../../libenv/betterForest/ForestMatrix.js'
import render from './render.js'

// import data from '../../../../assets/data/tree_3_connected.json'
// import data from '../../../../assets/data/tree_4_unconnected.json'
import data from '../../../../assets/data/tianyan6.json'
export default {
	template,
	data: function() {
		return {
			data: data,
			tree: {},
			treeLine: {},
			unionFindSet: {},
			width: 2000,
			height: 1000
		}
	},
	computed: {

	},
	method: {

	},
	ready() {
		this.unionFindSet = new UnionFindSet(this.data)
		this.unionFindSet.main()
		console.log('This forest has', this.unionFindSet.connectedComp.length, 'trees.')
		this.tree = new ForestMatrix({nodes: this.data.nodes,
											 links: this.data.links,
											 connectedComp: this.unionFindSet.connectedComp},
										   this.width,
										   this.height)
	 this.tree.setParams(
						 					{
						 						childStep: 25, // 同一棵树同层次节点之间的距离
						 						levelStep: 200, // 同一棵树内层次之间的距离 默认为0,不设置的话，会自动计算,建议设置
						 						treeStep: 100, // 横向树之间的距离 默认值100
						 						matrixLength: 20, // matrix块状长度 默认为20
						 						matrixBox: 50 // matrix块状布局内的 box大小 默认为0,
		})

    this.tree.main('vertical')  // vertical horizontal
		render(this.tree, 'forestMatrix')
	}
}
