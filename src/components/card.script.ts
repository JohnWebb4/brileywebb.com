export default {
  computed: {
    isJustImage(): boolean {
      const {content, subtitle, title} = (this as any);
      return content.length === 0 && !subtitle && !title;
    },
  },
  props: {
    content: {
      default: () => [],
      type: Array,
    },
    image: {
      default: "",
      type: String,
    },
    subtitle: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
  },
};
