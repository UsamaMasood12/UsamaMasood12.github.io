const hamburger = document.getElementById('hamburger-btn');
const mobMenu = document.getElementById('mobile_menu');

function myFunction(x) {
  x.classList.toggle('change');
  if (mobMenu.style.visibility === 'visible') {
    mobMenu.style.visibility = 'hidden';
    mobMenu.style.height = '0';
    mobMenu.style.overflowY = 'hidden';
  } else {
    mobMenu.style.visibility = 'visible';
    mobMenu.style.height = '100vh';
    mobMenu.style.overflowY = 'auto';
  }
}

const professors = [
  {
    name: 'Yann LeCun',
    profession: 'Silver Professor of the Curant Institute of Mathematical Sciences',
    description: 'Artifical Intelligence, Deep Learning Networks',
    img: 'images/yann-lecun.jpg',
  },
  {
    name: 'Daphne Koller',
    profession: 'Professor — Department of Computer Science',
    description: 'Machine Learning, Artifical Intelligence, Computational Biology',
    img: 'images/daphne-koller.jpg',
  },
  {
    name: 'Tim Berners-Lee',
    profession: 'MIT, University of Oxford. Professor & Professorial Fellow of Computer Science',
    description: 'HTML, Invented World Wide Web',
    img: 'images/tim-berners-lee.jpg',
  },
  {
    name: 'Scott Aaronson',
    profession: 'David J. Bruton Jr. Centennial Professor of Computer Science',
    description: 'Quantum Computing, Complexity Theory',
    img: 'images/scott-aaronson.jpg',
  },
  {
    name: 'Erik Demaine',
    profession: 'Professor — MIT Computer Science and Artificial Intelligence Laboratory',
    description: 'Computational Origami',
    img: 'images/erik-demaine.jpg',
  },
  {
    name: 'Donald Knuth',
    profession: 'Professor Emeritusr — Department of Computing Science',
    description: 'KComputer Programming, Analysis of Algorithms',
    img: 'images/donald-knuth.jpg',
  },
];

const referencePosition = document.getElementById('main-program');

const createProfessorStructureHTML = () => {
  referencePosition.insertAdjacentHTML('afterend',
    `<section class="professors" id="featured-professors">
     <div class="section-title"><h2>Featured Professors</h2></div>
     <span class="red-bar"></span>
     <ul class="professors-container"></ul></section>`);
};

const createProfessorCard = () => {
  professors.forEach((professor) => {
    const professorsGrid = document.querySelector('.professors-container');

    professorsGrid.insertAdjacentHTML('beforeend',
      `<li class="card">
         <div class="professor__image">
         <img src="${professor.img}" alt="professor photo"></div>
        <div class="professor__dsc">
        <h3>${professor.name}</h3>
        <p class="dsc-1">${professor.profession}</p>
        <span></span>
        <p class="dsc-2">${professor.description}</p>
        </div>
        </li>`);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createProfessorStructureHTML();

  createProfessorCard();
});