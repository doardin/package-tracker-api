import { CorreiosObjetoDto } from "./CorreiosObjetoDto";

export class CorreiosDto {
    readonly objetos: CorreiosObjetoDto[];
    readonly quantidade: Number;
    readonly resultado: String;
    readonly versao: String;
}