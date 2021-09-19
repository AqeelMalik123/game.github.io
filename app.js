const signup=()=>{
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
var detail={
    username,
    email,
    password
}


firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location="login.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

const login=()=>{
    const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  setTimeout(function(){
    window.location="game.html"
  },1000)
  
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
});

}

//game work
let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};