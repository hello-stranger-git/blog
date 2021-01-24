<template>
  <div class="category">
    <div class="left">
      <ul>
        <li class="active" @click="getCategoryContent">全部</li>
        <li @click="getCategoryContent(item.category_name_id)" v-for="item in categoryName" :key="item.category_name_id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="right">
      <div class="r-describe" v-for="item in categoryContent" :key="item.category_content_id">
        <div>
          <h5>
            <span>
              {{ item.title }}
            </span>
          </h5>
        </div>
        <div class="des">
          <div class="message">
            <span>作者</span>
            <span>
              {{ item.author }}
            </span>
          </div>
          <div class="message">
            <span>发表于</span>
            <span>
              {{ item.create_time|timeFormat }}
            </span>
          </div>
          <div class="message">
            <span>分类</span>
            <span>{{item.category_name}}</span>|
          </div>
          <div class="message">
            <span>阅读量</span>
            <span>{{ item.readNumber }}</span>|
          </div>
          <div class="message">
            <span>评论数</span>
            <span>{{ item.commentNumber }}</span>
          </div>
        </div>
        <div class="des-content">
          <p>
            {{ item.content }}
          </p>  
        </div>
        <div class="more">
            <span class="tag" :key=index v-for="(tag,index) in item.tags">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiGetCategoryName,apiGetCategoryContent} from '../../api/index'
export default {
  data() {
    return {
      categoryName:[],
      categoryContent:[],
    }
  },
  methods:{
    async getCategoryName(){
      let {data} = await apiGetCategoryName();
      this.categoryName = data.data;
    },
    async getCategoryContent(categoryNameId){
      let result = await apiGetCategoryContent(categoryNameId);
      // result.data.data.tags.split(",");
      this.categoryContent = result.data.data;
      this.categoryContent.map((item)=>{
        item.tags = item.tags.split(',');
        return item;
      })
    }
  },
  mounted(){
    this.getCategoryName();
    this.getCategoryContent();
  }
};
</script>

<style scoped>

.category{
  margin: 80px auto;
  display: flex;
  justify-content: center;
}
.left{
  padding:10px 40px;
  margin-top:20px;
  box-sizing: border-box;
}
.left>ul>li{
  padding: 5px 20px;
  list-style: none;
  text-align: center;
  cursor: pointer;
  color: #555;
  line-height: 2;
}
.left>ul>li.active{
  color: #409eff;
}
.right{
  width: 60%;
}
.r-describe{
  margin: 20px 0;
  width: 100%;
  border: 1px solid #ebeef5;
  color: #303133;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  padding: 20px;
  text-align: left;
  box-sizing: border-box;
}
.r-describe h5>span{
  width: 100%;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  font-size: 26px;
  font-weight: 400;
  color: #606266;
  clear: both;
  text-align: left;
}
.message{
  display: inline-block;
  font-size: 12px;
  color: #999;
}
.des{
  padding: 10px 0;
}
.des-content{
  width: 100%;
  color: #555;
  font-size: 16px;
  line-height: 2;
  padding: 10px 0;
}
.des-content p{
  display: block;
  height: 70px;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.message span{
  margin-right: 5px;
}
.more{
  text-align: left;
  font-size: 12px;
  color: #999;
}
.tag{
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
  margin-left: 5px;
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
  display: inline-block;
  font-size: 12px;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>