<template>
	<div>
		<div class="tab" >
			<div class="wode" @click='wode()'>
				<img class="touxiang" src="../../assets/images/wode.png">
			</div>
			
			<div id="guantuifa">
				<div class="wenzi" v-for='(wenzi,index) in listone'>
					<div class="wenzi_name" @click='dianji(wenzi.path,index)' :style = "num==index?'color:red':''">
						{{wenzi.name}}
					</div>
				</div>
			</div>
			<div class="biji">
				<router-link to="/bi"><img class="bi" src="../../assets/images/bi.png"></router-link>
			</div>
		</div>
		<div class="mask" v-if='show' @click = "show=false">
    		<div class="maskCon">
    			<div class="shang">
    				<form action="" class="input-kw-form">
        				<input type="search" autocomplete="off" name="baike-search" placeholder="搜索故事,用户名" class="input-kw">
    				</form>
    				<div class="denglu">
    					<img src="../../assets/images/wode.png">
    					<div class="dianjidenglu">点击登录</div>
    				</div>
    			</div>
    			<div class="zhong" v-for='item in list'>
	    			<img class="icon" :src='item.icon'>
			    	<div>
			    		{{item.name}}
			    	</div>
	    			<img class="pozhehao" :src='item.pozhehao'>
	    		</div>
	    		<div class="xia">
			    	<div class="left">
			    		<img class="icon" src="../../assets/images/laba.png">
			    		<span>招募作者</span>
			    	</div>
			    	<div class="right">
			    		<img class="icon" src="../../assets/images/yijian.png">
			    		<span>意见反馈</span>
			    	</div>
	    		</div>
    		</div>
	    </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				show:false,
				list:[
					{icon:require('../../assets/images/xiaoxi.png'),name:'我的消息',pozhehao:require('../../assets/images/pozhehao.png')},
					{icon:require('../../assets/images/chuangzuo.png'),name:'创作中心',pozhehao:require('../../assets/images/pozhehao.png')},
					{icon:require('../../assets/images/yanjing.png'),name:'最近看过',pozhehao:require('../../assets/images/pozhehao.png')},
					{icon:require('../../assets/images/renwu.png'),name:'每日任务',pozhehao:require('../../assets/images/pozhehao.png')},
					{icon:require('../../assets/images/qianbao.png'),name:'我的钱包',pozhehao:require('../../assets/images/pozhehao.png')},
					{icon:require('../../assets/images/shezhi.png'),name:'设置',pozhehao:require('../../assets/images/pozhehao.png')}
				],
				listone:[{name:'关注',path:'/guanzhu'},
						{name:'推荐',path:'/tuijian'},
						{name:'发现',path:'/faxian'}
				],
				num:null
			}
		},
		methods: {
			dianji:function(val,index1){
				
				this.num = index1
				this.$router.push(val)
				 
			},
			wode:function(){
				this.show = true
			}		
		}
	}	
</script>
<style scoped>
.tab{width:100%; height:6.6rem; background-color:yellow; display:flex;align-items:center;}
.wode{width:3rem; height:3rem; margin-left:2rem;}
.touxiang{width:2.6rem; height:2.6rem;}
#guantuifa{width:18rem; height:3rem; display:flex; margin-left:5rem; justify-content:space-between; align-items:center;}
.wenzi_name{ width:6rem; height:3rem; text-align: center; line-height:3rem; font-size:2rem;}

.biji{width:3rem; height:3rem; margin-left:5rem; display:flex; justify-content:center; align-items:center;}
.bi{width:2rem; height:2rem; }
.mask{position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,.5); z-index:9999;}
.maskCon{position:absolute; top:0; bottom:0; width:80%; background:white}
.shang{width:100%; height:15rem;background-color:yellow;}
.input-kw-form{width:100%; height:5rem; }
.input-kw{width:80%; height:3rem; margin:1rem 3rem; }
.denglu img{width:3.2rem; height:3.2rem; margin-left:3rem;}
.dianjidenglu{font-size:1.2rem; font-weight:bold; margin:1rem 3rem;}
.zhong{width:80%; height:3.2rem; margin:2rem 3rem; display:flex;  align-items:center;}
.icon{width:1.6rem; height:1.6rem; margin-right:1.6rem;}
.pozhehao{width:1.6rem; height:1.6rem; margin-left:15rem;}
.xia{width:80%; height:16rem; margin:2rem 3rem; display:flex; justify-content:space-between;}
.left{margin-top:10rem; display:flex; justify-content:center; align-items:center;}
.right{margin-top:10rem; display:flex; justify-content:center; align-items:center;}

</style>