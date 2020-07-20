export default {
  name: "projectImage",
  Title: "Project Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      description: 'What is this image?',
      type: 'string',
      options: {
        isHighlighted: false // <-- make this field easily accessible
      }
    }
  ]
};
