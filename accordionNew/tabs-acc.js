var AccordionTabs = function (rootElement) {
    this.rootElement = rootElement;
    this.AccordionItem = this.rootElement.querySelector('.accordionTabs');
    this.AccordionItemOne = this.rootElement.querySelector('.main-item-one');
    this.AccordionItemTwo = this.rootElement.querySelector('.main-item-two');
    this.tabsButton = this.rootElement.querySelector('.accordion-item');
    this.tabsContent = this.rootElement.querySelector('.content');
    this.buttonItem = this.AccordionItem.getElementsByClassName('accordion-item');
    this.buttonItems = [].slice.call(this.buttonItem);
    this.contentAcc = this.AccordionItem.getElementsByClassName('content');
    this.contentAccItems = [].slice.call(this.contentAcc);
    this.currentTabId = 0;
    this.active = 'isActive';
    this.handleClickAccordion = this.handleClickAccordion.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.handleClickAccordionOne = this.handleClickAccordionOne.bind(this);

};

AccordionTabs.prototype.handleClickAccordion = function (event) {
    this.currentTabId = this.buttonItems.indexOf(event.target);
    this.setActive(this.buttonItems);
    this.setActive(this.contentAccItems);
};

AccordionTabs.prototype.handleClickAccordionOne = function () {
      this.tabsButton.classList.toggle(this.active);
    this.tabsContent.classList.toggle(this.active);
};



AccordionTabs.prototype.toggleAccordion = function(){
    this.buttonItems[this.currentTabId].classList.add(this.active);
    this.contentAccItems[this.currentTabId].classList.add(this.active);

};

Object.defineProperty(AccordionTabs.prototype, 'currentTabId', {
    get: function () {
        return this._currentTabId;
    },
    set: function (value) {
        this._currentTabId = (value <= 0)? 0 : Math.min(value, this.buttonItems.length - 1);

        this.toggleAccordion();

    }
});
AccordionTabs.prototype.setActive = function (itemsCollection) {
    itemsCollection.forEach(function (item, index) {
        if (index === this.currentTabId) {
            item.classList.add(this.active);
        } else {
            item.classList.remove(this.active);
        }
    }.bind(this));
};

AccordionTabs.prototype.delegateEvents = function () {
    this.AccordionItem.addEventListener('click', this.handleClickAccordion);
    this.AccordionItemOne.addEventListener('click', this.handleClickAccordionOne);
    this.AccordionItemTwo.addEventListener('click', this.handleClickAccordionOne);

       return this;
};


AccordionTabs.prototype.render = function () {
    this.delegateEvents();
    return this;
};



