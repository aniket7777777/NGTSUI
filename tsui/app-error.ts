import { ErrorHandler } from "@angular/core";

export class AppError  implements ErrorHandler {
    
    constructor(public orignalError?:any){ }

    handleError(error): void {
        console.log(error);
    }

}