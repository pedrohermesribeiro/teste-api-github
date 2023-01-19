import { Component, Input, OnInit } from '@angular/core';
import { ApiGithubService } from '../../api-github.service';

@Component({
  selector: 'app-repository-github',
  templateUrl: './repository-github.component.html',
  styleUrls: ['./repository-github.component.css']
})
export class RepositoryGithubComponent implements OnInit{

  constructor(private _service_api_GitHub: ApiGithubService){

  }

  @Input()
  public usuario: any;

  @Input()
  public listaRepository: any;

ngOnInit(): void {
  this.listaRepository = [];

}

// public listaRepository:any = [];
// public listaUserRepository:any = [];
public totalRepository: number = 0;
public abrirPerfil: boolean = false;









}
