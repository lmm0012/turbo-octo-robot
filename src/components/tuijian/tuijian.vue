<template>
	<div>
		<div class="container">
			<div class="tuijian">
				<div class="data" v-for='item in list'>
					<div class="item" :style="'background-repeat:no-repeat; background-size:100% 100%;background-image:url('+item.background_image+')'">
						<div class="title">{{item.title}}</div>
						<div class="desc">{{item.desc}}</div>
						<img :src="item.images[0]" class="images">
					</div>
				</div>
			</div>
			<div class="tuijianxia">
				<div class="week" v-for='(items,index) in week' @click='show(index)'>
					{{items}}
				</div>
			</div>
		</div>
		<div class="dayContent">
			<mon :ind = 'test'></mon>
		</div>
	</div>
</template>
<script type="text/javascript">
	import mon from './mon'
	export default{
		components:{mon},
		data(){
			return {
				list:[],
				week:[],
				test:0
			}
		},
		created:function(){
			var that = this
			this.$http.get('http://127.0.0.1:3000/api/tuijian').then(function(res){
				console.log(res)
				that.list = res.data.data[0].subject_recommends
				
				// console.log(that.list)
				// console.log(res.data[0].subject_recommends)
			}).catch(function(error){ 
          	})
			
   			//获取今天昨天 写法
          	var date = new Date();
          	var weeks =['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
          	//获取今天星期几 输出 0~6
          	var num = date.getDay() //这就是 当天 
          	//这里循环出 0 ~6 对吧 
          	for(var i=0; i<7; i++){
          		//系统获取的星期 是 星期天 0~~ 星期六 6
          		if(num==0){
          		weeks =	['今天','星期一','星期二','星期三','星期四','星期五','昨天']
          		}else{
          			if(num==i){
          			weeks[i] = '今天'
	          		}else if(num-1 == i){ // 0-1 = -1
	          			weeks[i] = '昨天'
	          		}
          		}
          	}
          	console.log(weeks)

          	//这上面输出了替换好的数组对吧 现在我们做的不就是截取拼接
          	var arr =weeks.slice(num+1).concat(weeks.slice(0,num+1)) //数组拼接方法
          	that.week = arr

  			//
		},
		methods:{
			show:function(index){
				this.test = index
			}
		}	
	}
// http://api.bibi.etouch.cn/bbc/api/rest/common/v5/feeds?up=IPHONE&date_num=0&uid=&channel=AppStore&brand=IPHONE_6S&auth_token=&tag_id=&ver_name=1.2.1&time_tag=0&size=20&operate_type=PULL_DOWN&offset=0&ver_code=29&device_id=5bc64566dbf3446a2314222bb29be86a&os_version=120&device=IPHONE26474A72-798D-4530-8004-F0E6A00DCC4C&app_start_cnt=32&app_key=66666662&app_sign=586097583be3fbccecff56e8670d823f&timestamp=1543938484586&&

// http://api.bibi.etouch.cn/bbc/api/rest/common/stories/27498/detail_info?up=IPHONE&uid=&channel=AppStore&brand=IPHONE_6S&auth_token=&ver_name=1.2.1&limit=20&offset=0&ver_code=29&device_id=5bc64566dbf3446a2314222bb29be86a&os_version=120&device=IPHONE26474A72-798D-4530-8004-F0E6A00DCC4C&sortOrder=ASC&app_key=66666662&app_sign=2818089f14f48efd1b1620973b50b2ce&timestamp=1543938858022&&
</script>
<style scoped>
.container{width:100%; border-radius:20px; margin-top:-20px; background-color:white;}
.tuijian{width:90%; height:18rem; display:flex; flex-wrap:wrap; border-bottom:.1rem solid #ccc; margin: 0 auto; justify-content:space-between; padding-top:.825rem;}
.data{width:48%; height:8rem;}
.item{width:13.5rem; height:8rem;  background-color:#ccc; position:relative;}

.images{width:5rem; height:6rem; position:absolute; left:8rem; top:1.5rem;}
.title{font-size:1.4rem; font-weight:bold; position:absolute; top:3rem; left:1rem;}
.desc{font-size:1rem; position:absolute; top:4.5rem; left:1rem;}
.tuijianxia{width:90%; height:3rem; display:flex; justify-content:space-between;align-items:center;  margin: 0 auto}
.week{wdith:100%; height:1.5rem; font-size:12px; }
.dayContent{width:100%; background-color:#f7f7f7; margin-top:1rem;}
</style>