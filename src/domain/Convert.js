import VARIABLE_NAME from './constants/VARIABLE_NAME.js';

/*
Basic form in function Of Convert

VARIABLE_NAME.$name:(value, to)=>{
  ...
  return result;
}
*/

const Convert = {
  [VARIABLE_NAME.HELLO]: (value, to) => {
    //'to' is not used

    return value;
  },
};

export default Convert;
