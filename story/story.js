export default getStory;

function getStory(char){
    const storyObj = story[char[0].story_code];
    const setKeys = () =>{
        return {"{hairColor}": char[0].hair,
                "{eyeColor}": char[0]["eye_color"],
                "{gender}": char[0].gender,
                "{name}": char[0].name}
    };
    const keys = setKeys();
    storyObj.replace.forEach(obj=>{
        if(obj.key !== "{name}"){
            storyObj.text = storyObj.text.replace(obj.repkey, obj[keys[obj.key]])
        }
            storyObj.text = storyObj.text.replace(obj.repkey, keys[obj.key])
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
                "white": "fährt durch dein weißes Haar",
                "black": "fährt durch dein schwarzes Haar",
                "gray": "fährt durch dein graues Haar",
                "brown": "fährt durch dein braunes Haar",
                "blonde": "fährt durch dein weißes Haar",
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
        "choices": [],
        "replace": []
    },
    "1B":{
        "text": "Du entschließt dich dazu, das umliegende Terrain auszukundschaften. Das Knirschen und Knacken deiner Schritte erfüllt den dunklen Wald aufs Neue als du dich einer hochgewachsenen Eiche näherst. Deine Hand ruht auf ihrer Rinde. Rau und uneben. Dein Blick wandert am Stamm empor, den du in Kürze erklimmen wirst. Für einen Moment stehst du reglos, die Nachtluft atmend da. Dann beginnst du den Aufstieg. Trotz der Erschöpfung winden sich deine Glieder behände um den massiven Stamm.  Du verlagerst dein Gewicht, greifst um und kletterst.|Umfangen vom lauen Spätsommerwind ragt dein Oberkörper über das Blätterdach, ein endloses Meer von Baumkronen zu deinen Füßen. Der Mond, eine Iris aus fahlem Licht, blickt aus der ewigen Schwärze des Nachthimmels auf deine einsame Figur herab. Dein Fokus richtet sich gen Norden – unweit von hier erheben sich Gebirgsausläufer wie Wellen aus der grünen See. Ein geeigneter Ort, um nach Höhlen und Felsvorsprüngen Ausschau zu halten, die als Schutz vor der drohenden Finsternis dienen könnten. Das wird genügen müssen. Zum Abstieg bereit wendest du dich ab, da erblickst du etwas im Mondlicht über das Blätterdach aufsteigen. Graue Schwaden – Rauch. Im Nordwesten hatte jemand ein Feuer entfacht. Eine überaus kühne Tat, geboren von grenzenloser Selbstsicherheit, oder Naivität, denn sowie die Flammen Schutz vor den Schrecken der vollkommenen Dunkelheit bieten, so erweisen sie sich, solange der Mond die Nacht noch erhellt, lediglich als Köder unangenehmer Gesellschaft. Wobei diese zumindest mit sich reden lässt, wenn auch meist ausschließlich darüber, wie viele Silberstücke einem das eigene Leben wert ist. ",
        "choices": [],
        "replace": []
    }
}
