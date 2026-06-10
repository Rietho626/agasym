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
    console.log(login(unameInput.value, pwdInput.value));
})

async function login(uname, pwd){
    const test = {uname: uname, pwd: pwd};

    const response = await fetch(`https://rietho626.pythonanywhere.com/api/check-uname`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(test)
        }
    ).then(res=>res.json()).then(data=>data);
    
    if(response.exists){
        const cred = await fetch(`https://rietho626.pythonanywhere.com/api/check-pwd`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(test)
            }
        ).then(res=>res.json()).then(data=>data);

        if(cred.matching){
            //set cookie
            refer('subsites/game.html');
        }else{
            return "Password not matching";
        }
    }else{
        return "Username does not exist";
    }
}

