
async function getByCode(code){
    return await fetch('https://rietho626.pythonanywhere.com/0').then(res=>res.json()).then(data=>data);
    
}

async function startGame() {
    const snippet = await getByCode(0);
    storyTime(snippet);
}

startGame();

const container = document.getElementById('test');
async function storyTime(snippet){
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
        appendChoices(container, choice);
    })
}

function appendChoices(parent, choice){
    if(!choice.code.includes('H')){
        const choiceBox = document.createElement('div').classList.add('choice-box');
        const choiceMain = document.createElement('div').classList.add('choice-main');
        const choiceSub = document.createElement('div').classList.add('choice-sub');
        choiceMain.textContent = choice.main;
        choiceSub.textContent = choice.sub;

        choiceBox.appendChild(choiceMain);
        choiceBox.appendChild(choiceSub);
        parent.appendChild(choiceBox);
    }
}

function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}

