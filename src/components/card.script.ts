export default {
  computed: {
    isJustImage(): boolean {
      const {content, extras, sections, subtitle, title } = (this as any);
      return content.length === 0 && !subtitle && !title && sections.length === 0 && extras.length === 0;
    },
  },
  data: () => ({
    linksTitle: __("links"),
  }),
  props: {
    content: {
      default: () => [],
      type: Array,
    },
    extras: {
      default: () => [],
      type: Array,
    },
    extrasTitle: {
      default: "",
      type: String,
    },
    images: {
      default: () => [],
      type: Array,
    },
    isSectionOrdered: {
      default: true,
      type: Boolean,
    },
    links: {
      default: () => [],
      type: Array,
    },
    sections: {
      default: () => [],
      type: Array,
    },
    sectionsTitle: {
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
