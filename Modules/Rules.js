class Rules {
  constructor() {
    this.rules = document.querySelector('.rules');
  }

  getRules() {
    this.rules.classList.add('_active');
  }

  clearRules() {
    this.rules.classList.remove('_active');
  }

}