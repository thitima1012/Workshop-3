class Resident {
    address = "";
    name = "";
    rent = "";
    isAvailable = true;

    constructor(address, name, rent) {
        this.address = address;
        this.name = name;
        this.rent = rent;
      }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address
    }

}

class Condo extends Resident {
    roomNumber = "";
    hasFitness = true;
    hasPool = true;

}

class TownHouse extends Resident {
    floor = 0;
}

class House extends Resident {
    area = 0;
}