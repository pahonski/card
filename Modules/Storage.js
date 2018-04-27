class Storage {
  constructor() {
    this.userStorage = [];
  }

  addUser(user) {
    user.points = 0;
    let userLocal = JSON.stringify(user);
    console.log(userLocal);
    localStorage.setItem(user.name, userLocal);

    this.userStorage.push(user);
    console.log(this.userStorage);
  }
}

