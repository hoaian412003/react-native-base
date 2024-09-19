import { IGym } from "../types/gym";
import { AddressMock } from "./address.mock";
import { MediaMock } from "./media.mock";
import { SubjectMock } from "./subject.mock";
import { TagMock } from "./tag.mock";

export class GymMock {
  static one(): IGym {
    return {
      name: 'Elite Fitness',
      previewImages: MediaMock.many(3),
      address: AddressMock.one(),
      subjects: SubjectMock.many(20),
      tags: TagMock.many(1),
      content: 'Hello world',
      policy: 'Hello world',
      distance: 1500,
      displayPrice: 1200000,
      medianRating: 3.5,
      ratingCount: 222
    }
  }
  static many(length: number): IGym[] {
    return Array.from({
      length
    }).map(() => this.one())
  }

}
