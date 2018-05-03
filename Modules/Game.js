class Game {

    constructor() {
        this.menu = document.querySelector('.menu');
        this.container = document.querySelector('.game');
        this.user = '';
        this.settings = '';
        this.cards = [];
        this.count = 0;
        this.timeInterval = function(startCounter){
            setInterval(startCounter, 1000);
            console.log(this.timeInterval);
        }

    }

    getCardsArrayLength() {
        return this.cards.length;
    }

    userDisplay() {
        let user = document.createElement('div');
        user.classList.add('user-display');
        user.innerText = this.user;
        this.menu.appendChild(user);
    }

    gameCounterStart() {
        let that = this;
        that.count = 0;
        let counter = document.createElement('div');
        counter.classList.add('userCounter');
        this.menu.appendChild(counter);

        function startCounter() {
            counter.innerHTML = that.count++;
        }

        this.timeInterval(startCounter);
    }

    gameCounterStop() {

    }

    gameCounterRefresh() {
        document.querySelector('.userCounter').style.visibility = 'visible';
        this.count = 0;
        clearInterval(this.timeInterval);
    }

    randomizeCards() {
        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }

        this.cards.sort(compareRandom);
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

    startGame(settings, user) {
        this.cards = [];
        this.container.innerHTML = '';
        if (!this.user) {
            this.user = user;
            this.container.style = 'display: block;';
            this.gameCounterStart();
        }
        this.gameCounterRefresh();
        this.settings = settings;
        this.userDisplay();
        this.renderGame(this.settings);
    }

    winGame() {
        let winContainer = document.createElement('div');
        document.querySelector('.userCounter').style.visibility = 'hidden';
        winContainer.classList.add('win');
        winContainer.innerHTML = `Congratulations! You Win! Time: ${this.count} seconds`;
        this.container.appendChild(winContainer);
    }
}