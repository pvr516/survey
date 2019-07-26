import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : Http) {

   }
   GetUser(){
     return this.http.get('https://api.myjson.com/bins/1c9yon').map(result => result.json());
   }
}
