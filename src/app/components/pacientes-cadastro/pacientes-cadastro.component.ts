import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit {
  formCadastroPaciente!: FormGroup;
  dataNasc: string
  nome: string

  constructor(private web:Webservice) { }

  ngOnInit(): void {
    this.formInit
  }
  formInit(){
    this.formCadastroPaciente = new FormGroup({
      nome : new FormControl(null, [Validators.required]), dataNasc : new FormControl(null, [Validators.required])
    });
  }



  realizarCadastroPaciente(){
    if(this.formCadastroPaciente.valid){
      let nome = this.formCadastroPaciente.get("nome")!.value
      let dataNasc = this.formCadastroPaciente.get("dataNasc")!.value
      this.web.realizarCadastroPaciente(nome,dataNasc).subscribe(res => {
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
