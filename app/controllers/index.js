import Ember from 'ember'

export default Ember.Controller.extend({

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  emailAddress: '',

  actions: {

    saveInvitation () {
      //      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`)
      const email = this.get('emailAddress')
      const newInvittation = this.store.createRecord('invitation', {
        email: email
      })
      newInvittation.save()
      this.set('responseMessage', `Thank you! We've just saved your email address: ${email}`)
      this.set('emailAddress', '')
    }
  }

})
