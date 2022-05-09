class superhero{
    constructor(name,alias,movieActor){
        this.name = name
        this.alias = alias
        this.movieActor = movieActor
    }

    getinfo(){
        return `Superhero: name ${this.name} ; alias: ${this.alias} ; movie actor: ${this.movieActor}`
    }
}

module.exports = superhero