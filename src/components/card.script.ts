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
    extraLeft: {
      default: () => [],
      type: Array,
    },
    extraLeftTitle: {
      default: "",
      type: String,
    },
    extraRight: {
      default: () => [],
      type: Array,
    },
    extraRightTitle: {
      default: "",
      type: String,
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
