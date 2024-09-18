import { IAddress } from "./address";
import { IMedia } from "./media";
import { ISubject } from "./subject";
import { ITag } from "./tag";

export type IGym = {
  name: string;
  address: IAddress;
  tags: Array<ITag>;
  subjects: Array<ISubject>;
  content: string;
  policy: string;
  previewImages: Array<IMedia>;
}
