class ButtonMenu {

    constructor() {
        this.settings = {
            scirt: 'gold',
            difficulty: 'easy'
        };
    }

    clearBorder(itemsArray, flag) {
      if (flag === 'scirt') {
        for (let i = 0; i < itemsArray.length; i++) {
          itemsArray[i].children[0].style="border: none"
        }
      }

      if (flag === 'difficulty') {
        for (let i = 0; i < itemsArray.length; i++) {
          itemsArray[i].style="border: none"
        }
      }

    }

    tableToggle(item) {
        let table = document.querySelector(`.${item.dataset.name}Table`);
        //'.' + item + 'Table'
        console.log(table, '.' + item.dataset.name + 'Table');
        let opened = '_opened';
        let active = '_active';

        if (item.classList.contains(opened)) {
            item.classList.remove(opened);
            table.classList.remove(active);
        } else {
            item.classList.add(opened);
            table.classList.add(active);
        }
    }

    selectScirt(item) {
        this.settings.scirt = item.dataset.scirt;

        let container = document.querySelectorAll('.scirtCard');
      console.log(container);

        this.clearBorder(container, 'scirt');

        for (let i = 0; i < container.length; i++) {
            if(container[i].children[0].dataset.scirt === this.settings.scirt) {
                container[i].children[0].style="border: 5px solid red"
            }
        }
    }
    
    selectDifficulty(item) {
      this.settings.difficulty = item.dataset.difficulty;
      let container = document.querySelectorAll('.difficultySelect');
      console.log(container);

      this.clearBorder(container, 'difficulty');


      for (let i = 0; i < container.length; i++) {
        console.log(container[i].dataset.difficulty);
        if(container[i].dataset.difficulty === this.settings.difficulty) {
          container[i].style="border: 5px solid red";
        }
      }
    }

    getSettings() {
      return this.settings;
    }



}