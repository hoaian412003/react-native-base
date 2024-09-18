import { ISubject, SubjectTypes } from "../types/subject";

export class SubjectMock {
  static one(): ISubject {
    return {
      name: 'Gym',
      type: SubjectTypes.Subject,
      image: 'https://cdn-icons-png.flaticon.com/512/8842/8842248.png'
    }
  }

  static many(length: number): Array<ISubject> {
    return Array.from({ length }).map(() => this.one());
  }
}
