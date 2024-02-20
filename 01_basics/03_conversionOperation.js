let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "hariprasad@gmail.com";

console.log(userOne.email);
console.log(userTwo.email); 

