window.onload = function () {
  const menu = new ButtonMenu();
  const rules = new Rules();
  const storage = new Storage();
    
  document.querySelector('.menu').addEventListener('click', function (e) {
    menu.tableToggle(e.target);
  });
    
  rules.getRules();

  document.querySelector('.register').addEventListener('click', function () {
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
      menuScrit.addEventListener('click', function (e) {
      menu.selectScirt(e.target);
    });

    let menuDifficulty = document.querySelector('.difficultyTableMenu');
      menuDifficulty.addEventListener('click', function (e) {
      menu.selectDifficulty(e.target);
    });
    
    let gameContainer = document.querySelector('.game');
    gameContainer.addEventListener('click', function (e) {
      let counter = 0;
      e.target.parentElement.parentElement.classList.toggle('_opened');
    })

};

