const statusEnum = {
    CREATING : 1,
    ASSESSABLE : 2
}

class CalculadoraBasica {

    constructor() {
        this.expression = '';
        this.status = statusEnum.CREATING;
    }
}