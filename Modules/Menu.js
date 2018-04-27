class ButtonMenu {

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

    gameActive() {
        
    }

}