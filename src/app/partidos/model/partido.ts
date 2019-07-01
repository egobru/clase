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
  getResultado: () => string;
}
