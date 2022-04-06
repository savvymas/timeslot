import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import registerFlatpickrHelpers from 'ember-flatpickr/test-support/helpers';
registerFlatpickrHelpers();
import { setFlatpickrDate } from 'ember-flatpickr/test-support/helpers';

module('Acceptance | slot', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /slot', async function (assert) {
    await visit('/slot');
    assert.equal(currentURL(), '/slot');
  });

  test('create a timeslot', async function (assert) {
    await visit('/slot');
    assert.equal(currentURL(), '/slot');
    await click(document.querySelector('[data-test="create"]'));
    await fillIn('[data-test="activity"]', 'Horseback Riding');
    await setFlatpickrDate('[data-test="date"]', '2022-04-05', true);
    await setFlatpickrDate('[data-test="startTime"]', '5:00', true);
    await setFlatpickrDate('[data-test="endTime"]', '6:00', true);
    await fillIn('[data-test="guests"]', 4);
    await click(document.querySelector('[data-test="save"]'));
    assert.dom('[data-test="slot"]').containsText('Horseback Riding');
    assert.equal(document.querySelectorAll('[data-test="slot"]').length, 1);
  });

  test('delete a timeslot', async function (assert) {
    await visit('/slot');
    assert.equal(currentURL(), '/slot');
    await click(document.querySelector('[data-test="create"]'));
    await fillIn('[data-test="activity"]', 'Horseback Riding');
    await setFlatpickrDate('[data-test="date"]', '2022-04-05', true);
    await setFlatpickrDate('[data-test="startTime"]', '5:00', true);
    await setFlatpickrDate('[data-test="endTime"]', '6:00', true);
    await fillIn('[data-test="guests"]', 4);
    await click(document.querySelector('[data-test="save"]'));
    assert.dom('[data-test="slot"]').containsText('Horseback Riding');
    assert.equal(document.querySelectorAll('[data-test="slot"]').length, 1);
    await click(document.querySelector('[data-test="delete"]'));
    assert.equal(document.querySelectorAll('[data-test="slot"]').length, 1);
    assert.dom('[data-test="slot"]').containsText('Cancelled');
  });


  test('update a timeslot', async function (assert) {
    await visit('/slot');
    assert.equal(currentURL(), '/slot');
    await click(document.querySelector('[data-test="create"]'));
    await fillIn('[data-test="activity"]', 'Horseback Riding');
    await setFlatpickrDate('[data-test="date"]', '2022-04-05', true);
    await setFlatpickrDate('[data-test="startTime"]', '5:00', true);
    await setFlatpickrDate('[data-test="endTime"]', '6:00', true);
    await fillIn('[data-test="guests"]', 4);
    await click(document.querySelector('[data-test="save"]'));
    assert.dom('[data-test="slot"]').containsText('Horseback Riding');
    assert.equal(document.querySelectorAll('[data-test="slot"]').length, 1);
    await click(document.querySelector('[data-test="edit"]'));
    await fillIn('[data-test="activity"]', 'Hiking');
    await click(document.querySelector('[data-test="save"]'));
    assert.equal(document.querySelectorAll('[data-test="slot"]').length, 1);
    assert.dom('[data-test="slot"]').containsText('Hiking');
  });

});
