import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsuariosService} from '../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta-cliente',
  templateUrl: './cuenta-cliente.component.html',
  styleUrls: ['./cuenta-cliente.component.css']
})
export class CuentaClienteComponent implements OnInit {
modifform: FormGroup;
user: string;
nom: string;
ape: string;

  constructor(private us: UsuariosService, private router: Router) { 
    this.modifform = new FormGroup({            
      nombreModif: new FormControl (''),
      apeModif: new FormControl(''),
      nuevacontraseña: new FormControl ('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.user = this.us.user
    this.nom = this.us.nombre
    this.ape = this.us.apellido     
    this.modifform = new FormGroup({            
      nombreModif: new FormControl (this.nom, Validators.required),
      apeModif: new FormControl(this.ape, Validators.required),
      nuevacontraseña: new FormControl ('',Validators.required)
    })  
  }
  
  modificar(modifform){    
    let contra= this.modifform.controls["nuevacontraseña"].value    
    this.us.password = contra
    let name= this.modifform.controls["nombreModif"].value        
    this.us.nombre = name
    let surname= this.modifform.controls["apeModif"].value        
    this.us.apellido = surname
    Swal.fire('Datos Modificados')
    this.router.navigate(['/home']);
  }


}
