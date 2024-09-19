import { IAddress } from "../types/address";

export class AddressMock {
  static one(): IAddress {
    return {
      placeId: "1123123123",
      name: "Quận 10, TP. Hồ Chí Minh",
      lng: 100,
      lat: 100,
      formattedAddress: "Chùa gò kén Tây Ninh"
    }
  }

  static many(length: number): Array<IAddress> {
    return Array.from({ length }).map(() => this.one());
  }
}
