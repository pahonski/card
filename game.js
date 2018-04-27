window.onload = function () {
    const menu = new ButtonMenu();
    const rules = new Rules();
    const game = new Game();
    
    document.querySelector('.menu').addEventListener('click', function (e) {
        menu.tableToggle(e.target);
    });
    
    rules.getRules();
    
    
};

