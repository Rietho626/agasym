
async function getByCode(code){
    return await fetch('https://rietho626.pythonanywhere.com/0').then(res=>res.json()).then(data=>data);
    
}

async function startGame() {
    const snippet = await getByCode(0);
    storyTime(snippet.text);
}

startGame();

const container = document.getElementById('test');
async function storyTime(story){
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
}

function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}

