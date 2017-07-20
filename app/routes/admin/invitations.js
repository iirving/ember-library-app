import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return this.store.findAll('invitation')
  },

  actions: {
    deleteInvite (invite) {
      let confirmation = confirm('Are you sure?')

      if (confirmation) {
        invite.destroyRecord()
      }
    }
  }

})
