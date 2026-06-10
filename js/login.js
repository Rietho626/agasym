const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const returnButton = document.getElementById('returnButton-button');
const unameInput = document.getElementById('uname');
const pwdInput = document.getElementById('pwd');

loginButton.addEventListener('click', ()=>{
    console.log(testApi(unameInput.value, pwdInput.value));
})

async function testApi(uname, pwd){
    const tesuto = {uname: uname, pwd: pwd};

    return await fetch(`https://rietho626.pythonanywhere.com/api/check-uname`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(tesuto)
        }
    ).then(res=>res.json()).then(data=>data);
    
}

