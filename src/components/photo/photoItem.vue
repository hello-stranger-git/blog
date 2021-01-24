<template>
    <div>
        <div class="imgDiv" v-for="item in imgData" :key="item.id">            
            <img :src="'api/upload/'+item.filename">
            <!-- <span :title="item.filename">{{ item.filename }}</span> -->
        </div>
    </div>
</template>
<script>
export default {
    props:["imgData"],
    data() {
        return {
            
        }
    },
    methods:{

    },
    mounted(){
    }
}
</script>
<style>
.imgDiv{
    width: 165px;
    height: 300px;
    float: left;
    margin: 10px;
}
.imgDiv>img{
    height: 100%;
}
.imgDiv>span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.imgDiv>img,.imgDiv>span{
    display: block;
    width: 100%;
}
</style>