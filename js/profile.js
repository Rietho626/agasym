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