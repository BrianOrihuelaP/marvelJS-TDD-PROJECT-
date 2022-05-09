class superhero{
    //Creando la clase superhero el cual necesito para cumplir la prueba
    constructor(name,alias,movieActor){
        //generando el constructor
        this.name = name
        this.alias = alias
        this.movieActor = movieActor
    }

    getinfo(){
        //creando un metodo que me arroja la info general
        return `Superhero: name ${this.name} ; alias: ${this.alias} ; movie actor: ${this.movieActor}`
    }
}
//exportando el modulo para poder ocuparlo en otros modulos js
module.exports = superhero