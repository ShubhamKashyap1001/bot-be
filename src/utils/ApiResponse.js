class ApiResponse{
    constructor(
        statuscode,
        messege = "success",
        error =[]
    ){
        this.statuscode = statuscode
        this.data
        this.messege = messege
        this.statuscode = statuscode < 400
    }
}

export { ApiResponse }