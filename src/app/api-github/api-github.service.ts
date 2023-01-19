import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {
  private readonly API_GITHUB_GET_USUARIOS = "https://api.github.com/users/";
  private readonly API_GITHUB_GET_REPOSITORY = "https://api.github.com/users/";
  constructor(private _HTTP: HttpClient) { }


  buscarUsuarioGitHub(user: any){
    return this._HTTP.get<any>(this.API_GITHUB_GET_USUARIOS + `${user}`)
  }

  buscarRepositoryGitHub(user: any){
    return this._HTTP.get<any>(this.API_GITHUB_GET_REPOSITORY + `${user}` + "/repos")
  }


}
