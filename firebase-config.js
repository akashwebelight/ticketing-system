// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZLrF220ViXqBaYV7nB8aDZEFuO51niZg",
    authDomain: "zency-creation-project.firebaseapp.com",
    projectId: "zency-creation-project",
    storageBucket: "zency-creation-project.firebasestorage.app",
    messagingSenderId: "281015807301",
    appId: "1:281015807301:web:7330f1622afa970298622c",
    measurementId: "G-BYZ982SG4P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

const loginUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
        console.error("Authentication failed:", error);
    });
};

const logoutUser = () => {
    auth.signOut();
};

auth.onAuthStateChanged(user => {
    if (user) {
        // Show admin panel
    } else {
        // Redirect to login page
        window.location.href = 'login.html';
    }
});
