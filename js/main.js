
async function getByCode(code){
    const snippet = await fetch('https://rietho626.pythonanywhere.com/0').then(res=>res.json()).then(data=>data);
    console.log(snippet);
}

getByCode(0);
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

