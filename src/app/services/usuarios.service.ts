import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  user = "superadmin";
  password = "Azerty?.123";
  nombre = "Alex"
  apellido = "De assis"
  correo = "alexdeassis7@gmail.com"
  
  constructor() { }

  login(username: string, password: string) : boolean{
    if(this.user === username && this.password === password){      
      return true;
    }else{      
      return false;
    } 
  }
}
