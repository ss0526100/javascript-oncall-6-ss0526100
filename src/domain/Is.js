import CONFIG from './configs/CONFIG.js';

const Is = {
  digitString: string => {
    return /^-?\d+(\.\d+)?$/.test(string);
  },

  numberInRange: (number, lower, upper) => {
    return lower <= number && number <= upper;
  },

  sameStringElementArray: (arrayA, arrayB) => {
    const copyA = [...arrayA];
    const copyB = [...arrayB];

    return copyA.sort().toString() === copyB.sort().toString();
  },
};

export default Is;
