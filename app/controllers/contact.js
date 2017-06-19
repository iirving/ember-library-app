import Ember from 'ember'

export default Ember.Controller.extend({

  isValidEmailAddress: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmailAddress', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveContactMsg () {
      const message = this.get('message')
      const email = this.get('emailAddress')

      const newContactMsg = this.store.createRecord('contact', {
        email: email,
        message: message
      })

      newContactMsg.save().then((response) => {
        alert(`Your contact message ${message} from the email address of ${email} is in progress.`)

        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`)

        this.set('emailAddress', '')
        this.set('message', '')

        this.set('responseMessage', `We got your message and we’ll get in touch soon.`)
      })
    }
  }

})
