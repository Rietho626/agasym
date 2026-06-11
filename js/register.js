const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const returnButton = document.getElementById('return-button');
const unameInput = document.getElementById('uname');
const pwdInput = document.getElementById('pwd');
const pwdInputRepeat = document.getElementById('pwd-repeat');

loginButton.addEventListener('click', ()=>{
    refer('subsites/login.html');
})

returnButton.addEventListener('click', ()=>{
    refer('');
})

function refer(page){
    window.location.href=`/agasym/${page}`;
}

registerButton.addEventListener('click', ()=>{
    if(pwdInput.value.trim() === pwdInputRepeat.value.trim()){
        console.log(register(unameInput.value.trim(), pwdInput.value.trim()));
    }else{
        console.log("Passwörter stimmen nicht überein.");
    }
    
})

async function register(uname, pwd){
    const udata = {uname: uname, pwd: pwd};

    const response = await fetch(`https://rietho626.pythonanywhere.com/api/check-uname`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(udata)
        }
    ).then(res=>res.json());
    
    if(response.exists){
        console.log("Dieser Benutzername ist bereits vergeben.")
    }else{
         return await fetch(`https://rietho626.pythonanywhere.com/api/register`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(udata)
            }
        ).then(res=>res.json());
    }
}

