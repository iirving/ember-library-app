import Ember from 'ember'

export default Ember.Controller.extend({

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  emailAddress: '',

  actions: {

    saveInvitation () {
      const email = this.get('emailAddress')
      const newInvittation = this.store.createRecord('invitation', {
        email: email
      })
      newInvittation.save().then((response) => {
        // console.log(`email address ${email} is saved at id ${response.get('id')}`)
        this.set('responseMessage', `Thank you! We've just saved your email address: ${email}`)
        this.set('emailAddress', '')
      })
    }
  }

})
