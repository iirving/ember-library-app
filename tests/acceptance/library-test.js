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

  let id = '' // doing this here so i can use it in other scopes because async

  andThen(function() {
    // get the model id from the attribute on the h2
    id = find('[data-test-library-edit-item-id]').data()['testLibraryEditItemId']
    assert.equal(currentURL(), `/libraries/${id}/edit`)
  })

  // edit the data
  fillIn('[data-test-name]', 'test name')
  fillIn('[data-test-address]', 'test address')
  fillIn('[data-test-phone]', '123')
  // submit and save the data
  click('[data-test-button-submit]')

  andThen(function() {
    assert.equal(currentURL(), `/libraries`) // got to the list of libraries page
    // test that the items for that record have changed
    assert.equal(
      find('[data-test-library-item-name]', `[data-test-library-item-id=${id}]`)
      .text(),
      'test name')
    assert.equal(
      find('[data-test-library-item-address]', `[data-test-library-item-id=${id}]`)
      .text(),
      'test address')
    assert.equal(
      find('[data-test-library-item-phone]', `[data-test-library-item-id=${id}]`)
      .text(),
      '123')
  })
})

/* visit libaries,
  select add library button, goto new libraries, add name/address/phone/,
  save, return to libraies, record is there */
// if add a new test and there is not name, name show error and cannot select save
