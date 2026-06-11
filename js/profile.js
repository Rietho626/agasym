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


const wrapper = document.getElementById("wrapper");

if(!characters.response){
    wrapper.innerHTML = "You are not logged in, you fool.";
}else{
    const uname = localStorage.getItem("uname");
    const greeting = document.getElementById("greeting");
    const characterBoxes = document.getElementById("characters");
    const createNew = document.getElementById("create-new-character");
    const deleteChar = document.getElementById("delete-character");
    const charInfo = document.getElementById("char-info");
    const logout = document.getElementById("logout-button");
    const erfolge = document.getElementById("erfolge-button");

    greeting.textContent = `Seien Sie gegrüßt, ${uname}`;

    if(characters.chars.length){
        characters.chars.forEach(char=>{
            const charBox = document.createElement("div");
            charBox.classList.add("char-box");
            const charName = document.createElement("div");
            charName.textContent = char["char_name"];
            const charScene = document.createElement("div");
            charScene.textContent = char["story_code"];
            charBox.appendChild(charName);
            charBox.appendChild(charScene);
            characterBoxes.appendChild(charBox);
        })
    }else{
        characterBoxes.textContent = 'Wähle "beginne eine neue Reise", um aufzubrechen';
    }


}