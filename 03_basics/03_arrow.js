const user = {
    username: "hariprasad",
    price: 999,

    welcomeMeassage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
}

//user.welcomeMeassage()
//user.username = "sam"
//user.welcomeMeassage()

const addTwo = (num1, num2) => {
    return num1 + num2
}
//console.log(addTwo(3, 4))

const addThree = (num1, num2) => (num1 + num2)

console.log(addTwo(3,6))