const type={
    REPORT_POST:"REPORT_POST",
}
const action={
    reportPost:(data,callback)=>{
        return{
            type:type.REPORT_POST,
            data:data,
            callback,
        }
    }
}
export default {type,action}