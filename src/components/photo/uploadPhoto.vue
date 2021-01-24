<template>
    <div>
        <input ref="uploadInput" type="file" class="uploadInput" @input="uploadPhoto"/>
        <button class="uploadBtn" @click="upload">上传照片</button>
    </div>
</template>
<script>
import { uploadPhoto } from '../../api/index'
export default {
    data() {
        return {
        }
    },
    methods:{
        upload(){
            this.$refs.uploadInput.click();
        },
        async uploadPhoto(e){
            let formData = new FormData();
            formData.append("image",e.target.files[0]);
            let result = await uploadPhoto(formData);
            this.$emit("handleUploadCompleted");
        }
    }
}
</script>
<style>
.uploadInput{
    display: none;
}
.uploadBtn{
    color: #fff;
    background-color: #409eff;
    border: 1px solid #dcdfe6;
    border-color: #409eff;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1;
    font-weight: 500;

    margin-left: 10px;
}
.uploadBtn:hover{
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
</style>