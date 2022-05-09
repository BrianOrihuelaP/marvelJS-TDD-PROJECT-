const Superhero = require("./../app/Superhero")

//primero creamos nuestra prueba y como se dan los errores creamos el codigo que va en app

describe("Unit Testing for Superhero", () => 
{
    test('Test 1: Get a superhero', () => 
    {
        const ironman = new Superhero("Tony Stark","Iron Man","Robert Downey Jr.")
        expect(ironman.name).toBe("Tony Stark"); 
        expect(ironman.alias).toBe("Iron Man");
        expect(ironman.movieActor).toBe("Robert Downey Jr.");
        //expect(ironman.getinfo()).toBe("Superhero: name Tony S ; alias: Iron Man ; movie actor: Robert Downey Jr.")
        //la prueba anterior tiende a fallar dado que el nombre del hero no es el mismo 
        //que el que se manda a el constructor
        expect(ironman.getinfo()).toBe("Superhero: name Tony Stark ; alias: Iron Man ; movie actor: Robert Downey Jr.")
    });   
})

/* READ ABOUT TDD */
/* EL TDD es una metodologia de desarollo la cual consta de modelar pruebas unitarias, y partir del 
modelado de la prueba unitaria, ir resolviendo las fallas hasta que nuestro modelado del requerimiento 
funcional (prueba) se cumpla, entonces si estructurar de una manera mas optima nuestro proyecto */