class ApiResponse{
    constructor(
        statuscode,
        messege = "success",
        error =[]
    ){
        this.statuscode = statuscode
        this.messege = messege
        this.error = error
        this.statuscode = statuscode < 400
    }
}

export { ApiResponse }