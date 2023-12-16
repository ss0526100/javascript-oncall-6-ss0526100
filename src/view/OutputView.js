import { Console } from '@woowacourse/mission-utils';

import STRINGS from '../domain/constants/STRINGS.js';

const { BLANK, ERROR_MESSAGE } = STRINGS;

const OutputView = {
  Print: {
    errorMessage() {
      Console.print(ERROR_MESSAGE.INVALID_INPUT);
    },

    lineBreak() {
      Console.print(BLANK);
    },

    string(argument) {
      Console.print(argument);
    },
  },
};

export default OutputView;
