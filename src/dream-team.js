const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let i = 0;
  let Arr = [];
  let ArrStr = [];
  let text = '';
  if (Array.isArray(members)){
  for (i; i < members.length; i++) {
     let ArrG = members[i];
     
     if (typeof(ArrG) === 'string') {
      ArrG = ArrG.trim();
      ArrStr.push(ArrG[0].toUpperCase());
    }
  
    }
    ArrStr = ArrStr.sort();
    for (let j = 0; j < ArrStr.length; j++){
      text = text + ArrStr[j];
    }
    text = text.toUpperCase();
    
return text;
  } else {return false};
}


module.exports = {
  createDreamTeam
};
