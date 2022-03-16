import { CorreiosEventoDto } from "./CorreiosEventoDto";
import { CorreiosTipoPostalDto } from "./CorreiosTipoPostalDto";

export class CorreiosObjetoDto {
    readonly codObject: String;
    readonly dtPrevista: Date;
    readonly eventos: CorreiosEventoDto[];
    readonly modalidade: String;
    readonly tipoPostal: CorreiosTipoPostalDto;
    readonly habilitaAutoDeclaracao: Boolean;
    readonly permiteEncargoImportacao: Boolean;
    readonly habilitaPercorridaCarteiro: Boolean;
    readonly bloqueioObjeto: Boolean;
    readonly possuiLocker: Boolean;
    readonly habilitaLocker: Boolean;
    readonly habilitaCrowdshipping: Boolean;
}