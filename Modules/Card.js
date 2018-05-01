class Card {
    constructor(settings, id) {
        this.settings = settings;
        this.scirt = settings.scirt;
        this.id = id;
        this.container = document.querySelector('.game');
        this.cardImages = [
            'red',
            'white',
            'black',
            'yellow',
            'orange',
            'blue'
        ]
        return this.init();
    }

    addImages() {

    }


    init() {
        console.log(this.id);
        let card = document.createElement('div');
        let flipper = document.createElement('div');
        let front = document.createElement('div');
        let back = document.createElement('div');
        card.classList.add('card');
        flipper.classList.add('flipper');
        front.classList.add('front', this.scirt);
        back.classList.add('back');
        back.style.backgroundColor = this.cardImages[this.id - 1];
        back.dataset.id = this.id - 1;
        flipper.appendChild(front);
        flipper.appendChild(back);
        card.appendChild(flipper);
        console.log('Карта в инит', card);
        return card;
        // this.container.appendChild(card);
    }


}