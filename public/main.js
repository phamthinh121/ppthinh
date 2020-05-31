const loginHandler = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }). then(res => {
        if(res.status == '200'){
            return res.json();
        }
        const e = new Error("Email and password wrong")
        throw e;
    })
    .then(data => {
        console.log(data)
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:3000';
    })
    .catch(e => {
        console.log(e)
        document.getElementById('error').innerHTML = e
    })
}