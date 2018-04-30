class Game {

    constructor(user, settings) {
      this.container = document.querySelector('.game');
      this.user = user;
      this.settings = settings;
      this.buttonStartGame = document.querySelector('.game');
      this.buttonStartGame.addEventListener('click', this.userDisplay.bind(this))
    }

    userDisplay() {
      let user = document.createElement('div');
      user.classList.add('user-display');
      user.innerText = this.user;
      this.container.appendChild(user);
    }

    gameCounter() {
      let count = 0;
      let counter = document.createElement('div');
      counter.classList.add('userCounter');
      this.container.appendChild(counter);

      function startCounter() {
        counter.innerHTML = count++;
      }

      setInterval(startCounter, 1000);


    }

    createCards(scirt, difficulty, idArray) {
      for (let i = 0; i < idArray.length; i++) {
        let newCard = new Card(scirt, idArray[i]);
        // newCard.createContainer();
        console.log(newCard);
      }
    }

    renderGame(settings) {
      this.createCards(settings, 'easy', [1,2,3]);
    }

    startGame() {
      this.container.style = 'display: block;';
      this.userDisplay();
      this.gameCounter();
      this.renderGame(this.settings);
    }
}