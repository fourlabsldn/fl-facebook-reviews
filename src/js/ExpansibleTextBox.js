const CLASS_PREFIX = 'ExpansibleTextBox';
export default class ExpansibleTextBox {
  constructor(text, maxCharacters, modulePrefix) {
    if (typeof text !== 'string') { throw new Error('Text is not string'); }
    this.text = text;
    this.maxCharacters = maxCharacters;
    const cssPrefix = `${modulePrefix}-${CLASS_PREFIX}`;

    this.container = document.createElement('p');
    this.container.classList.add(`${cssPrefix}`);

    this.textBox = document.createElement('span');
    this.container.appendChild(this.textBox);

    this.expanded = true;
    if (text.length > maxCharacters) {
      this.seeMoreBtn = document.createElement('span');
      this.seeMoreBtn.classList.add(`${cssPrefix}-seeMore`);

      this.seeMoreBtn.addEventListener('click', () => this.toggleExpand());
      this.container.appendChild(this.seeMoreBtn);
      this.toggleExpand();
    } else {
      this.textBox.textContent = this.text;
    }
  }

  getBox() {
    return this.container;
  }

  toggleExpand() {
    if (this.expanded) {
      this.textBox.textContent = this.trimText(this.text);
      this.seeMoreBtn.textContent = 'See more';
    } else {
      this.textBox.textContent = this.text;
      this.seeMoreBtn.textContent = 'See less';
    }
    this.expanded = !this.expanded;
  }

  trimText(text) {
    const elipsis = '...';
    return text.slice(0, this.maxCharacters - elipsis.length).trim() + elipsis;
  }
}
