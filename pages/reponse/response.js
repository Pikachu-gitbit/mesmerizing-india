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
const data = document.querySelector('#name');

db.collection("feedbacks").orderBy('Timestamp', "desc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let li = document.createElement('h3');
        let name = document.createElement('h1');
        let hr = document.createElement('hr');
        let email = document.createElement('p');
        let feedback = document.createElement('p')

        li.setAttribute('data-id', doc.id)
        li.className = ' gg mt-2 col-sm   pb-2  pt-3 shadow bg-white rounded '
        hr.className = '  m-0 pb-1 p-0  '
        name.className = '  m-0 pb-2 display-4 '
        hr.style = '  height:3px  '
        name.style = '  font-size:25px; font-weight:bold  '
        email.style = "font-size: 10px ; margin:0"
        feedback.className = ' display-3 '
        feedback.style = ' font-size:30px '
        feedback.textContent = doc.data().message
        name.textContent = doc.data().name;
        email.textContent = doc.data().Email;

        li.appendChild(name);
        li.appendChild(email);
        li.appendChild(hr);
        li.appendChild(feedback);
        data.appendChild(li);
        console.log(li)

    })
})
