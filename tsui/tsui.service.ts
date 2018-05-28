import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TsuiService {

  constructor(private http: Http) { }

  postTSData(data:any){
    return this.http.post("/start?wave="+data.waveType,JSON.stringify(data.body))
      .catch((error: Response)=>{
        if(error.status === 404)
          return Observable.throw(new NotFoundError(error));
        else
          return Observable.throw(new AppError(error));
      })
  }
}
