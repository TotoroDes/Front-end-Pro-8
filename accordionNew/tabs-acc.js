var AccordionTabs = function (rootElement) {
    this.rootElement = rootElement;
    this.AccordionItem = this.rootElement.querySelector('.accordionTabs');
    this.AccordionItemOne = this.rootElement.querySelectorAll('.main-item-one');
    this.buttonItemOne = this.rootElement.getElementsByClassName('main-item-one');
    this.buttonItemsOne = [].slice.call(this.buttonItemOne);
    this.contentAccOne = this.rootElement.getElementsByClassName('content-one');
    this.contentAccItemsOne = [].slice.call(this.contentAccOne);
    this.buttonItem = this.AccordionItem.getElementsByClassName('accordion-item');
    this.buttonItems = [].slice.call(this.buttonItem);
    this.contentAcc = this.AccordionItem.getElementsByClassName('content');
    this.contentAccItems = [].slice.call(this.contentAcc);
    this.currentTabId = 0;
    this.currentTabIdOne = 0;
    this.active = 'isActive';

    this.handleClickAccordion = this.handleClickAccordion.bind(this);
    this.handleClickAccordionOne = this.handleClickAccordionOne.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleAccordionOne = this.toggleAccordionOne.bind(this);
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
Object.defineProperty(AccordionTabs.prototype, 'currentTabIdOne', {
    get: function () {
        return this._currentTabIdOne;
    },
    set: function (value) {
        this._currentTabIdOne = (value <= 0)? 0 : Math.min(value, this.buttonItemsOne.length - 1);

        this.toggleAccordionOne();

    }
});

AccordionTabs.prototype.handleClickAccordion = function (event) {
    this.currentTabId = this.buttonItems.indexOf(event.target);
    this.setActive(this.buttonItems);
    this.setActive(this.contentAccItems);
};

AccordionTabs.prototype.toggleAccordion = function(){
    this.buttonItems[this.currentTabId].classList.add(this.active);
    this.contentAccItems[this.currentTabId].classList.add(this.active);

};

AccordionTabs.prototype.setActive = function (itemsCollection) {
    itemsCollection.forEach(function (item, index) {
        if (index === this.currentTabId) {
            item.classList.add(this.active);
        } else {
            item.classList.remove(this.active);
        }
    }.bind(this));
};


AccordionTabs.prototype.handleClickAccordionOne = function (event) {
    event.target.classList.toggle(this.active);
    event.target.nextElementSibling.classList.toggle(this.active);
};

AccordionTabs.prototype.toggleAccordionOne = function(){
    this.buttonItemsOne[this.currentTabIdOne].classList.add(this.active);
    this.contentAccItemsOne[this.currentTabIdOne].classList.add(this.active);
};





AccordionTabs.prototype.delegateEvents = function () {
    this.AccordionItem.addEventListener('click', this.handleClickAccordion);
    for (var i = 0, l = this.AccordionItemOne.length; i < l; i++){
        this.AccordionItemOne[i].addEventListener("click", this.handleClickAccordionOne);
    }
          return this;
};


AccordionTabs.prototype.render = function () {
    this.delegateEvents();
    return this;
};
