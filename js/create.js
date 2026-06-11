const form = document.getElementById("create-char");
const hair = document.getElementById("hair");
const eyes = document.getElementById("eyes");
const gender = document.getElementById("gender");
const charName = document.getElementById("charName");

form.addEventListener("submit", submitListener);

async function submitListener(e){
    e.preventDefault();
    const genderValue = gender.value;
    const eyesValue = eyes.value;
    const hairValue = hair.value;
    const nameValue = charName.value;
    const data = {
        gender: genderValue,
        eyes: eyesValue,
        hair: hairValue,
        name: nameValue
    };

    const response = await fetch(`https://rietho626.pythonanywhere.com/api/create-char`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(res=>res.json());

}