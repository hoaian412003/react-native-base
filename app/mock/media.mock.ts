import { IMedia } from "../types/media";

export class MediaMock {
  static one(): IMedia {
    return {
      uuid: '123123',
      name: 'Mock Image',
      size: 1234,
      url: 'https://elitefitness.com.vn/club/detail/elite-fitness-xuan-dieu-315'
    }
  }

  static many(length: number): Array<IMedia> {
    return Array.from({ length }).map(() => this.one());
  }
}
