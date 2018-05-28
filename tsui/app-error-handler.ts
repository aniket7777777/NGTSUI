import { ErrorHandler } from '@angular/core';
import { AppError } from './app-error';
    
export class AppErrorHandler implements ErrorHandler {
    handleError(error: AppError): void {
        alert("Error = " + error.orignalError);
    }
}