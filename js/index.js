const login = document.getElementById('login');
login.addEventListener('click', ()=>{
    refer('login.html');
})

function refer(page){
    window.location.href=`/subsites/${page}`;
}