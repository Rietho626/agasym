fetch('https://rietho626/pythonanywhere.com').then(res=>res.json()).then(data=>console.log(data.msg));

const container = document.getElementById('test');
const stringo = "Geäst und trockenes Laub knirschen zu deinen Füßen. Deine Schritte, schwerfällig, ziellos. Tiefer und tiefer ins nächtliche Halbdunkel des Waldes, führen sie dich. Vorbei an tagsüber majestätischen Eichen, gespenstisch im fahlen Licht des Mondes. Ohne zu wissen weshalb, wandelst du voran. Es scheint nicht von Bedeutung zu sein.";
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

storyTime(stringo);

function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}

