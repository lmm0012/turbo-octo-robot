<template>
	<div>
		{{asd}}
	</div>
</template>
<script type="text/javascript">
	export default{
		created:function(){
			console.log(this.$route.params.id)
			console.log('http://127.0.0.1:3000/api/detail?comicid='+this.$route.params.id)
		},
		data(){
			return{
				asd:'1'
			}
		}
	}
</script>
<style scoped>

</style>