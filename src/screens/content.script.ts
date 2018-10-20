import { ContentTypes } from "../../typings/contenttypes";
import { IContent } from "../../typings/icontent";
import Card from "../components/card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    filteredContentRows(): IContent[][] {
      const { contents, perLine }: { contents: IContent[], perLine: number} = (this as any);

      const filtered = contents.filter((content: IContent) => content.type === (this as any).type);

      const xPerRow = filtered.reduce((matrix, content) => {
        const lastRow = matrix[matrix.length - 1];

        if (lastRow.length < perLine) {
          (lastRow as any).key += JSON.stringify(content);
          lastRow.push(content);
        } else {
          matrix.push([content]);
        }

        return matrix;
      }, ([[]] as IContent[][]));

      return xPerRow;
    },
  },
  props: {
    contents: Array,
    perLine: {
      default: 1,
      type: Number,
    },
    type: ContentTypes,
  },
};
