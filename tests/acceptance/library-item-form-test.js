import {
  test
} from 'qunit'
import moduleForAcceptance from 'library-app/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | library item form')

test('visiting library-item-form new', function(assert) {
  visit('/libraries/new')

  andThen(function() {
    assert.equal(currentURL(), '/libraries/new')
  })
})

test('adding a new library-item-form', function(assert) {
  visit('/libraries/new')
  fillIn('[data-test-name]', 'test name')
  fillIn('[data-test-address]', 'test address')
  fillIn('[data-test-phone]', '123')

  andThen(function() {
    assert.equal(currentURL(), '/libraries/new')
    assert.equal(find('[data-test-name]').val(), 'test name')
    assert.equal(find('[data-test-address]').val(), 'test address')
  })
})
