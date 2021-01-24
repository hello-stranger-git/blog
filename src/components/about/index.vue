<template>
  <div class="bolgs">
    <div class="left">
      <div class="l-top">
        <h3>#留言</h3>
        <div class="from">
          <div>
            <input class="name" type="text" placeholder="昵称" v-model="name"/>
          </div>
          <div>
            <textarea
              class="textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="留言内容(请文明发言)"
              v-model="message"
            ></textarea>
          </div>
          <button @click="addMessageBoard">提交留言</button>
        </div>
      </div>
      <div class="l-bottom" v-for="item in data" :key="item.id">
        <h2>最新留言</h2>
        <div class="board">
          <div class="basic">
            <span>#{{item.name}}</span>
            <span>{{ item.create_time|timeFormat }}</span>
          </div>
          <div class="content">
            <div class="server">
              <span>{{item.message}}</span>
            </div>
            <div class="admin" v-if="item.reply">
              <span>管理员:</span>
              {{item.reply}}
            </div>
            <hr>
          </div>
          <div class="reply" v-if="token">
            <textarea name="reply" 
              class="textarea" id="reply" cols="30" rows="2" v-model="replyMessage"></textarea>
            <button class="replyBtn" @click="reply(item.id)">答复</button>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <h3>#关于CodeMonkey</h3>
      <div class="mymess">
        <div class="myName">
          <p>hey,i am</p>
          <h5>CodeMonkey</h5>
        </div>
        <div class="email">
          <p>邮箱</p>
          <h5>1365884247@qq.com</h5>
        </div>
        <div class="blog">
          <p>博客</p>
          <h5>https://blog.com</h5>
        </div>
        <div class="github">
          <p>GitHub</p>
          <h5>https://github.com</h5>
        </div>
      </div>
      <div class="introduction">
        <p>
          哈喽，大家好！我是一名饱受摧残的程序员，
          同时也是一名热爱coed的 "程序员"，
          首先非常欢迎你来访问我的个人博客。
        </p>
        <p>
          如你所见，这是我的个人博客自留地。
          后端是NodeJs轻量级Web框架koa，
          前端使用了Vue.js。
          当前博客是正在开发中。
        </p>
        <p>
          笨鸟先飞的我,
          程序设计或者其他方面肯定会有许多的缺陷和不足。
          如果你有一些好的想法、或者寻求帮助的话，
          留言告诉我我会在第一时间回应你。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {apiAddMessageBoard,apiGetMessageBoard,apiReplyMessageBoard} from '../../api/index'
export default {
  data() {
    return {
      name:'',
      message:'',
      data:[],
      token:this.$store.getters['getToken'],
      replyMessage:'',
    };
  },
  methods:{
    async addMessageBoard(){//添加留言
      let name = this.name;
      let message = this.message;
      let result = await apiAddMessageBoard({name,message});
      this.getMessageBoard();
      this.name='';
      this.message='';
    },
    async getMessageBoard(){//获取留言
      let result = await apiGetMessageBoard();
      this.data = result.data.data;
    },
    async reply(id){//回复留言
      let replyMessage = this.replyMessage;
      await apiReplyMessageBoard({id,replyMessage});
      this.replyMessage = '';
      this.getMessageBoard();
    }
  },
  mounted() {
    this.getMessageBoard();
  }
};
</script>

<style scoped>
h3,h5 {
  margin: 0px;
  padding: 0px;
}
.bolgs {
  display: flex;
  margin-top: 20px;
}
.from,.reply{
  margin-left: 10px;
}
.name {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  width: 50%;
  margin-bottom: 20px;
}
.textarea {
  display: block;
  padding: 5px 15px;
  line-height: 1.5;
  width: 80%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;
}
#reply{
  width: 100%;
}
.textarea:hover,.name:hover{
  border: 1px solid #409eff;
}
.from>button,.replyBtn{
  color: #fff;
  background-color: #409eff;
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  border: 1px solid #409eff;
  text-align: center;
  outline: 0;
  margin: 0;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

}
.l-top > h3 {
  margin-bottom: 20px;
}
.l-bottom{
  /* padding: 20px 0; */
  width: 80%;
}
.basic span:first-child{
  margin-right: 15px;
  font-size: 14px;
}
.basic span:last-child{
  font-size: 13px;
  color: rgb(153, 153, 153);
}
.content{
  margin: 10px;
  padding: 15px;
}
.server{
  margin-bottom: 10px;
}
.admin>span{
    font-weight: 700;
    color: #00a8ff;
    margin-right: 7px;
    font-size: 14px;
}
.content>hr{
  color: rgb(204, 204, 204);
  border-style: dashed;
  width: 100%;
  margin-top: 35px;
}
.left {
  flex: 2;
}
.right {
  flex: 1;
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #eee;
}
.right>h3{
  margin-bottom: 20px;
}
.mymess>div{
  margin-bottom: 20px;
}
.mymess>div>p{
    font-size: 13px;
    color: #666;
    padding-bottom: 5px;
}
.introduction{
  margin: 10px 0;
  font-size: 13px;
  line-height: 25px;
  color: #666;
  text-indent: 2em;
}

@media screen and (max-width: 768px){
  .right{
    display: none;
  }
}
</style>