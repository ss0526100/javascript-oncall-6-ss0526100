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

const parseInput = async (variableName, option) => {
  const inputMessage = option?.inputMessage ?? INPUT_MESSAGE[variableName];
  while (true) {
    const value = await InputView.input(inputMessage);
    try {
      return pipe(variableName, value, option);
    } catch (error) {
      Print.errorMessage(error);
    }
  }
};

class App {
  async run() {
    const hello = await parseInput(VARIABLE_NAME.HELLO);
  }
}

export default App;
