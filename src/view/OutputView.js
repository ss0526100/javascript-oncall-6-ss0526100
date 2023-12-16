import { Console } from '@woowacourse/mission-utils';

import STRINGS from '../domain/constants/STRINGS.js';

const { BLANK } = STRINGS;

const OutputView = {
  Print: {
    hello(input, blankHeader = true) {
      if (blankHeader) this.lineBreak();
      Console.print(input);
    },

    errorMessage(error) {
      Console.print(error.message);
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
