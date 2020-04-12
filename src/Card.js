export default class Card {

    id =
    name = undefined;
    priority = {
        self: undefined,
        target: undefined,
    };


    constructor( name ) {
        this.name = name;
    }

}
