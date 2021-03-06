// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  titulo: 'Datos Deportivos (v 0.0.1)',
  appName: 'Página de Quique',
  logo: 'LanyuCirculoRelleno.svg',
  marca: 'Lanyu EStudio',
  proyectos: [
    {id: 0, name: 'Learn Angular'},
    {id: 1, name: 'Develop My Dream app'},
    {id: 2, name: 'Travel around the world'},
    {id: 3, name: 'Contratar un sicario'}
  ],
  partidos: [
// tslint:disable-next-line: max-line-length
{id: 1,
  idLocal: 'WESHAM(ING)', idVisitante: 'BRIGHT(ING)', idCompeticion: 'ING-D1',
// tslint:disable-next-line: max-line-length
sucesos: [{class: 'Gol', idParticipante: 'BRIGHT(ING)'}, {class: 'Gol', idParticipante: 'BRIGHT(ING)'}, {class: 'Gol', idParticipante: 'BRIGHT(ING)'}, {class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'WESHAM(ING)'}],
  timeStamp: 1508526000000
},
{id: 2,
  idLocal: 'OSASUN(ESP)', idVisitante: 'BARCAB(ESP)', idCompeticion: 'ESP-D2',
// tslint:disable-next-line: whitespace
// tslint:disable-next-line: max-line-length
  sucesos: [{class: 'Gol', idParticipante: 'OSASUN(ESP)'}, {class: 'Gol', idParticipante: 'OSASUN(ESP)'}, {class: 'Gol', idParticipante: 'BARCAB(ESP)'}, {class: 'Gol', idParticipante: 'BARCAB(ESP)'}, {class: 'Tarjeta', tipoTarjeta: 1, idParticipante: 'OSASUN(ESP)'}],
  timeStamp: 1508526000000
},
{id: 3,
  idLocal: 'SETIEN(FRA)', idVisitante: 'MONTPE(FRA)', idCompeticion: 'FRA-D1',
// tslint:disable-next-line: max-line-length
sucesos: [{class: 'Gol', idParticipante: 'SETIEN(FRA)'}, {class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'SETIEN(FRA)'}, {class: 'Tarjeta', tipoTarjeta: 1, idParticipante: 'SETIEN(FRA)'}, {class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)'}, {class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)'}, {class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)'}],
timeStamp: 1508525100000}
]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
