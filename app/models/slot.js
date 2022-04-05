import Model, { attr } from '@ember-data/model';

export default class SlotModel extends Model {
  @attr('string') activityName;
  @attr('date') date;
  @attr('date') startTime;
  @attr('date') endTime;
  @attr('number') numMaxGuests;
}
