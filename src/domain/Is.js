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

  specialDay: (month, date) => {
    return CONFIG.SPECIAL_DAY[month].includes(date);
  },
};

export default Is;
