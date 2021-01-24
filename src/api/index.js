import {http} from '../util/http'
export function apiLogin({username,password}){//登陆
    return http.post('/login',{username,password})
}
export function apiGetPhotos(){//获取照片
    return http.get('/getphotos');
}
export function uploadPhoto(formData){//上传图片
    return http.post("/upload",formData);
}
//添加留言板
export function apiAddMessageBoard({name,message}){
    return http.post('/addMessageBoard',{name,message});
}
//查询留言板
export function apiGetMessageBoard(){
    return http.get('/getMessageBoard');
}
//留言板消息回复
export function apiReplyMessageBoard({id,replyMessage}){
    return http.post('/replyMessageBoard',{id,replyMessage});
}
//分类名称查询
export function apiGetCategoryName(){
    return http.get('/getCategoryName');
}
//根据categoryName的id查询所有分类类容
export function apiGetCategoryContent(categoryNameId){
    return http.get('/getCategoryContent',{categoryNameId});
}