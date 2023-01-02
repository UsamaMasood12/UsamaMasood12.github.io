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
hamburger.addEventListener('click', myFunction);
const professors = [
  {
    name: 'Yann LeCun',
    profession: 'Silver Professor of the Curant Institute of Mathematical Sciences',
    description: 'Artifical Intelligence, Deep Learning Networks',
    img: 'images/Sohyeoung-Noh.jpg',
  },
  {
    name: 'Daphne Koller',
    profession: 'Professor — Department of Computer Science',
    description: 'Machine Learning, Artifical Intelligence, Computational Biology',
    img: 'images/Yochai-Benkler.jpg',
  },
  {
    name: 'Tim Berners-Lee',
    profession: 'MIT, University of Oxford. Professor & Professorial Fellow of Computer Science',
    description: 'HTML, Invented World Wide Web',
    img: 'images/Chon-Kilnam.jpg',
  },
  {
    name: 'Scott Aaronson',
    profession: 'David J. Bruton Jr. Centennial Professor of Computer Science',
    description: 'Quantum Computing, Complexity Theory',
    img: 'images/Sohyeoung-Noh.jpg',
  },
  {
    name: 'Erik Demaine',
    profession: 'Professor — MIT Computer Science and Artificial Intelligence Laboratory',
    description: 'Computational Origami',
    img: 'images/Yochai-Benkler.jpg',
  },
  {
    name: 'Donald Knuth',
    profession: 'Professor Emeritusr — Department of Computing Science',
    description: 'KComputer Programming, Analysis of Algorithms',
    img: 'images/Chon-Kilnam.jpg',
  },
];
const referencePosition = document.getElementById('main-program');
const createProfessorStructureHTML = () => {
  referencePosition.insertAdjacentHTML('afterend',
    `<section class="professors" id="featured-professors">
     <div class="section-title"><h2>Featured Professors</h2></div>
     <span class="red-bar"></span>
     <ul id="professors-list" class="professors-container"></ul></section>`);
};
let count = 0;
const createProfessorCard = () => {
  for (let i = 0; i < 2; i += 1) {
    const professorsGrid = document.querySelector('.professors-container');
    professorsGrid.insertAdjacentHTML('beforeend',
      `<li class="card">
         <div class="professor__image">
         <img src="${professors[i].img}" alt="professor photo"></div>
         <div class="professor__dsc">
         <h3>${professors[i].name}</h3>
         <p class="dsc-1">${professors[i].profession}</p>
         <span></span>
         <p class="dsc-2">${professors[i].description}</p>
         </div>
         </li>`);
  }
  const prfessorsGrid = document.querySelector('.professors-container');
  prfessorsGrid.insertAdjacentHTML('afterend',
    '<div id="see-more" class="se-more" onclick="mFunction()">More</div>');
};
function myUnction(x) {
  if (document.getElementById('professors-list').getElementsByClassName('card').length > 0) {
    while (document.getElementById('professors-list').getElementsByClassName('card').length > 0) {
      document.getElementById('professors-list').removeChild(document.getElementById('professors-list').lastChild);
    }
  }
  if (x.matches) {
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
    if (count > 0) {
      const elemt = document.getElementById('see-more');
      elemt.remove();
    }
    count += 1;
  } else {
    count += 1;
    if (document.getElementById('professors-list').getElementsByClassName('card').length > 0) {
      while (document.getElementById('professors-list').getElementsByClassName('card').length > 0) {
        document.getElementById('professors-list').removeChild(document.getElementById('professors-list').lastChild);
      }
    }
    createProfessorCard();
  }
}
createProfessorStructureHTML();
const screenSize = window.matchMedia('(min-width: 768px)');
myUnction(screenSize);
screenSize.addListener(myUnction);
function mFunction() {
  if (document.getElementById('professors-list').getElementsByClassName('card').length < 3) {
    for (let i = 2; i < 6; i += 1) {
      const professorsGrid = document.querySelector('.professors-container');
      professorsGrid.insertAdjacentHTML('beforeend',
        `<li class="card">
         <div class="professor__image">
          <img src="${professors[i].img}" alt="professor photo"></div>
          <div class="professor__dsc">
          <h3>${professors[i].name}</h3>
          <p class="dsc-1">${professors[i].profession}</p>
          <span></span>
          <p class="dsc-2">${professors[i].description}</p>
          </div>
          </li>`);
    }
    document.getElementById('see-more').innerHTML = 'Less';
  } else {
    while (document.getElementById('professors-list').getElementsByClassName('card').length > 2) {
      document.getElementById('professors-list').removeChild(document.getElementById('professors-list').lastChild);
    }
    document.getElementById('see-more').innerHTML = 'More';
  }
}
const val = 0;
if (val === 1) {
  mFunction();
}