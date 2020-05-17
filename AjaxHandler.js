class AjaxHandler{
    constructor(url,type,data,resp_type){
        this.url=url
        this.type=type
        this.data=data
        this.resp_type=resp_type
    }
    call(callback){
        $.ajax({
            url:this.url,
            type:this.type,
            data:this.data,
            dataType:this.response_type,
            success:(data)=>{
                callback(data)
            }
        })
        //return 
    }

}