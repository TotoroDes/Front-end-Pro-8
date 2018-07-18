describe('Mediator', function () {
    it('should be defined', function () {
        expect(Mediator).toBeDefined();
    });

    beforeAll(function () {
        this.mediator = new Mediator();
    });


    describe('mediator function: ', function () {

        it('should be defined', function () {
            expect(this.mediator.subscribe).toBeDefined();
            expect(typeof this.mediator.subscribe).toBe('function');
            expect(this.mediator.publish).toBeDefined();
            expect(typeof this.mediator.publish).toBe('function');
            expect(this.mediator.unsubscribe).toBeDefined();
            expect(typeof this.mediator.unsubscribe).toBe('function');
        });
    });


    describe('When mediator was init', function () {

        it('channels must be empty', function () {
            expect(this.mediator.channels).toEqual({});
        });

    });


    describe('Subscribe to channel', function () {

        it('when subscribing to an event', function () {
            this.mediator.subscribe('Event', callback);
            expect(Object.keys(this.mediator.subscribe).length).toEqual(1);
        });

    });

});