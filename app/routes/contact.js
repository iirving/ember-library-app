import Ember from 'ember'

export default Ember.Route.extend({

  model () {
    return this.store.createRecord('contact')
  },

  actions: {

    saveContact (newContact) {
      const that = this // .get('newContact')
      newContact.save().then((response) => {
        console.log('response', response)
        console.log('newContact', newContact)
        console.log(that)
        that.set('responseMessage', `Thank you! We've just saved your email address: ${that.get('model.email')}`)

        that.set('model.email', '')
        that.set('model.message', '')

        // this.transitionTo('contact')
      })
    },

    willTransition () {
      this.controller.get('model').rollbackAttributes()
    }

  }
})
