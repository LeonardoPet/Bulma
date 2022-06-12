import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medicos-cadastrar',
  templateUrl: './medicos-cadastrar.component.html',
  styleUrls: ['./medicos-cadastrar.component.css']
})
export class MedicosCadastrarComponent implements OnInit {
  formCadastroMedico!: FormGroup;
  especialidade: string
  nome: string
  constructor(private web:Webservice) { }

  ngOnInit(): void {
    this.formInit
  }

  formInit(){
    this.formCadastroMedico = new FormGroup({
      nome : new FormControl(null, [Validators.required]), especialidade : new FormControl(null, [Validators.required])
    });
  }

  realizarCadastroMedico(){
    if(this.formCadastroMedico.valid){
      let nome = this.formCadastroMedico.get("nome")!.value
      let especialidade = this.formCadastroMedico.get("especialidade")!.value
      this.web.realizarCadastroMedico(nome,especialidade).subscribe(res => {
        if(res.status == "OK") 
        {
          alert("Você foi cadastrado com sucesso")
        } 
        else
        {
          alert("O Cadastro falhou")
        }
      });
    }  
  }
}
