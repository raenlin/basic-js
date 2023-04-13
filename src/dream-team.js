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
  if(Array.isArray(members) === true) {
    let arr = members.filter(item => typeof item === 'string').toString().replace(/ /g,'').split(',');

    let name = [];
    if(arr.length == 0) {
      return false
    } else {
      for(let i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'string') {
          name.push(arr[i][0])
        } 
      }
    }

    return name.join('').toUpperCase().split('').sort().join('');
  } else return false
}

module.exports = {
  createDreamTeam
};
