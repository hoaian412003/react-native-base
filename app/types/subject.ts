export enum SubjectTypes {
  Subject = 'Subject',
  Utility = 'Utility'
}

export type ISubject = {
  name: string;
  image: string;
  type: SubjectTypes;
}
