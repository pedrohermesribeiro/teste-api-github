import { ApiGithubService } from './../../api-github.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _service_api_GitHub: ApiGithubService){
    this.createForm();
  }

ngOnInit(): void {
  this.perfilUsuario = [];

}
public perfilUsuario:any = [];
public listaRepository:any = [];
public totalRepository: number = 0;
public abrirPerfil: boolean = false;
public usuario: any;
public form!: FormGroup;

createForm(){
  return this.form = new FormGroup({
    usuario: new FormControl(null)
  })
}



buscarUsuariosRepositoryGitHub(){
  let usuario = this.form.get('usuario')?.value;
  this._service_api_GitHub.buscarUsuarioGitHub(usuario).subscribe((res)=>{
    this.perfilUsuario = res;
    this.totalRepository = res.public_repos;
    if(this.totalRepository > 0){
      this.abrirPerfil = true;
    }
    this.buscarRepositoryGitHub();

  })
}

buscarTotalRepositoryGitHub():number{
  return this.totalRepository;
}

buscarRepositoryGitHub(){
  let usuario = this.form.get('usuario')?.value;
  this._service_api_GitHub.buscarRepositoryGitHub(usuario).subscribe((res)=>{
    this.listaRepository = res;
    this.abrirPerfil = true;
  })
}

limparDadosUsuarioAtual(){
  this.form.get('usuario')?.setValue(null);
  this.abrirPerfil = false;
}


}
