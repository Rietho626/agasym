const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const returnButton = document.getElementById('return-button');
const unameInput = document.getElementById('uname');
const pwdInput = document.getElementById('pwd');

function refer(page){
    window.location.href=`/agasym/${page}`;
}

registerButton.addEventListener('click', ()=>{
    refer('subsites/register.html');
})

returnButton.addEventListener('click', ()=>{
    refer('');
})

loginButton.addEventListener('click', ()=>{
    console.log(testApi(unameInput.value, pwdInput.value));
})

async function testApi(uname, pwd){
    const test = {uname: uname, pwd: pwd};

    return await fetch(`https://rietho626.pythonanywhere.com/api/check-uname`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(test)
        }
    ).then(res=>res.json()).then(data=>data);
    
}

