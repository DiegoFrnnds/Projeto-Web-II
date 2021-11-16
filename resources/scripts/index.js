//Diego Fernandes Martinez

//Prompt & alert & onload
window.onload = function () {
    namePrompt = window.prompt('Qual é o seu nome?');
    if (namePrompt != null && namePrompt != '') {
        alert('Bem vindo ' + namePrompt);
    }
}

//Referenciar o DOM pelo id & função com nome & String Template
function showContent(id) {
    switch (id) {
        case 'categories':
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
        case 'platforms':
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
    }
}