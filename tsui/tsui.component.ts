import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TsuiService } from './tsui.service';

@Component({
  selector: 'app-tsui',
  templateUrl: './tsui.component.html',
  styleUrls: ['./tsui.component.css']
})
export class TsuiComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: TsuiService) {
    this.form = fb.group({
      waveType:[],
      body:[]
    });
   }

  ngOnInit() {
  }

  get waveType(){
    return this.form.get("waveType");
  }

  get body(){
    return this.form.get("body");
  }

  submit(){
    console.log(this.waveType.value+"\n"+this.body.value);
    this.service.postTSData({waveType:this.waveType.value, body:this.body.value});
  }

}
