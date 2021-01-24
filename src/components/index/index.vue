<template>
  <div>
    <div class="silders">
      <div :class="[{'current':current==1},'silder']">
        <div :class="[{'contentShow':current==1},'content']">
          <h1>Lorem1, ipsum dolor.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione reiciendis possimus architecto aliquam fugiat corporis odit quia temporibus numquam earum provident, accusantium rerum blanditiis. Est officiis nisi odio sapiente placeat?</p>
        </div>
      </div>
      <div :class="[{'current':current==2},'silder']">
        <div :class="[{'contentShow':current==2},'content']">
          <h1>Lorem2, ipsum dolor.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione reiciendis possimus architecto aliquam fugiat corporis odit quia temporibus numquam earum provident, accusantium rerum blanditiis. Est officiis nisi odio sapiente placeat?</p>
        </div>
      </div>
      <div class="silder" :class="[{'current':current==3},'silder']">
        <div :class="[{'contentShow':current==3},'content']">
          <h1>Lorem3, ipsum dolor.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione reiciendis possimus architecto aliquam fugiat corporis odit quia temporibus numquam earum provident, accusantium rerum blanditiis. Est officiis nisi odio sapiente placeat?</p>
        </div>
      </div>
      <div class="silder" :class="[{'current':current==4},'silder']">
        <div :class="[{'contentShow':current==4},'content']">
          <h1>Lorem4, ipsum dolor.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione reiciendis possimus architecto aliquam fugiat corporis odit quia temporibus numquam earum provident, accusantium rerum blanditiis. Est officiis nisi odio sapiente placeat?</p>
        </div>
      </div>
    </div>
    <div class="tog">
      <div class="prev" @click="prev"> 
        <span>&lt;</span>
      </div>
      <div class="next" @click="next">
        <span>&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // image1:require('../../assets/image/image1.jpg'),
      current:1,
    }
  },
  methods:{
    next(){
      this.current+=1
      if(this.current>4){
        this.current=1;
      }
    },
    prev(){
      this.current-=1
      if(this.current<1){
        this.current=4;
      }
    }
  }
};
</script>

<style scoped>
.silders{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-top: -56px;
}
.silder{
  position: absolute;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  opacity: 0;
  /* transition: opacity 0.4 ease-in-out; */
}
.silder.current{
  opacity: 1;
}

.silder .content{
  width: 500px;
  background-color: rgba(255,255,255,0.8);
  color: #333;
  position: absolute;
  bottom: 30px;
  padding: 20px;
  left: -540px;
  opacity: 0;
  transition: all 0.8s ease-in-out;
}
.content.contentShow{
  left: 0px;
  opacity: 1;
}
.prev,.next{
  position: absolute;
  top: 50%;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.prev:hover,.next:hover{
  background-color: #fff;
  color: #333;
  transition: background-color 0.8s;
}
.prev{
  left: 15px;
}
.next{
  right: 15px;
}



.silder:first-child{
  background: url('../../assets/image/image1.jpg') no-repeat center center/cover
}
.silder:nth-of-type(2){
  background: url('../../assets/image/image2.jpg') no-repeat center center/cover
}
.silder:nth-of-type(3){
  background: url('../../assets/image/image3.jpg') no-repeat center center/cover
}
.silder:nth-of-type(4){
  background: url('../../assets/image/image4.jpg') no-repeat center center/cover
}



@media screen and (max-width: 768px){
  .silder .content{
    width: 100%;
    bottom: 0;
  }
}
</style>