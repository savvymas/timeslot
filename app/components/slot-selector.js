import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class SlotSelectorComponent extends Component {
  @inject store;
  @tracked showForm;
  @tracked defaultDate = new Date();
  @tracked defaultTime = this.defaultDate.getTime();
  @tracked date;
  @tracked startTime;
  @tracked endTime;
  @tracked activityName;
  @tracked numMaxGuests;
  @tracked showSchedule;
  @tracked records = this.store.peekAll('slot');

  @action
  showInputs(show) {
    this.showForm = show;
  }

  @action
  showCal(show) {
    this.showSchedule = show;
  }

  @action
  onChange([date]) {
    this.date = date;
  }

  @action
  onStartTimeChange([time]) {
    this.startTime = time;
  }

  @action
  onEndTimeChange([time]) {
    this.endTime = time;
  }

  @action
  save() {
    let slot = this.store.createRecord('slot', {
      activityName: this.activityName,
      date: this.date.toDateString(),
      startTime: this.startTime.toTimeString(),
      endTime: this.endTime.toTimeString(),
      numMaxGuests: this.numMaxGuests,
    });
    slot.save();
    this.activityName = null;
    this.date = null;
    this.startTime = null;
    this.endTime = null;
    this.numMaxGuests = null;
    this.showForm = false;
  }

  get schedule() {
    let records = this.store.peekAll('slot');
    return records;
  }
}
