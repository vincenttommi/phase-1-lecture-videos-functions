
// function showMessage(){

// alert("Hello everyone!");


// }

// showMessage();
// showMessage();


// Local variables
// a   variable declared inside the function is only visible inside that function

// function showMessage(){

//     let     Message = "javascript programming"; 

//     alert(message);
//     //javascript programming


// }


// showMessage();



//global variables
// a function can access outer variables of a fuunction

let username = "vincenttommi";

function showMessage(){

  username = "maxwell";

 let message = 'Hello, '+username;
 alert(message);

}

alert(username);
showMessage();


;

