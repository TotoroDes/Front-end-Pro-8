var Cat = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
};

Cat.prototype.say = function () {
    console.log(this.name + ' say Meow');
    this.mediator.sayText(this);
};


var Ghost = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
};

Ghost.prototype.say = function () {
    console.log(this.name + ' say Buuuu!!!');
    this.mediator.sayText(this);
};


var Human = function (mediator, name) {
    this.mediator = mediator;
    this.name = name;
};

Human.prototype.say = function () {
    console.log(this.name + ' say Hello');
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
                this.guys[i].say();
            }
        }
    }
};
