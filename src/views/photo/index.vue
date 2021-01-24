<template>
    <div>
        <UploadPhoto @handleUploadCompleted="handleUploadCompleted"></UploadPhoto>
        <PhotoItem :imgData="data"></PhotoItem>
    </div>
</template>
<script>
import {apiGetPhotos} from '../../api/index'
import PhotoItem from '../../components/photo/photoItem'
import UploadPhoto from '../../components/photo/uploadPhoto'
export default {
    data(){
        return{
            data:[],

        }
    },
    methods:{
        async getPhoto(){
            let result =await apiGetPhotos();
            this.data = result.data.data;
        },
        handleUploadCompleted(){
            this.getPhoto();
        }
    },
    mounted(){
        this.getPhoto();
    },
    
    components:{
        PhotoItem,
        UploadPhoto
    },
}
</script>
<style>
</style>