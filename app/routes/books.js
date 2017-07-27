import Ember from 'ember'

export default Ember.Route.extend({

  showYear: Ember.computed('releaseYear', function () {
    // console.log(this.get('releaseYear'))
    return this.get('releaseYear').getFullYear()
  }),

  model () {
    return this.store.findAll('book')
  },

  actions: {
    editBook (book) {
      book.set('isEditing', true)
    },

    cancelBook (book) {
      book.set('isEditing', false)
      book.rollbackAttributes()
    },

    saveBook (book) {
      if (book.get('isNotValid')) {
        return
      }
      book.set('isEditing', false)
      book.save()
    }

  }
})
