import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async input(inputMessage) {
    return await Console.readLineAsync(inputMessage);
  },
};

export default InputView;
