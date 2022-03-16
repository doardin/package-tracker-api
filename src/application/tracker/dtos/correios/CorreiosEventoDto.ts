import { CorreiosUnidadeDto } from "./CorreiosUnidadeDto";

export class CorreiosEventoDto {
    readonly codigo: String;
    readonly descricao: String;
    readonly dtHrCriado: Date;
    readonly tipo: String;
    readonly unidade: CorreiosUnidadeDto;
    readonly urlIcon: String;
}