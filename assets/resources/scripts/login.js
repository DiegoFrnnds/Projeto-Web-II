// Diego Fernandes Martinez
'use strict';

const users = [];

// getElementById & charCode
function verify(event) {
    // x declarado como var na 1ª avaliação
    const x = event.charCode;

    if (x === 13) {
        // user declarado como var na 1ª avaliação
        const username = document.getElementById('name').value;
        
        // pss declarado como var na 1ª avaliação
        const pss = document.getElementById('password').value;

        let user = {
            name: username,
            triedPassword: pss
        };
        users.push(user);

        if (pss === '12345') {
            console.log(users);
            alert(`Bem vindo(a) de volta ${username}`);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

