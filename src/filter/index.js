// Vue.filter("timeFormat",(value)=>{
//     let date = new Date(value);
//     let year = date.getFullYear();
//     let month = date.getMonth()+1;
//     let day = date.getDay();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let secondes = date.getSeconds();
//     return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+secondes;
// })
let timeFormat = (value)=>{
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+secondes;
}
export {timeFormat}
