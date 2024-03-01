const user = {
    username: "hariprasad",
    loginCount: 999,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Get user details from database");
        console.log(this);
    }
}

console.log(user.getUserDetails());
console.log(user.username);