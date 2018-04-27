window.onload = function () {
  const menu = new ButtonMenu();
  const rules = new Rules();
  const game = new Game();
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


  });



    
};

