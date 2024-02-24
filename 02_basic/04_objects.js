

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hari",
            lastname : "sakhare"
        }
    }
}

//console.log(regularUser.fullname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "e",6: "f"}

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hariprasad"
}

const {courseInstructor : instructor} = course
console.log(instructor);