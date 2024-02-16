import { UnaSala } from './UnaSala'; // Ruta al archivo donde se define UnaSala
export interface Sala {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: UnaSala[]
}
