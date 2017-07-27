import DS from 'ember-data'
import Faker from 'faker'

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),

  author: DS.belongsTo('author', {
    inverse: 'books',
    async: true
  }),
  library: DS.belongsTo('library', {
    inverse: 'books',
    async: true
  }),

  randomize (author, library) {
    this.set('title', this._bookTitle())
    this.set('author', author)
    this.set('releaseYear', this._randomDate(1900, 2017))
    this.set('library', library)

    return this
  },

  _bookTitle () {
    return `${Faker.commerce.productName()} Cookbook`
  },

  _randomDate (start, end) {
    let startDate = new Date(start, 0, 1)
    let endDate = new Date(end, 0, 1)
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  },

  _getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
  }

})
