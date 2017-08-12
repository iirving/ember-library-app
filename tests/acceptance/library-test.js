import {
  test
} from 'qunit'
import moduleForAcceptance from 'library-app/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | library')

test('visiting /library and selecting new', function(assert) {
  visit('/libraries')
  click('[data-test-button-add-library]')

  andThen(function() {
    assert.equal(currentURL(), '/libraries/new')
  })
})

test('edit an existing libary', function(assert) {
  visit('/libraries')
  click('[data-test-button-edit-library]', 0) // get the first items edit button and click

  andThen(function() {
    // get the model id from the attribute on the h2
    let id = find('[data-test-library-edit-item-id]').data()['testLibraryEditItemId']
    assert.equal(currentURL(), `/libraries/${id}/edit`)
  })
})

/* visit libaries,
  select add library button, goto new libraries, add name/address/phone/,
  save, return to libraies, record is there */
// if add a new test and there is not name, name show error and cannot select save
