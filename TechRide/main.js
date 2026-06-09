class Vehicle {
    constructor(id,driverName,vehicleType, status = "Active"){
        this.id = id ;
        this.driverName = driverName ;
        this.vehicleType = vehicleType ;
         this.status = status;
    }   

    calculateFare(distance) {
        return distance * 5000;
    }


     updateStatus(newStatus) {
        this.status = newStatus;
    }
}
let vehicle1 = new Vehicle(
    "V01",
    "Nguyen Van A",
    "Motorbike"
);

let vehicle2 = new Vehicle(
    "V02",
    "Tran Thi B",
    "Car",
    "Maintenance"
);

let vehicle3 = new Vehicle(
    "V03",
    "Le Van C",
    "Truck"
);

console.log(vehicle1.calculateFare(10));
console.log(vehicle2.calculateFare(15));
console.log(vehicle3.calculateFare(20));

vehicle1.updateStatus("Busy");

console.log(vehicle1.status);
console.log(vehicle2.status);
console.log(vehicle3.status);