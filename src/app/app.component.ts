import { Component } from '@angular/core';
import EventoService from '../app/services/evento.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToAki';
  constructor(
    private eventoService : EventoService 
  ) { }

  ngOnInit(){

  }
}
