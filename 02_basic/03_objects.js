const mySym = Symbol("key1")

const jsUser = {
    name : "hari",
    "full name" : "hariprasad sakhare",
    [mySym]: "mykey1",
    age : 21,
    location : "jaypur",
    email : "hari@gmail.com",
    isLoggedIn: false,
    lastLoginDates: ["monday","saturday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(typeof jsUser[mySym])
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`hello JS user ,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());