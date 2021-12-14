import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Utilisateur } from 'src/shared/modeles/Utilisateur';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  URL_API_LOGIN: string = "/api/login" as const;
  URL_API_AUTH: string = "/api/auth/" as const;

  constructor(private http: HttpClient) { }

  // On obtient un JWT
  public postLogin(login: string, mdp: string) : Observable<Utilisateur>{
    let data: string = "login=" + login + "&mdp=" + mdp;
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };
    return this.http.post<Utilisateur>(this.URL_API_LOGIN, data, httpOptions);
  }

  public getLogin(login: string) : Observable<Utilisateur> {
    let data: string = "login=" + login;
    return this.http.get<Utilisateur>(this.URL_API_AUTH + login);
  }
}
