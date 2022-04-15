
let user = {
    name: "Mike",
    friend: ["John", "Paul", "Jimmy"],
    families: [
        { name: "David", age: 20 },
        { name: "Ava", age: 25 },
    ],
    location: {
        region: "England",
        country: "United Kingdom",
    },
    aboutMe: {
        status: "Single",
        pet: "Dog",
    },
};

//Q1
const { aboutMe } = user
//Q2
const {location : {region : region2} } = user
//Q3
const {friend : [john]} = user
const {friend : {0 : john2}} = user
//Q4
const {families : [{name},{age}]} = user




