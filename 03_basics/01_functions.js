function saymyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
}

//saymyName()

function addTwoNumbers(num1,num2){
    //console.log(num1 + num2);
   // let result = num1 + num2;
   // return result
   return num1 + num2
}

const result = addTwoNumbers(4,5)
//console.log("Result : " , result);
//addTwoNumbers(5,4)  

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a useename");
        returen
    }
   return `${username} just logged in`
}

console.log(loginUserMessage("hariprasad"))
