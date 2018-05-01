window.onload = function() {
    const menu = new ButtonMenu();
    const rules = new Rules();
    const storage = new Storage();

    document.querySelector('.menu').addEventListener('click', function(e) {
        menu.tableToggle(e.target);
    });

    rules.getRules();

    document.querySelector('.register').addEventListener('click', function() {
        let name = document.querySelector('.name');
        let email = document.querySelector('.email');
        let user = {
            name: name.value,
            email: email.value
        };
        storage.addUser(user);

        const game = new Game(user.name, menu.getSettings());
        rules.clearRules();
        game.startGame();
    });

    let menuScrit = document.querySelector('.scritTableMenu');
    menuScrit.addEventListener('click', function(e) {
        menu.selectScirt(e.target);
    });

    let menuDifficulty = document.querySelector('.difficultyTableMenu');
    menuDifficulty.addEventListener('click', function(e) {
        menu.selectDifficulty(e.target);
    });


    let counter = 0;
    let currentCards = [];

    let gameContainer = document.querySelector('.game');
    gameContainer.addEventListener('click', function(e) {
        counter++;
        let element = e.target.parentElement.parentElement;
        element.classList.toggle('_opened');
        currentCards.push(element);
        if (counter === 2) {
            if (currentCards[0].querySelector('.back').dataset.id === currentCards[1].querySelector('.back').dataset.id) {
                console.log('EEEEEEEEEEEE');
                currentCards[0].style.visibility = "hidden";
                currentCards[1].style.visibility = "hidden";

                counter = 0;
                currentCards = [];
            } else {
                setTimeout(function() {
                    for (let i = 0; i < 2; i++) {
                        currentCards[i].classList.remove('_opened');
                    }
                    counter = 0;
                    currentCards = [];

                }, 1000);
            }



        }


        console.log(counter);
    });

};