<template>
	<i-article>
		<article>
			<p>一段d3节点相关的描述文档</p>
			<br>
			<router-link :to="'/d3FNetwork/ForestMatrixLayout'" target="_blank">
				<Button type="primary">demo演示</Button>
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