import CONFIG from './configs/CONFIG.js';

const Is = {
  digitString: string => {
    return /^-?\d+(\.\d+)?$/.test(string);
  },

  numberInRange: (number, lower, upper) => {
    return lower <= number && number <= upper;
  },
};

export default Is;
