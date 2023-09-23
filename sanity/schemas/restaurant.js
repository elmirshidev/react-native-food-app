import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type:"string",
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: "image",
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant adress',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from(1-5 Star)',
      type: 'number',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error('Please enter a value between 1 and 5')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to:[{type:"category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type:"reference",to: [{type:"dish"}]}]
    }),
  ],
})
