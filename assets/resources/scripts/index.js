// Diego Fernandes Martinez
'use strict';

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

// getElementById & charCode
function verify(event) {
    // x declarado como var na 1ª avaliação
    const x = event.charCode;

    if (x === 13) {
        // user declarado como var na 1ª avaliação
        const user = document.getElementById('name').value;
        
        // pss declarado como var na 1ª avaliação
        const pss = document.getElementById('password').value;

        if (pss === '12345') {
            alert(`Bem vindo(a) de volta ${user}`);
        }
    }
}

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
        case 'periods': {
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
        case 'cart':
            cart.insertAdjacentHTML('beforeend',
                `<div class="cart-content">
                <p>Carrinho vazio</p>
            </div>`
            );
    }
}