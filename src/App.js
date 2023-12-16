import InputView from './view/InputView.js';
import OutputView from './view/outputView.js';
import CheckValidationOf from './domain/CheckValidationOf.js';
import Convert from './domain/Convert.js';
import Get from './domain/Get.js';

import CONFIG from './domain/configs/CONFIG.js';
import VARIABLE_NAME from './domain/constants/VARIABLE_NAME.js';
import STRINGS from './domain/constants/STRINGS.js';

const { INPUT_MESSAGE, OUPUT_MESSAGE } = STRINGS;

const Print = OutputView.Print;

const pipe = (variableName, value, option) => {
  CheckValidationOf[variableName](value, option);
  return Convert[variableName](value, option);
};

const throwError = error => {
  throw error;
};

const parseInput = async (variableName, option) => {
  const errorHandler = option?.errorHandler ?? Print.errorMessage;
  while (true) {
    const value = await InputView.input(INPUT_MESSAGE[variableName]);
    try {
      return pipe(variableName, value, option);
    } catch (error) {
      errorHandler(error);
    }
  }
};

const inputOncallSequence = async () => {
  while (true) {
    try {
      const weekday = await parseInput(VARIABLE_NAME.WEEKDAY_SEQUENCE);
      const holiday = await parseInput(VARIABLE_NAME.HOLIDAY_SEQUENCE, {
        weekday,
        errorHandler: throwError,
      });
      return { weekday, holiday };
    } catch (error) {
      Print.errorMessage();
    }
  }
};

const printOnCallSchedule = (oncallSchedule, monthInfo) => {
  Print.lineBreak();
  const { month } = monthInfo;
  for (let date = 1; date <= CONFIG.LAST_DAY_OF_MONTH[month]; date++) {
    Print.string(Get.oncallScheduleString(date, oncallSchedule, monthInfo));
  }
};

class App {
  async run() {
    const monthInfo = await parseInput(VARIABLE_NAME.MONTH_INFO);
    const oncallSequence = await inputOncallSequence();

    const oncallSchedule = Get.oncallSchedule(monthInfo, oncallSequence);

    printOnCallSchedule(oncallSchedule, monthInfo);
  }
}

export default App;
