export default getStory;

function getStory(char){
    const storyObj = story[char[0].story_code];
    const keys = {
        "{hairColor}": char.hair,
        "{eyeColor}": char.eyes,
        "{gender}": char.gender,
        "{name}": char.name
    }
    storyObj.replace.forEach(obj=>{
        if(obj.key !== "{name}"){
            storyObj.text.replace(obj.repkey, obj[keys[obj.key]])
        }
            storyObj.text.replace(obj.repkey, keys[obj.key])
    })

    return storyObj;
}
const story = {
    "0":{
        "text": "Geäst und trockenes Laub knirschen zu deinen Füßen. Deine Schritte, schwerfällig, ziellos. Tiefer und tiefer ins nächtliche Halbdunkel des Waldes, führen sie dich. Vorbei an majestätischen Eichen, gespenstisch im fahlen Licht des Mondes. Ohne zu wissen weshalb, wandelst du voran. Es scheint nicht von Bedeutung zu sein. Schwacher Wind {hairColor1}. Das Rascheln deiner Schritte verstummt und dein Blick wandert nach oben, das einsame Licht in der Schwärze des Himmels suchend. Spärlich dringt es noch durch das Blätterdach. Du solltest einen Unterschlupf finden, ehe es von den aufziehenden Wolken verschlungen wird, denn die Dunkelheit birgt in diesen Gefilden Schrecken, denen du bisweilen nicht gewachsen bist. Nachdenklich senkst du dein Haupt in Erwägung deiner weiteren Vorgehensweise. {eyeColor1} blicken gen Waldboden.",
        "replace":[
            {   
                repkey: "{hairColor1}",
                key: "{hairColor}",
                "white": "fährt durch dein weißes",
                "black": "fährt durch dein schwarzes",
                "gray": "fährt durch dein graues",
                "brown": "fährt durch dein braunes",
                "blonde": "fährt durch dein weißes",
                "none": "streicht über deine Kophaut"
            },
            {
                repkey: "{eyeColor1}",
                key: "{eyeColor}",
                "blue:": "Deine Augen, so blau wie die See",
                "green": "Deine Augen, so grün wie Smaragde",
                "brown": "Deine Augen, so braun wie Bernstein",
                "red": "Deine Augen, so rot wie sterbende Sonnen",
                "gray": "deine Augen, so grau wie blanker fels",
                "black": "Deine Augen, so schwarz wie ebenholz"
            },
            {
                repkey: "{gender1}",
                key: "{gender}",
                "male": "Die Glider wie Baumstämme, das Gesicht von Bartstoppelb übersät",
                "female": "Die verkörperung der Anmut.",
                "different": "Du allein bist dir deiner Selbst bewusst"
            },
            {
                key: "{name}"
            }
            
        ],
        "choices": [
                {   "code": "1A",
                    "main": "Im Wald umsehen",
                    "sub": "Ob etwas nütztliches zu finden ist..."
                },
                {
                    "code": "1B",
                    "main": "Auf einen Baum klettern",
                    "sub": "Um nach einem Unterschlupf ausschau zu halten..."
                }
        ]
    },
    "1A":{
        "text": "Du findest eine Fackel",
        "choices": []
    },
    "1B":{
        "text": "Du siehst einen Berg in der Ferne",
        "choices": []
    }
}
