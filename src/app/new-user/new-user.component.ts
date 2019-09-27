import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  public form: FormGroup;
  isVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this._createForm();
  }

  openModalEdicion(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }

  handleOk(){
    this.isVisible = false;
    this.guardar();
  }

  private _createForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  public guardar():void{
    for(const i in this.form.controls){
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if(this.form.status === 'INVALID')  {
      this._createMessage('error', 'Ingresar todos los campos obligatorios')
      return;
    }

    let persona = {
      "id" :  this.form.value['id'],
      'nombre': this.form.value['nombre'],
      'edad': this.form.value['edad']
    };

    console.log(persona);
  }

  private _createMessage(type: string, message: string): void {
    this.message.create(type, `${message}`);
  }
}
