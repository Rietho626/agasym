
import getStory from "./../story/story.js";

async function getCharacter(){
    return await fetch(`https://rietho626.pythonanywhere.com/api/get-char`,
        {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({})
            }
    ).then(res=>res.json());
}

async function updateCharacter(code){
    return await fetch(`https://rietho626.pythonanywhere.com/api/update-char`,
        {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({code: code})
            }
    ).then(res=>res.json());
}

const container = document.getElementById('test');

async function startGame() {
    const char = await getCharacter();
    storyTime(getStory(char), "");
}

startGame();

async function continueGame(code){
    const newChar = await updateCharacter(code);
    Array.from(document.querySelectorAll('.choice-box')).forEach(node=>container.removeChild(node));
    storyTime(getStory(newChar), code);
}


async function storyTime(snippet, code){
    const story = snippet.text;
    let told = "";
    for(let i = 0; i < story.length; i++){      
        if(story[i] !== "|")told += story[i];
        container.innerHTML = told;
        if(story[i] === "."){
            told += "<br><br>"
            await delay(550);
        }else if(story[i] === "|"){
            told += "<br><br><br>";
            await delay(700);
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



