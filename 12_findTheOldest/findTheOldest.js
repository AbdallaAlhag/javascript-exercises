const findTheOldest = function(people) {
    let oldest = 0;
    let index = 0;
    for (let i = 0; i < people.length; i++) {
        if(!people[i].hasOwnProperty('yearOfDeath') ){
            let age = findAge(people[i].yearOfBirth);
            if(oldest <  age)
                index = i;
                oldest = age;
                //return people[index];
        }

        else if(people[i].yearOfDeath - people[i].yearOfBirth > oldest){
            oldest = people[i].yearOfDeath - people[i].yearOfBirth;
            index = i;
        }
    }
    return people[index];

};

const findAge = function(birth, death)
{
    if(!death)
        death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
