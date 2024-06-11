export const DRAFT_ROUTES = {
  index: {
    label: "Hello world!",
    path: "draft/*",
    to: "/draft/typo",
  },
  typo: {
    label: "Typography",
    path: "/typo",
    to: "/draft/typo",
  },
  component: {
    label: "Component",
    path: "/component",
    to: "/draft/component",
  },
  button: {
    label: "Button",
    path: "/button",
    to: "/draft/button",
  },
  formControl: {
    label: "Form controls",
    path: "/form-control",
    to: "/draft/form-control",
  },
  iconGallery: {
    label: "Icon Gallery",
    path: "/icon-gallery",
    to: "/draft/icon-gallery",
  },
  imageGallery: {
    label: "Image Gallery",
    path: "/image-gallery",
    to: "/draft/image-gallery",
  },
};
