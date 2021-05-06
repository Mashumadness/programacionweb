import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  validMessage: string=""
  usuario: string;

  constructor(private us: UsuariosService, private router: Router) { 
    this.loginform = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  
  ingresar(formElement){
    let user = this.loginform.controls["username"].value;
    let pass = this.loginform.controls["password"].value;
    if(this.us.login(user, pass)){
      this.router.navigate(['/home']);
    }else{
      this.validMessage = "Usuario o contraseña incorrecta";
    }
  }
}
