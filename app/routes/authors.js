import Ember from 'ember'

export default Ember.Route.extend({

  model () {
    return this.store.findAll('author', {
      include: 'books'
    })
  },

  actions: {
    editAuthor (author) {
      author.set('isEditing', true)
    },

    cancelAuthor (author) {
      author.set('isEditing', false)
      author.rollbackAttributes()
    },

    saveAuthor (author) {
      if (author.get('isNotValid')) {
        return
      }
      author.set('isEditing', false)
      author.save()
    }

  }
})
