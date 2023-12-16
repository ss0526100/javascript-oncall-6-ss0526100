import InputView from './view/InputView.js';
import OutputView from './view/outputView.js';
import CheckValidationOf from './domain/CheckValidationOf.js';
import Convert from './domain/Convert.js';
import Get from './domain/Get.js';

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

const inputOncallInfo = async () => {
  while (true) {
    try {
      const weekday = await parseInput(VARIABLE_NAME.WEEKDAY_INFO);
      const holiday = await parseInput(VARIABLE_NAME.HOLIDAY_INFO, {
        weekday,
        errorHandler: throwError,
      });
      return { weekday, holiday };
    } catch (error) {
      Print.errorMessage();
    }
  }
};

class App {
  async run() {
    const monthInfo = await parseInput(VARIABLE_NAME.MONTH_INFO);
    const oncallInfo = await inputOncallInfo();
  }
}

export default App;
