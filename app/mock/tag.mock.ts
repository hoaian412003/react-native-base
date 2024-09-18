import { ITag } from "../types/tag";

export class TagMock {
  static one(): ITag {
    return {
      name: 'Giảm 39%',
      backgroundColor: '#D0342C',
      textColor: '#FFFFFF',
    }
  }

  static many(length: number): Array<ITag> {
    return Array.from({ length }).map(() => this.one());
  }
}
