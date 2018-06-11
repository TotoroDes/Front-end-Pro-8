var Cat = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
    this.text = ' say Meow';
};

Cat.prototype.say = function () {
    console.log(this.name + ' ' + this.text);
    this.mediator.sayText(this);
};


var Ghost = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
    this.text = 'say Buuuu!!!';
};

Ghost.prototype.say = function (){
    console.log(this.name + ' ' + this.text);
    this.mediator.sayText(this);
};


var Human = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
    this.text = ' say Hello';
};

Human.prototype.say = function () {
    console.log(this.name + ' ' + this.text);
       this.mediator.sayText(this);
};

var Mediator = {
    guys: [],
    addGuys: function (guy) {
        this.guys.push(guy);
    },
    sayText: function (guy) {
        for (var i = 0; i < this.guys.length; i++) {
            if (this.guys[i] !== guy) {
               console.log(this.guys[i].name + ' ' + this.guys[i].text);
            }
        }
    }
};
