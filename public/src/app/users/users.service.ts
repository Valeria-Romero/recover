import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private _http: HttpClient) { 

  }

  createUser( newUser: any ) {
    return this._http.post( "http://localhost:8080/adduser", newUser )
      


  }

  loginUser( currentUser: any ){
    return this._http.post( "http://localhost:8080/login", currentUser )
  }


  logoutUser(): any {
    return this._http.get( '/api/users/logout' );
  }
}
