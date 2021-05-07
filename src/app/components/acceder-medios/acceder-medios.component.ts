import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-acceder-medios',
  templateUrl: './acceder-medios.component.html',
  styleUrls: ['./acceder-medios.component.css']
})
export class AccederMediosComponent implements OnInit {
  listado=[]
  registrosOrdenados = [];
  constructor(private ps: PasajerosService) { }

  ngOnInit(): void {

    this.listado=this.ps.listaDeDescuentosLimitadasDeTarifas

    this.registrosOrdenados = _(this.listado)
                              .groupBy(x => x.pasajeroId)
                              .map((value, key) => ({id: key, records: value}))
                              .value();
                              
    console.log(this.registrosOrdenados);
    
  }

}
