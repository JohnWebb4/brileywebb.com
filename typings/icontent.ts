import { ContentTypes } from "./contenttypes";

interface IContent {
  content?: string[];
  image?: string;
  subtitle?: string;
  title?: string;
  type: ContentTypes;
}

export { IContent };
