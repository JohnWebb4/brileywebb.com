import Card from "@components/card.vue";
import { ContentTypes } from "@typings/contenttypes";
import { IContent } from "@typings/icontent";

export default {
  components: {
    Card,
  },
  computed: {
    filteredContents(): IContent[][] {
      return (this as any).contents.filter((content: IContent) => content.type === (this as any).type);
    },
  },
  props: {
    contents: Array,
    type: ContentTypes,
  },
};
