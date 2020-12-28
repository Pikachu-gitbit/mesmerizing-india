//------------- firebase config ---------------//
const firebaseConfig = {
    apiKey: "AIzaSyDHfET5qz7AxPmolJ4WMb8nXWbDQ1cQv7A",
    authDomain: "messmarizing-india.firebaseapp.com",
    databaseURL: "https://messmarizing-india-default-rtdb.firebaseio.com",
    projectId: "messmarizing-india",
    storageBucket: "messmarizing-india.appspot.com",
    messagingSenderId: "803301117624",
    appId: "1:803301117624:web:30b42b40649d7dfd03ae4d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//--------------------------- push data -------------------------------------//
// Add a new document in collection "cities"
document.getElementById('submit').addEventListener('click',
    function (event) {
        event.preventDefault()

        const fname = document.getElementById('name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('number').value
        const message = document.getElementById('message').value

        db.collection("feedbacks").add({
            name: fname,
            Email: email,
            Number: number,
            message: message,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            console.log("Document successfully written!")
        }).then(
            document.getElementById('submit').style.display = 'none'
        ).then(
            document.getElementById('submited').style.display = 'block'
        ).then(setTimeout(function () {
            window.location.href = './thankyou.html';
        }, 5000)
        )

    }
)