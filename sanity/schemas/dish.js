import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation : (Rule) => Rule.required(),
    }, 
    {
      name: 'short_discription',
      title: 'Short discription',
      type: 'string',
      validation : (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish in PKR',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },

  ],
  })
