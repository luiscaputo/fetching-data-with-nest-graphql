import { Injectable } from "@nestjs/common";
import { IGetBiInfo } from "../types/get-bi-infos.type";


@Injectable()
export class GetBiInfoService {
    async execute({ bi }: IGetBiInfo): Promise<any> {
        if(bi.length !== 14) return 'Invalid BI.'
        // const data = fetch 
    }
}