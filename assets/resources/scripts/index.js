// Diego Fernandes Martinez
'use strict';

const $$ = function (id) {
    return document.getElementById(id);
};

// Dropdown do Materialize
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        constrainWidth: false
    });
});

// Três funções que utilizam storage
(function () {
    if (localStorage.users) {
        let arrayUsers = JSON.parse(localStorage.users);
        $$('loggedUser').insertAdjacentText('beforeend',
            `${arrayUsers[arrayUsers.length - 1].name}`);
    } else {
        $$('loggedUser').insertAdjacentText('beforeend', 'Nenhum usuário logado');
    }
})();

(function () {
    if (localStorage.accessCounter) {
        localStorage.accessCounter = parseInt(localStorage.accessCounter) + 1;
        $$('accessCounter').insertAdjacentText('beforeend', `${localStorage.accessCounter}`);
    } else {
        localStorage.accessCounter = 1;
    }
})();

(function () {
    if (sessionStorage.reloadCounter) {
        sessionStorage.reloadCounter = parseInt(sessionStorage.reloadCounter) + 1;
        $$('reloadCounter').insertAdjacentText('beforeend', `${sessionStorage.reloadCounter}`);
    } else {
        sessionStorage.reloadCounter = 0;
    }
})();

/* Comentado por causa dos pop-ups
// Prompt & alert & onload & setTimeout
window.onload = setTimeout(function () {
    const namePrompt = window.prompt('Qual é o seu nome?');

    if (namePrompt !== null && namePrompt !== '') {
        alert(`Bem vindo(a) ${namePrompt}`);
    }
}, 5000);

// Confirm & setInterval
window.addEventListener('load', function () {
    // x declarado como let na 1ª avaliação
    const x = setInterval(function () {
        // c declarado como var na 1ª avaliação
        const c = window.confirm('Para continuar a navegar neste site deve aceitar os cookies 🍪');
        
        if (c) clearInterval(x);
    }, 10000);
});
*/

/* Substituído pelo dropdown do Materialize
// Referenciar o DOM pelo id & função com nome & String Template
function showContent(id) {
    switch (id) {
        case 'categories': {
            categories.insertAdjacentHTML('beforeend',
                `<div class="dropdown-content">
                    <p>Ação</p>
                    <p>Aventura</p>
                    <p>RPG</p>
                    <p>Estratégia</p>
                    <p>Plataforma</p>
                </div>`
            );
            break;
        }
        case 'platforms': {
            platforms.insertAdjacentHTML('beforeend',
                `<div class="dropdown-content">
                    <p>PC</p>
                    <p>Nintendo</p>
                    <p>Sega</p>
                    <p>Xbox</p>
                    <p>Playstation</p>
                </div>`
            );
            break;
        }
        case 'periods':
            periods.insertAdjacentHTML('beforeend',
                `<div class="dropdown-content">
                    <p>1995 - 2000</p>
                    <p>2000 - 2005</p>
                    <p>2005 - 2010</p>
                    <p>2010 - 2015</p>
                    <p>2015 - 2020</p>
                </div>`
            );
            break;
    }
}
*/