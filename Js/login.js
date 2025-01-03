import {auth} from "./firebase.js";
import { signInWithEmailAndPassword} from "firebase/auth";
document.getElementById(loginForm).addEventListener("submit",
    function (event){
        event.preventDefault();
        const email = document.getElementById("email").Value;
        const password = document.getElementById("password").Value;
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user',JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || 'Anonymous',photoURL: user.photoURL || 'default.jpg',
            }));
            window.location.href = 'home.html';
        })
        .catch((error) => {
            alert('error:'+error.message);
        });
    });