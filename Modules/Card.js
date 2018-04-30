class Card {
  constructor(settings, id) {
    this.scirt = settings.scirt;
    this.id = id;
    this.container = document.querySelector('.game');
    console.log('обложка',this.scirt);
    return this.createContainer();
  }


  createContainer() {
    let card = document.createElement('div');
    let flipper = document.createElement('div');
    let front = document.createElement('div');
    let back = document.createElement('div');
    card.classList.add('card');
    flipper.classList.add('flipper');
    front.classList.add('front', this.scirt);
    back.classList.add('back');
    back.style.backgroundColor = 'red';
    flipper.appendChild(front);
    flipper.appendChild(back);
    card.appendChild(flipper);
    console.log(card);
    this.container.appendChild(card);
  }

}