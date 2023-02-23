import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description:"progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'image of skill',
      type: 'image',
      options: {
        hotspot : true,
      }
    }),
  ],
})
