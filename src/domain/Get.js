import RoundQueue from '../class/RoundQueue.js';
import CONFIG from './configs/CONFIG.js';

const Get = {
  oncallInfo: (monthInfo, oncallSequence) => {
    const oncallQueueOf = this.oncallQueueObject(oncallSequence);
    const lastDay = CONFIG.LAST_DAY_OF_MONTH[monthInfo.month];
    const firstDayWeek = monthInfo.firstDayWeek;

    for (let date = 1; date <= lastDay; date++) {}
  },

  dayweekByDate: (date, firstDayWeek) => {
    return (date - 1 + firstDayWeek) % 7;
  },

  oncallQueueObject: oncallSequence => {
    return {
      [CONFIG.WEEKDAY_STATE]: new RoundQueue(oncallSequence.weekday),
      [CONFIG.WEEKEND_STATE]: new RoundQueue(oncallSequence.holiday),
    };
  },
};

export default Get;
