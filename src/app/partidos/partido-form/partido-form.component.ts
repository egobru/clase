import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partido-form',
  templateUrl: './partido-form.component.html',
  styles: []
})
export class PartidoFormComponent implements OnInit {
  partido: Partido;
  alertClick = () => this.partido.local += '*';

  constructor(activateRoute: ActivatedRoute) {
    const id = activateRoute.snapshot.params.id;
    const p = environment.partidos.find(x => x.id == id);
    const sucesos: Suceso[] = p.sucesos;
    const goles: Suceso[] = sucesos.filter(s => s.class === 'Gol');
    const tarjeta: Suceso[] = sucesos.filter(t => t.class === 'Tarjeta');
    const tarjetaRoja: Suceso[] = sucesos.filter(tr => tr.tipoTarjeta === 1);
    const tarjetaAmarilla: Suceso[] = sucesos.filter(ta => ta.tipoTarjeta === 2);

    this.partido = {
      local: p.idLocal,
      visitante: p.idVisitante,
      golLocal: goles.filter(g => g.idParticipante === p.idLocal).length,
      golVisitante: goles.filter(g => g.idParticipante === p.idVisitante).length,
      fecha: p.timeStamp,
      tarjetaLocal: tarjeta.filter(t => t.idParticipante === p.idLocal).length,
      tarjetaVisitante: tarjeta.filter(t => t.idParticipante === p.idVisitante).length,
      tarjetaAmarillaLocal: tarjetaAmarilla.filter(ta => ta.idParticipante === p.idLocal).length,
      tarjetaAmarillaVisitante: tarjetaAmarilla.filter(ta => ta.idParticipante === p.idVisitante).length,
      tarjetaRojaLocal: tarjetaRoja.filter(tr => tr.idParticipante === p.idLocal).length,
      tarjetaRojaVisitante: tarjetaRoja.filter(tr => tr.idParticipante === p.idVisitante).length,
    };

    // Podría hacerme los partidos dinámicamente cogiendo sólo el id
    // this.partido = {id: id, local:'A', visitante:'b'};
   }

  ngOnInit() {
  }

}

export interface Partido {
  local: string;
  visitante: string;
  golLocal: number;
  golVisitante: number;
  fecha: number;
  tarjetaLocal: number;
  tarjetaVisitante: number;
  tarjetaAmarillaLocal: number;
  tarjetaAmarillaVisitante: number;
  tarjetaRojaLocal: number;
  tarjetaRojaVisitante: number;
  // getResultado: () => string;
}

export interface Suceso {
  class: string;
  idParticipante: string;
  tipoTarjeta?: number | string;
}
