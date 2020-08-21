export class Response{
    statusCode: number;
    message: string;
    data: any;
    success : boolean;
    error: any[];
    
    constructor(){
        this.success = true;
        this.error = [];
    }
}