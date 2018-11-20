<template>
	<div class="item-list">
		<div class="item-category">
			<div class="item-header">输入</div>
			<div class="item-content">
				<div class="item" data-type="INPUT" data-name="READDATA">
				    <Button>读取数据</Button>
			    </div>
			</div>
		</div>

		<div class="item-category">
			<div class="item-header">处理方法</div>
			<div class="item-content">
				<div class="item" data-type="FUNCTION" data-name="LOGIC_RULE">
					<Button>逻辑规则</Button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
  export default {
    name: 'item-list',
    data() {
      return {
      }
    }
  }
</script>
<style lang="less" scoped="">
	.item-list {
	    box-sizing: border-box;
	    padding-left: 20px;
	}
	.item-category {
	    padding: 10px 0;
	}

	.item-header {
	    margin-bottom: 10px;
	    color: #999;
	    font-size: 14px;
	}
</style>