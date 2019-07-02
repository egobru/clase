import { Suceso } from './suceso';

export interface Partido {
  local: string;
  visitante: string;
  golLocal: number;
  golVisitante: number;
  fecha: number;
  sucesos: Suceso[];
  getResultado: () => string;
}

