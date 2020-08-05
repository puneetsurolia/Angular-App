import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpLayerService {

  constructor(private http:HttpClient) { }



  get(url){
  return this.http.get(url)
  }
  post(url,data){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(url, body,{'headers':headers})  }
}
