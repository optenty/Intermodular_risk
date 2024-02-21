import { UnaPartida } from './UnaPartida';
export interface PartidaList {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: UnaPartida[]
}
