const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () =>{
    test('1) Create an spiderman object', () => {
        // Aqui escribimos el codigo que queremos usar 
        //Queremos instanciar un objeto spiderman con esta informacion
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield",2, "Sony")

        //Validamos la clase con esta informacion
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    });
})