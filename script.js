//IMPLEMENTATION 1: INLINE EVENT HANDLER IMPLEMENTATION
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     var username = document.getElementById("username").value;

//     if(username == ""){
//         alert("Username is required.");
//         event.preventDefault();
//     }
// });

// IMPLEMENTATION 2: DEFINE FUNCTION SEPARATELY, THEN PASS THE FUNCTION RFEFERENCE.
function handleFormSubmit(event) {
    var username = document.getElementById("username").value;

    if (username == "") {
        alert("Username is required.");
        event.preventDefault();
    }
}

document.getElementById("myForm").addEventListener("submit", handleFormSubmit);