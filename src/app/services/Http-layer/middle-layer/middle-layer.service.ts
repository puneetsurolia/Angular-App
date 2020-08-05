import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpLayerService} from '../http-layer/http-layer.service'


@Injectable({
  providedIn: 'root'
})
export class MiddleLayerService {
 baseUrl:string =environment.url.baseUrl;
 childUrl:any =environment.url.urls;


  constructor(private htpp :HttpLayerService) { }

  extractHealthCheckAll(){
    let url = this.childUrl['getUser']
  return   this.htpp.get(this.baseUrl+ url)

  }

  fetchEmployee(){
    const url ='../../../../assets/employee.json';
    return this.htpp.get(url);
  }

  createShedule(body){
    let url =this.childUrl['createShedule'];
    return this.htpp.post(this.baseUrl+url,body)

  }
}
