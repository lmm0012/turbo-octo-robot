<template>
	<div class="container">
		<router-view/>
		<!-- <div class="ind">
			{{ind}}
		</div> -->
		<div class="liebiao" v-for='liebiao in list2'>
			<div class="vertical_image" @click='xiangqing(liebiao.items[0].story_id)' :style="'background-repeat:no-repeat; border-radius:1rem 1rem 0 0; position:relative; background-size:100% 100%;background-image:url('+liebiao.items[0].vertical_image+')'">
				<div class="dadingwei">
					<div class="redu" >
						<span class="huo">
							<img style="width:1rem; height:1rem;" src="../../assets/images/huo.png">
						</span>
						<span class="read_msg_sum" style="color:red">
							{{liebiao.items[0].ground_stat.read_msg_sum}}
						</span>
					</div>
					<div class="xiaodingwei">
						<div class="tags" style="position:absolute; right:1rem; top:1rem;">
							{{liebiao.items[0].tags[0].name}}
						</div>
						<div class="shuqian">
							<img style="width:3rem; height:3rem;" src="../../assets/images/shuqian.png">
						</div>
					</div>
				</div>	
			</div>
			<div class="desc">
			{{liebiao.items[0].desc}}
			</div>
			<div class="auto">
				<div class="avatar">
					<img :src="liebiao.items[0].host_user_info.avatar" >
				</div>
				<div class="nick_name">
					{{liebiao.items[0].host_user_info.nick_name}}
				</div>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		//自己分析去 
		 props: {
      		ind: 0
    	},
		data(){
			return {
				list1:[],
				list2:[],
				
				// shuqian:{backgroundImage:'url('+require('../../assets/images/shuqian.png')+')'}
			}
		},
		created:function(){
	
			var that = this
			var arr1 = [];
			var arr2 = [];
			this.$http.get('http://127.0.0.1:3000/api/week').then(function(res){
				console.log(res.data.data)
				res.data.data.forEach(function(item){
					if(item.layout=='FeedMixLaunch'){
						arr1.push(item)
					}else{
						arr2.push(item)
					}
				})
				that.list1 = arr1;
				that.list2 = arr2;
				console.log(that.list1)
				console.log('----------------------------------------------')
				console.log(that.list2)
			}).catch(function(error){ 
          	})

		},
		methods:{
			xiangqing: function(val){
				this.$router.push(
						{name:"xiangqing",
						params: {id: val}
				})			
			}
		}	
	}
</script>
<style scoped>
.container{width:90%; margin: 0 auto; flex-wrap:wrap; display:flex; justify-content:space-between; background-color:#f7f7f7;}
.liebiao{width:48%; height:30rem; border-radius:1rem; background-color:white; margin:1rem 0;}
.vertical_image{width:13.5rem; height:21rem;  }
.dadingwei{width:15rem; height:3rem; position:absolute; bottom:0; display:flex; justify-content:space-around;}
.redu{width:5rem; height:3rem; display:flex; justify-content:center;align-items:center;}
.huo{width:1rem; height:1rem;}
.xiaodingwei{width:3rem; height:3rem; display:flex; position:relative;}
.shuqian{width:3rem; height:3rem;}
.desc{width:12.5rem; height:3rem;font-size:12px; padding:0.5rem;}
.auto{width:12.5rem; height:4rem;display:flex;  align-items:center; padding:0.5rem; }
.avatar{width:3rem; height:3rem; border-radius:1.5rem; overflow:hidden; margin-left:0.5rem;}
.avatar img{width:4rem; height:4rem; margin-right:.5rem;}
.nick_name{font-size:10px; margin-left:2rem;}
</style>