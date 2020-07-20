export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: 'viewBottom',
      title: 'View Bottom',
      description: 'Select this for the project to appear at the bottom rather than sorted by year.',
      type: 'boolean',
      validation: Rule => Rule.required()
    },
    {
      name: "collaborators",
      title: "Collaboratores",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "collaborator" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      name: "video",
      title: "Video",
      type: "array",
      of: [{ type: "videoPreview" }],
      validation: (Rule) => Rule.max(1).error("Only 1 video per project"),
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "projectImage",
      validation: Rule => Rule.required()
    },
    {
      name: "supportingImages",
      title: "Supporting Images",
      type: "array",
      of: [{ type: "projectImage" }],
    },
    {
      name: "links",
      title: "Project Links",
      type: "array",
      of: [{ type: "link" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      descrition: "A short 1 line description.",
      validation: (Rule) =>
        Rule.max(140).error("Short description must be 140 characters or less").required(),
    },
    {
      name: "description",
      title: "Long Description",
      description: "Full description of project.",
      type: "blockContent",
    },
  ],
};
