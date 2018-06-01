var Accordion = function (rootElement) {
    this.rootElement = rootElement;
    this.buttonItemClickOne = this.rootElement.querySelector('.accordion-click-one');
    this.buttonItemClickTwo = this.rootElement.querySelector('.accordion-click-two');
    this.buttonItemClickTree = this.rootElement.querySelector('.accordion-click-three');
    this.buttonItem = this.rootElement.getElementsByClassName('accordion-button');
    this.buttonItems = [].slice.call(this.buttonItem);
    this.contentAcc = this.rootElement.getElementsByClassName('accordion-content');
    this.contentAccItems = [].slice.call(this.contentAcc);
    this.currentTabId = 0;
    this.active = 'isActive';
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.handleClickAccordion = this.handleClickAccordion.bind(this);
};

Accordion.prototype.handleClickAccordion = function (event) {
    this.currentTabId = this.buttonItems.indexOf(event.target);
    this.setActive(this.buttonItems);
    this.setActive(this.contentAccItems);
};

Accordion.prototype.toggleAccordion = function(){
    this.buttonItems[this.currentTabId].classList.add(this.active);
    this.contentAccItems[this.currentTabId].classList.add(this.active);

};

Object.defineProperty(Accordion.prototype, 'currentTabId', {
    get: function () {
        return this._currentTabId;
    },
    set: function (value) {
        this._currentTabId = (value <= 0)? 0 : Math.min(value, this.buttonItems.length - 1);

        this.toggleAccordion();
    }
});

Accordion.prototype.setActive = function (itemsCollection) {
    itemsCollection.forEach(function (item, index) {
        if (index === this.currentTabId) {
            item.classList.add(this.active);
        } else {
            item.classList.remove(this.active);
        }
    }.bind(this));
};


Accordion.prototype.delegateEvents = function () {
    this.buttonItemClickOne.addEventListener('click', this.handleClickAccordion);
    this.buttonItemClickTwo.addEventListener('click', this.handleClickAccordion);
    this.buttonItemClickTree.addEventListener('click', this.handleClickAccordion);
    return this;
};


Accordion.prototype.render = function () {
    this.delegateEvents();
    return this;
};
