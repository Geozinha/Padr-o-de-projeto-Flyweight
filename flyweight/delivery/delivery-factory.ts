import {
  DeliveryLocationDictionary,
  DeliveryLocationData,
} from './delivery-types';
import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {}; //objeto, pq a chave do objeto faça o link com o objeto em si pq a chave pode por onde posso saber o id entre aspas desse objeto

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {//sempre que locantion for criada vai chmar makelocatin e nela vai sere criada o id ou a chave
    const key = this.createId(intrinsicState); //criando a chave do objeto que queremos obter aqui
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);//else
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
