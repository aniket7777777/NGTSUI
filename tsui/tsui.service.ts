import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TsuiService {

  constructor(private http: Http) { }

  postTSData(data:any){
    this.http.post("/start?wave="+data.waveType,JSON.stringify(data.body))
      .subscribe(response => {
        alert(response.json);
      }, error => {
        alert(error.statusText);
      })
  }
}
