
async function getByCode(code){
    return await fetch(`https://rietho626.pythonanywhere.com/${code}`).then(res=>res.json()).then(data=>data);
    
}
const container = document.getElementById('test');

async function startGame() {
    const snippet = await getByCode("0");
    storyTime(snippet, "");
}

//startGame();

async function continueGame(code){
    console.log(code);
    Array.from(document.querySelectorAll('.choice-box')).forEach(node=>container.removeChild(node));
    const snippet = await getByCode(code);
    console.log(snippet)
    storyTime(snippet, code);
}


async function storyTime(snippet, code){
    const story = snippet.text;
    let told = "";
    for(let i = 0; i < story.length; i++){      
        told += story[i];
        container.innerHTML = told;
        if(story[i] === "."){
            told += "<br><br>"
            await delay(550);
        }else{
            await delay(50)
        }
    }
    snippet.choices.forEach(choice=>{
        appendChoices(container, choice, code);
    })
}

function appendChoices(parent, choice, code){
    if(!choice.code.includes('H')){
        const choiceBox = document.createElement('div');
        choiceBox.classList.add('choice-box');
        const choiceMain = document.createElement('div');
        choiceMain.classList.add('choice-main');
        const choiceSub = document.createElement('div');
        choiceSub.classList.add('choice-sub');
        choiceMain.textContent = choice.main;
        choiceSub.textContent = choice.sub;

        choiceBox.addEventListener("click", ()=>{
            choiceBoxListener(code, choice.code);
        })

        choiceBox.appendChild(choiceMain);
        choiceBox.appendChild(choiceSub);
        parent.appendChild(choiceBox);
    }
}

function choiceBoxListener(fullCode, choiceCode){
    const code = String(fullCode)+String(choiceCode);
    continueGame(code);
}


function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}



async function testApi(uname, pwd){
    const tesuto = {uname: "schnitzel", pwd: "schnitzel_pwd"};

    return await fetch(`https://rietho626.pythonanywhere.com/api`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(tesuto)
        }
    ).then(res=>res.json()).then(data=>data);
    
}

console.log(testApi(1,2));