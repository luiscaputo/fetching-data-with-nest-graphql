import { Injectable } from '@nestjs/common';
import { IGetBiInfo } from '../types/get-bi-infos.type';
import { messages } from 'src/helpers/errorMessages';

export class GetBiInfoService {
  async execute({ bi }: IGetBiInfo): Promise<any> {
    if (!bi || bi.length !== 14) throw new Error(messages.invalidBiInformation);
    const formatedBI = bi.trim().toUpperCase();
    let personalInformations: any;

    await fetch(
      `https://o-me-api.onrender.com/V1/identification/person/${formatedBI}`,
    )
      .then((response) => response.json())
      .then((data) => {
        personalInformations = data.data;
      })
      .catch((error) => {
        return error.message;
      });

    if (personalInformations.success === false) {
      throw new Error(messages.biInformationsNotFounded);
    }

    return personalInformations;
  }
}
