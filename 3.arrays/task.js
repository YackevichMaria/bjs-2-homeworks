function compareArrays(arr1, arr2) { 
    return arr1.length == arr2.length && arr1.every((item, index) => item === arr2[index]);
  }



function getUsersNamesInAgeRange(users, gender) {
  
  return users
    .filter(user => user.gender === gender)
    .map(person => person.age)
    .reduce((summ, userAge, index, array) => summ + userAge / array.length, 0)
}

/* почему не работает код ?

function getUsersNamesInAgeRange(users, gender) {
  
  return users
    .filter(user => user.gender === gender)
    .map(person => person.age)
    .reduce((summ, userAge, index, array) => {
      if (index === array.lenght - 1) {
        return summ / array.lenght; 
      }

      return summ + userAge;
    }, 0)
} */