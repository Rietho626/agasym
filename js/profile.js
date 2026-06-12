const characters = await fetch(`https://rietho626.pythonanywhere.com/api/login-check`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({})
            }
        ).then(res=>res.json());

console.log(characters);
const wrapper = document.getElementById("wrapper");

let selected = {};

if(!characters.response){
    wrapper.innerHTML = "You are not logged in, you fool.";
}else{

    function refer(page){
        window.location.href=`/agasym/${page}`;
    }


    function selectedListener(charBox, charid){
       selected =  selected.id === charid ? {} : {box: charBox, id: charid};
       charBox.classList.toggle('selected');
    }
    const uname = localStorage.getItem("uname");
    const greeting = document.getElementById("greeting");
    const characterBoxes = document.getElementById("characters");
    const createNew = document.getElementById("create-new-character");
    const deleteChar = document.getElementById("delete-character");
    const charInfo = document.getElementById("char-info");
    const logout = document.getElementById("logout-button");
    const erfolge = document.getElementById("erfolge-button");

    greeting.textContent = `Sei gegrüßt, ${uname}`;

    async function deleteRequest(){
        if(!selected.id){
            window.alert("Wähle eine Reise, um sie zu beenden."); 
            return;
        }
        await fetch(`https://rietho626.pythonanywhere.com/api/delete-char`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({char_id: selected.id})
            }
        );
        document.removeChild(selected.box);
        selected = {};
    }

    createNew.addEventListener("click", ()=>{
        if(characters.chars.length < 5){
            refer("subsites/create.html");
        }else{
            window.alert("Du darfst maximal 5 Geschichten auf einmal erleben");
        }
    })

    deleteChar.addEventListener("click", deleteRequest)

    if(characters.chars.length){
        characters.chars.forEach(char=>{
            const charBox = document.createElement("div");
            charBox.classList.add("char-box");
            const charName = document.createElement("div");
            charName.textContent = char["char_name"];
            const charScene = document.createElement("div");
            charScene.textContent = "Page: " + char["story_code"];
            charBox.appendChild(charName);
            charBox.appendChild(charScene);
            charBox.addEventListener("click",()=>{
                selectedListener(charBox, char["char_id"]);
            })
            characterBoxes.appendChild(charBox);
        })
    }else{
        const noCharacters = document.createElement("div");
        noCharacters.setAttribute("id", "no-characters");
        noCharacters.textContent = 'Wähle "beginne eine neue Reise", um aufzubrechen';
        characterBoxes.appendChild(noCharacters);
    }




}