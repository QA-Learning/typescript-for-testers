interface Fruit {
    color: string;
    quantity: number;
}

interface Vegetable {
    color: string;
    taste: string;
}

/**
 * User Defined Type Guard!
 */
function isFruit(arg: any): arg is Fruit {
    return arg.quantity !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
function doStuff(arg: Fruit | Vegetable) {
    if (isFruit(arg)) {
        console.log(arg.quantity); // OK
        // console.log(arg.taste); // Error!
    }
    else {
        // console.log(arg.quantity); // Error!
        console.log(arg.taste); // OK
    }
}

doStuff({ color: 'Red', quantity: 9866 });
doStuff({ color: 'Yellow', quantity: undefined });
doStuff({ color: 'Green', taste: 'Sour' });