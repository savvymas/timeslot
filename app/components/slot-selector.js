import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class SlotSelectorComponent extends Component {
  @inject store;
  @tracked showForm;
  @tracked records = this.store.peekAll('slot');
  @tracked editingSlot;

  @action
  editSlot(slot) {
    this.editingSlot = slot;
  }

  @action
  deleteSlot(slot) {
    let record = this.store.peekRecord('slot', slot.id);
    record.deleteRecord();
  }

  @action
  stopEditing() {
    this.editingSlot = undefined;
  }

  @action
  showInputs() {
    this.showForm = !this.showForm;
  }
}
