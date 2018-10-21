import { ContentTypes } from "./contenttypes";

interface IContent {
  content?: string[];
  extraLeft?: string[];
  extraLeftTitle?: string;
  extraRight?: string[];
  extraRightTitle?: string;
  image?: string;
  subtitle?: string;
  title?: string;
  type: ContentTypes;
}

export { IContent };
