import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { v4 as uuidv4 } from 'uuid';

export default class SlotFormComponent extends Component {
  @inject store;

  @tracked date = this.getMethods().date;
  @tracked startTime = this.getMethods().startTime;
  @tracked endTime = this.getMethods().endTime;
  @tracked activityName = this.getMethods().activityName;
  @tracked numMaxGuests = this.getMethods().numMaxGuests;

  getMethods() {
    if (this.args.newSlot) {
      let date = new Date();
      return {
        date: date,
        activityName: undefined,
        startTime: this.formatTime(date),
        endTime: this.formatTime(date),
        numMaxGuests: null,
      };
    } else {
      return {
        date: this.args.slot.date,
        activityName: this.args.slot.activityName,
        startTime: this.args.slot.startTime,
        endTime: this.args.slot.endTime,
        numMaxGuests: this.args.slot.numMaxGuests,
      };
    }
  }

  formatTime(time) {
    let hour = time.getHours();
    let minute = String(time.getMinutes()).padStart(2, '0');
    let formatted = `${hour}:${minute}`;
    return formatted;
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
    if (this.args.newSlot) {
      this.store.push({
        data: {
          id: uuidv4(),
          type: 'slot',
          attributes: {
            activityName: this.activityName,
            date: this.date,
            startTime: this.startTime,
            endTime: this.endTime,
            numMaxGuests: this.numMaxGuests,
          },
        },
      });
      this.showForm = false;
    } else {
      console.log('slot', this.args.slot.id);
      console.log(this.store.hasRecordForId('slot', this.args.slot.id));

      let slot = this.store.peekRecord('slot', this.args.slot.id);
      slot.set('activityName', this.activityName);
      slot.set('date', this.date);
      slot.set('startTime', this.startTime);
      slot.set('endTime', this.endTime);
      slot.set('numMaxGuests', this.numMaxGuests);
      this.showForm = false;
    }
    //this.clear();
  }

  clear() {
    this.args.slot.activityName = undefined;
    this.args.slot.date = undefined;
    this.this.args.slot.startTime = undefined;
    this.this.args.slot.endTime = undefined;
    this.this.args.slot.numMaxGuests = undefined;
  }
}
