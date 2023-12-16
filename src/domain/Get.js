import RoundQueue from '../class/RoundQueue.js';
import CONFIG from './configs/CONFIG.js';

const getOncallQueueObject = oncallSequence => {
  return {
    [CONFIG.WEEKDAY_STATE]: new RoundQueue(oncallSequence.weekday),
    [CONFIG.HOLIDAY_STATE]: new RoundQueue(oncallSequence.holiday),
  };
};

const todayState = (date, month, firstDayWeek) => {
  if (CONFIG.SPECIAL_DAY[month].includes(date)) return CONFIG.HOLIDAY_STATE;
  if (4 < Get.dayweekByDate(date, firstDayWeek)) return CONFIG.HOLIDAY_STATE;

  return CONFIG.WEEKDAY_STATE;
};

const Get = {
  oncallSchedule: ({ month, firstDayWeek }, oncallSequence) => {
    const oncallQueueOf = getOncallQueueObject(oncallSequence);
    let lastOncaller;
    const result = [null];

    for (let date = 1; date <= CONFIG.LAST_DAY_OF_MONTH[month]; date++) {
      const todayQueue = oncallQueueOf[todayState(date, month, firstDayWeek)];
      if (lastOncaller === todayQueue.seek()) todayQueue.swapNowAndNext();
      lastOncaller = todayQueue.getNow();
      result.push(lastOncaller);
    }

    return result;
  },

  dayweekByDate: (date, firstDayWeek) => {
    return (date - 1 + firstDayWeek) % 7;
  },
};

export default Get;
