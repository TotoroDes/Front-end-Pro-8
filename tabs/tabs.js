var TabMenu = function (rootElement, settings) {
    this.rootElement = rootElement;
    this.settings = mergeSettings(settings,this.defaultSettings);
    this.header = this.rootElement.querySelector('.tab');
    this.headerItems = [].slice.call(this.header.children);
    this.content = this.rootElement.querySelector('.tab-item');
    this.contentItems = [].slice.call(this.content.children);
    this.toggleTabs = this.toggleTabs.bind(this);
    this.handleClick = this.handleClick.bind(this);
};


TabMenu.prototype.defaultSettings = {
    currentTabId: 0,
    active: 'isActive'
};

function mergeSettings(){
    var result = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            result[key] =  arguments[i][key];
        }
    }
    return  result;
}

TabMenu.prototype.handleClick = function (event) {
    this.currentTabId = this.headerItems.indexOf(event.target);
    this.setActive(this.headerItems);
    this.setActive(this.contentItems);
};

TabMenu.prototype.toggleTabs = function(){
    this.headerItems[this.currentTabId].classList.add(this.settings.active);
    this.contentItems[this.currentTabId].classList.add(this.settings.active);
    this.header.addEventListener('click', this.handleClick);
};



Object.defineProperty(TabMenu.prototype, 'currentTabId', {
    get: function () {
        return this.settings.currentTabId;
    },
    set: function (value) {
        this.settings.currentTabId = (value <= 0)? 0 : Math.min(value, this.headerItems.length - 1);

        this.toggleTabs();
    }
});

TabMenu.prototype.setActive = function (itemsCollection) {
    itemsCollection.forEach(function (item, index) {
        if (index === this.currentTabId) {
            item.classList.add(this.settings.active);
        } else {
            item.classList.remove(this.settings.active);
        }
    }.bind(this));
};