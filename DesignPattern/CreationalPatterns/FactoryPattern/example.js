class IceCreamFactory {
    constructor() {
        this.createIcecream = function(flavour) {
            let iceCream;
            if(flavour === 'chocalate') {
                iceCream = new Chocalate();
            }else if(flavour === 'mint') {
                iceCream = new Mint();
            }else if(flavour === 'strawberry') {
                iceCream = new Strawberry();
            }
            return iceCream;
        }
    }
}

class Chocalate {
    constructor() {
        this.icecreamFlavour = 'chocalate';
        this.message = function() {
            return `You choose the ${this.icecreamFlavour} flavour.`;
        }
    }
}

class Mint {
    constructor() {
        this.icecreamFlavour = 'mint';
        this.message = function() {
            return `You choose the ${this.icecreamFlavour} flavour.`;
        }
    }
}

class Strawberry {
    constructor() {
        this.icecreamFlavour = 'strawberry';
        this.message = function() {
            return `You choose the ${this.icecreamFlavour} flavour.`;
        }
    }
}

// creating objects
const iceCreamFactory = new IceCreamFactory();

const chocalate = iceCreamFactory.createIcecream('chocalate');
const mint = iceCreamFactory.createIcecream('mint');
const strawberry = iceCreamFactory.createIcecream('strawberry');
