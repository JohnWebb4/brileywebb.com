import { ContentTypes } from "../../typings/contenttypes";
import { IContent } from "../../typings/icontent";
import Card from "../components/card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    filteredContents(): IContent[] {
      return (this as any).contents.filter((book: IContent) => book.type === (this as any).type);
    },
  },
  props: {
    contents: Array,
    type: ContentTypes,
  },
};
