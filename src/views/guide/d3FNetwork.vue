<template>
	<i-article>
		<article>
			<p>一段d3节点相关的描述文档</p>
			<br>
			<router-link :to="'/d3FNetwork/ForestMatrixLayout'" target="_blank">
				<Button type="primary">d3布局</Button>
			</router-link>

			<router-link :to="'/d3Topo/index'" target="_blank">
				<Button type="primary">d3拓扑图</Button>
			</router-link>
		</article>
	</i-article>
</template>
<script>
	import iArticle from '../../components/article.vue';
	export default {
		data () {
			return {

			}
		},
		methods: {
		},
		components: {
			iArticle
		}
	}
</script>