/** tsling */
import { ContentTypes } from "../../typings/contenttypes";
import { IContent } from "../../typings/icontent";
import Card from "../components/card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    filteredContents(): IContent[] {
      return this.contents.filter((book: IContent) => book.type === this.type);
    },
  },
  props: {
    contents: Array,
    type: ContentTypes,
  },
};
