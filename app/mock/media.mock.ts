import { IMedia } from "../types/media";

export class MediaMock {
  static one(): IMedia {
    return {
      uuid: '123123',
      name: 'Mock Image',
      size: 1234,
      url: 'https://cms.elitefitness.com.vn/Upload2/20230821/aff6ba33-7fac-46fa-997b-55c77eaf71ff.jpg?w=865&h=487&mode=max'
    }
  }

  static many(length: number): Array<IMedia> {
    return Array.from({ length }).map(() => this.one());
  }
}
