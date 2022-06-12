import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css']
})
export class AddConsultaComponent implements OnInit {
  formConsulta!: FormGroup
  constructor(private web:Webservice) { }
  medico: string
  paciente: string
  dataConsulta: string
  horaConsulta: string

  ngOnInit(): void {
    this.formInit()
  }
  formInit(){
    this.formConsulta = new FormGroup({
      medico : new FormControl(null, [Validators.required]), paciente : new FormControl(null, [Validators.required]),dataConsulta : new FormControl(null, [Validators.required]),horaConsulta : new FormControl(null, [Validators.required])
    });
  } 
  realizarConsulta(){
    if(this.formConsulta.valid){
      let medico = this.formConsulta.get("medico")!.value
      let paciente = this.formConsulta.get("paciente")!.value
      let dataConsulta = this.formConsulta.get("dataConsulta")!.value
      let horaConsulta = this.formConsulta.get("horaConsulta")!.value
      this.web.realizarConsulta(medico,paciente,dataConsulta,horaConsulta).subscribe(res => {
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
