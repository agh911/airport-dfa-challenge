class Airport {
    #capacity
    #planesList;

    constructor(capacity = 5) {
        this.#capacity = capacity;
        this.#planesList = [];
    }

    landPlane(plane) {
        this.#planesList.push(plane);
    }

    getPlanesList() {
        return this.#planesList
    }

    getCapacity() {
        return this.#capacity;
    }

    setCapacity(newCapacity) {
        this.#capacity = newCapacity;
    }
}

export default Airport;