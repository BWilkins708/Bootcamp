class Airport {
    static airports = []

    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }

    land(plane) {
        this.planes.push(plane)
    }
}