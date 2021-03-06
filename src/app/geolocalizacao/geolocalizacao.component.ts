import { Component, OnInit } from '@angular/core';
import { GeoLocService } from '../services/geolocalizacao.service';

@Component({
  selector: 'app-geo-loc',
  templateUrl: './geolocalizacao.component.html',
  styleUrls: ['./geolocalizacao.component.scss']
})
export class GeolocalizacaoComponent implements OnInit {

  FATEC_LATITUDE = -20.5144785;
  FATEC_LONGITUDE = -47.4003616;

  constructor(private geoLocSrv: GeoLocService) { }
  public pos: any;
  public dist: number;
  public msgErro: string;

  async ngOnInit() {
    try {
      this.pos = await this.geoLocSrv.obterPos();
      this.dist = this.geoLocSrv.distancia(this.pos.coords.latitude, this.pos.coords.longitude, this.FATEC_LATITUDE, this.FATEC_LONGITUDE);
      console.log(this.pos);
    } catch (e) {
      console.error(e);
      this.msgErro = 'Você precisa permitir a obtenção da sua localização';
    }
  }

}