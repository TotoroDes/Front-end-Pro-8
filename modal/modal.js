var Modal = function (rootElement) {
this.rootElement = rootElement;
this.buttonItem = this.rootElement.querySelector('.modal-button');
this.contentItem = this.rootElement.querySelector('.modal-content');
this.close = this.rootElement.querySelector('.close');
this.buttonOk = this.rootElement.querySelector('.modal-button-ok');
this.contentBlock = this.rootElement.querySelector('.modal-content-item');
this.activeItem = this.rootElement.classList.contains(this.classNamesActive.active);
this.modalBackground = this.rootElement.querySelector('.modal-background');
this.modalOpen = this.modalOpen.bind(this);
this.modalClose = this.modalClose.bind(this);
this.modalAddBlock = this.modalAddBlock.bind(this);
this.assignClassNames = this.assignClassNames.bind(this);

};

Object.defineProperty(Modal.prototype, 'activeItem', {
    get: function () {
        return this._activeItem;
    },
    set: function (value) {
          this._activeItem = value;
          this.assignClassNames()
    }
})

Modal.prototype.assignClassNames = function () {
    /*   this.contentItem.classList.toggle(this.classNamesActive.active, this.activeItem);
      this.modalBackground.classList.add(this.classNamesActive.active, this.activeItem);
      return this; */
  };

Modal.prototype.classNames =  {
    warning: 'warning',
    danger: 'danger',
    success: 'success',
    info: 'info'
};

Modal.prototype.classNamesActive =  {
    active: 'isActive'
};

Modal.prototype.modalAddBlock = function (contentBlock) { // не арбайтен
    this.contentBlock.innerHTML = contentBlock;
};

Modal.prototype.modalClose = function () {
    this.contentItem.classList.remove(this.classNamesActive.active);
    this.modalBackground.classList.remove(this.classNamesActive.active);
};

Modal.prototype.modalOpen = function () {
    this.contentItem.classList.add(this.classNamesActive.active);
    this.modalBackground.classList.add(this.classNamesActive.active);
};

Modal.prototype.delegateEvents = function () {
    this.buttonItem.addEventListener('click', this.modalOpen);
    this.close.addEventListener('click', this.modalClose);
    this.buttonOk.addEventListener('click', this.modalClose);
    this.modalBackground.addEventListener('click', this.modalClose);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            this.modalClose();
        }
    }.bind(this));

    return this;

};



Modal.prototype.render = function () {
    return this.delegateEvents();
};
