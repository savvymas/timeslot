import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class SlotSelectorComponent extends Component {
  @inject store;
  @tracked showForm;
  @tracked showSchedule;
  @tracked records = this.store.peekAll('slot');
  @tracked editingSlot;

  @action
  editSlot(slot) {
    console.log('editing', slot);
    this.editingSlot = slot;
    console.log(this.editingSlot);
  }

  @action
  deleteSlot(slot) {
    console.log('deleted');
    let record = this.store.peekRecord('slot', slot.id);
    record.deleteRecord();
    console.log(record);
    console.log(record.isDeleted);
  }

  @action
  stopEditing() {
    this.editingSlot = undefined;
  }

  @action
  showInputs(show) {
    this.showForm = show;
  }

  @action
  showCal(show) {
    this.showSchedule = show;
  }

  schedule() {
    let records = this.store.peekAll('slot');
    console.log('scheduler', records);
    return records;
  }
}
