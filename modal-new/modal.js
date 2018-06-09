var Modal = function (rootElement) {
    this.rootElement = rootElement;
    this.contentBlock = this.rootElement.querySelector('.modal-block');
    this.closeButton = this.rootElement.querySelector('.close');
    this.buttonModalOpen = this.rootElement.querySelector('.modal-button');
    this.modalBackground = this.rootElement.querySelector('.modal-background');
    this.buttonModalYes = this.rootElement.querySelector('.modal-button-yes');
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
};

Modal.prototype.isOpen = {
    active: 'isOpen'
};


Modal.prototype.modalClose = function () {
    this.contentBlock.classList.remove(this.isOpen.active);

};

Modal.prototype.modalOpen = function () {
    this.contentBlock.classList.add(this.isOpen.active);

};

Modal.prototype.delegateEvents = function () {
    this.buttonModalOpen.addEventListener('click', this.modalOpen);
    this.closeButton.addEventListener('click', this.modalClose);
    this.modalBackground.addEventListener('click', this.modalClose);
    this.buttonModalYes.addEventListener('click', this.modalClose);
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


var ModalConfirm = function (rootElement) {
    Modal.apply(this, arguments);
    this.buttonCancel = this.rootElement.querySelector('.modal-button-cancel');
    this.ansverBlock = document.querySelector('.ansverUserText');
    this.readModalButton = this.readModalButton.bind(this);
};

ModalConfirm.prototype = Object.create(Modal.prototype);
ModalConfirm.prototype.constructor = ModalConfirm;


ModalConfirm.prototype.readModalButton = function () {

};


ModalConfirm.prototype.delegateEvents = function() {
      Modal.prototype.delegateEvents.apply(this);
    this.buttonCancel.addEventListener('click', this.modalClose);
};


var ModalQestion = function (rootElement) {
    Modal.apply(this, arguments);
    this.ansverText = document.querySelector('.modal-message-input');
    this.readModalUserText = this.readModalUserText.bind(this);
};

ModalQestion.prototype = Object.create(Modal.prototype);
ModalQestion.prototype.constructor = ModalQestion;


ModalQestion.prototype.readModalUserText = function () {
     this.ansverBlock.innerHTML = 'Ответ: ' + this.ansverText.value;
};

ModalQestion.prototype.delegateEvents = function() {
    Modal.prototype.delegateEvents.apply(this);
    this.buttonModalYes.addEventListener('click', this.readModalUserText);
};
