var Modal = function (rootElement) {
this.rootElement = rootElement;
this.buttonItem = this.rootElement.querySelector('.modal-button');
this.contentItem = this.rootElement.querySelector('.modal-content');
this.close = this.rootElement.querySelector('.close');
this.modalAnsverTextValue =  document.getElementById('modal-message-input-value');
this.buttonYes = this.rootElement.querySelector('.modal-button-yes');
this.buttonAnsverInput = document.getElementById('modal-message-input');
this.buttonYesInput = document.getElementById('modalAreaYes');
this.buttonNoInput = document.getElementById('modalAreaNo');
this.ansverUserText = document.getElementById('ansverUserText');
this.ansverUserTextCancel = document.getElementById('ansverUserTextCancel');
this.contentBlock = this.rootElement.querySelector('.modal-content-item');
this.activeItem = this.rootElement.classList.contains(this.classNamesActive.active);
this.modalBackground = this.rootElement.querySelector('.modal-background');
this.activeItem = this.rootElement.classList.contains(this.classNames.active);
this.modalOpen = this.modalOpen.bind(this);
this.modalClose = this.modalClose.bind(this);
this.modalAddBlock = this.modalAddBlock.bind(this);
this.buttonAddBlock = this.buttonAddBlock.bind(this);
this.readModalUserText = this.readModalUserText.bind(this);
this.readModalUserTextAnsver = this.readModalUserTextAnsver.bind(this);

}

Modal.eventOpen = 'onModalOpen';

Object.defineProperty(Modal.prototype, 'activeItem', {
    get: function () {
        return this._activeItem;
    },
    set: function (value) {

          this._activeItem = value;

     if(value){
         this.dispatch(Modal.eventOpen);
     }
                }
});



Modal.prototype.dispatch = function (eventType) {
    var event = new CustomEvent(eventType, {
        bubbles: true
    });

    event.currentModal = this;

    this.rootElement.dispatchEvent(event);

    return this;
};

// Вы мне тут конечно подсказывали, но тут у меня две проблемы - при любых раскладах у меня всегда кто-то другой инициировал событие, и вторая -
// я что-то не соображу как правильно прописать скрытие окна

document.addEventListener('onModalOpen', function(event){
    if(event.currentModal === this){

        alert('Это та же модалка что и стала инициатором этого события');
    }else{
        event.currentModal.contentItem.classList.remove(event.currentModal.classNamesActive.active);
        event.currentModal.modalBackground.classList.remove(event.currentModal.classNamesActive.active);
            alert('Это кто-то другой инициировал это событие, можно себя закрыть');
            console.log(event.currentModal);
    }
}.bind(this));



Modal.prototype.classNames =  {
    warning: 'warning',
    danger: 'danger',
    success: 'success',
    info: 'info'
};

Modal.prototype.classNamesActive =  {
    active: 'isActive'
};

Modal.prototype.modalAddBlock = function (contentBlock) {
    this.contentBlock.innerHTML = contentBlock;
};

Modal.prototype.buttonAddBlock = function (event) {
    this.buttonYes.innerHTML = event;
};

Modal.prototype.readModalUserText = function (event) {
    var elem = event.target;
      this.ansverUserText.innerHTML = 'Ответ: ' + elem.value;
};

Modal.prototype.readModalUserTextAnsver = function (){
       this.ansverUserText.innerHTML = 'Ответ: ' + this.buttonAnsverInput.value;
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
    this.buttonYes.addEventListener('click', this.modalClose);
    this.modalBackground.addEventListener('click', this.modalClose);
    this.buttonNoInput.addEventListener('click', this.modalClose);
    this.ansverUserTextCancel.addEventListener('click', this.modalClose);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            this.modalClose();
        }
    }.bind(this));
    this.buttonYesInput.addEventListener('click', this.readModalUserText);
    this.buttonNoInput.addEventListener('click', this.readModalUserText);
    this.modalAnsverTextValue.addEventListener('click', this.readModalUserTextAnsver);
    this.ansverUserTextCancel.addEventListener('click', this.readModalUserText);
    return this;



};



Modal.prototype.render = function () {
    return this.delegateEvents();
};


