class Game {

    constructor(user, settings) {
        this.container = document.querySelector('.game');
        this.user = user;
        this.settings = settings;
        this.cards = [];
        this.count = 0;


    }

    getCardsArrayLength() {
        return this.cards.length;
    }

    userDisplay() {
        let user = document.createElement('div');
        user.classList.add('user-display');
        user.innerText = this.user;
        this.container.appendChild(user);
    }

    gameCounter() {
        let that = this;
        let counter = document.createElement('div');
        counter.classList.add('userCounter');
        this.container.appendChild(counter);

        function startCounter() {
            counter.innerHTML = that.count++;
        }
        setInterval(startCounter, 1000);
    }

    stopGameCounter() {
        let item = document.querySelector('.userCounter');
        item.parentNode.removeChild(item);
    }

    randomizeCards() {

        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }

        this.cards.sort(compareRandom);

        console.log(this.cards); // элементы в случайном порядке, например [3,5,1,2,4]
    }

    createCards(settings, idArray) {
        for (let i = 0; i < idArray.length; i++) {
            let card1 = new Card(settings, idArray[i]);
            let card2 = new Card(settings, idArray[i]);

            this.cards.push(card1);
            this.cards.push(card2);
        }

        this.randomizeCards();

        for (let i = 0; i < this.cards.length; i++) {
            this.container.appendChild(this.cards[i]);
        }
    }

    renderGame(settings) {
        if (settings.difficulty === 'easy') {
            this.createCards(settings, [1, 2]);
        }

        if (settings.difficulty === 'medium') {
            this.createCards(settings, [1, 2, 3, 4]);
        }

        if (settings.difficulty === 'hard') {
            this.createCards(settings, [1, 2, 3, 4, 5, 6]);
        }
    }

    startGame() {
        this.container.style = 'display: block;';
        this.userDisplay();
        this.gameCounter();
        this.renderGame(this.settings);
        console.log(this.cards);
    }
}