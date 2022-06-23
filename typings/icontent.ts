import { ContentTypes } from "./contenttypes";
import { ILink } from "./ilink";

interface IContent {
  content?: string;
  extras?: string;
  extrasTitle?: string;
  isSectionOrdered?: boolean;
  images?: string[];
  links?: ILink[];
  sections?: string;
  sectionsTitle?: string;
  subtitle?: string;
  title?: string;
  type: ContentTypes;
}

export { IContent };
