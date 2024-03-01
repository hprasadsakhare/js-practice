const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,rejedct){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    }, 10000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai#example.com"})
    }, 1000)
})  

promiseThree.then(function(user){
    console.log(user); 
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username:"Hariprasad", password:"323212"})
        } else{
            reject("Error")
        }
       
    }, 1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Them promis is either resolved or rejected"));


const promiseFive = new Promise(function(resolve, reject){
    
})