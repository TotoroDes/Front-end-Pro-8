var CarouselImage = function (rootElement) {
    this.rootElement = rootElement;
    this.item = this.rootElement.querySelector('#carousel');
    this.itemsImg = [].slice.call(this.item.children);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.width = 800;
    this.currentPosition = 0;
    this.currentSlide = 1;
    this.itemsImgLenght = (this.itemsImg.length)*this.width;
};

CarouselImage.prototype.next = function () {
    if(this.currentSlide > this.itemsImg.length-1){
        this.currentSlide = 0;
    }
    this.currentPosition =  Math.min(this.currentSlide * this.width, this.itemsImgLenght-this.width);
    this.item.style.right = this.currentPosition +'px';
    this.currentSlide++;
     // this.item.appendChild(this.itemsImg[this.currentItemId]);
    console.log(this.currentSlide);
      };


CarouselImage.prototype.prev = function () {
    if(this.currentSlide === 1){
        this.currentSlide = this.itemsImg.length;
    }
    //   this.item.insertBefore(this.itemsImg[this.itemsImg.length], this.item.firstElementChild);
    this.currentPosition = Math.max(this.currentPosition - this.width, 0);
    this.item.style.right = this.currentPosition +'px';
    this.currentSlide--;
    console.log(this.currentSlide);
         };

CarouselImage.prototype.delegateEvents = function () {
    this.rootElement.querySelector('#arrowNext').addEventListener('click', this.next);
    this.rootElement.querySelector('#arrowPrew').addEventListener('click', this.prev);
    return this;
};


CarouselImage.prototype.render = function () {
    this.delegateEvents();
    return this;
};
