const arrTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    }
]

const eleContainer = document.querySelector('.container');

for (let i = 0; i < arrTeam.length; i++) {
    eleCard = document.createElement('div');
    eleImg = document.createElement('img');
    eleName = document.createElement('h2');
    eleRole = document.createElement('h3');

    eleCard.classList.add('card');
    
    eleImg.src = (`img/${arrTeam[i].photo}`);
    eleName.textContent = (`${arrTeam[i].name}`);
    eleRole.textContent = (`${arrTeam[i].role}`);

    eleCard.append(eleImg, eleName, eleRole);
    eleContainer.append(eleCard);
}

