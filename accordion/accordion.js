var Accordion = function (rootElement) {
    this.rootElement = rootElement;
    this.buttonItem = this.rootElement.getElementsByClassName('accordion-button');
    this.buttonItems = [].slice.call(this.buttonItem);
    this.content = this.rootElement.getElementsByClassName('accordion-content');
    this.contentItems = [].slice.call(this.content);
    this.currentTabId = 0;
    this.active = 'isActive';
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.handleClickAccordion = this.handleClickAccordion.bind(this);
 };

Accordion.prototype.handleClickAccordion = function (event) {
    this.currentTabId = this.buttonItems.indexOf(event.target);
    this.setActive(this.buttonItems);
    this.setActive(this.contentItems);
};

Accordion.prototype.toggleAccordion = function(){
    this.buttonItems[this.currentTabId].classList.add(this.active);
    this.contentItems[this.currentTabId].classList.add(this.active);
    this.rootElement.addEventListener('click', this.handleClickAccordion);
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