//pure functions with immutablity


//impure pattern 
function update__(city, profile) {
    //update the city of the profile
    profile.city = city
    return profile;

}

//impure function : you have to implement immubility logic
//for every state change we need to return new Object
//In js in order to return new Object we have many patterns

//Pattern-1 : vannila js object
function update_2(city, profile) {
    //return new profile object
    return {
        id: profile.id,  //copy from old object to new object 
        name: profile.name,
        city: city
    }
}
//Pattern-2 : Object.assign => clone method
function update_3(city, profile) {
    //return new profile object 
    return Object.assign({}, profile, { city: city })
}

//Pattern 3: using es7 feature called "...(spread operator)"
function update(city, profile) {
    //return new profile object 
    return { ...profile, city:city }
}

let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
console.log('before update', profile)
const result = update('Coimbatore', profile)
console.log('After update', result)
console.log(profile === result ? 'same profile' : 'different profile')