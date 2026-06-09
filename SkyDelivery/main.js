
let droneFleet = [
    { id: "D01", battery: 100, status: "available" },
    { id: "D02", battery: 15, status: "charging" },
    { id: "D03", battery: 80, status: "delivering" },
    { id: "D04", battery: 95, status: "available" },
    { id: "D05", battery: 40, status: "available" },
    { id: "D06", battery: 10, status: "charging" },
    { id: "D07", battery: 75, status: "delivering" },
    { id: "D08", battery: 60, status: "available" },
    { id: "D09", battery: 25, status: "available" },
    { id: "D10", battery: 5, status: "charging" },
    { id: "D11", battery: 90, status: "available" },
    { id: "D12", battery: 50, status: "delivering" },
    { id: "D13", battery: 30, status: "available" },
    { id: "D14", battery: 20, status: "charging" },
    { id: "D15", battery: 85, status: "available" },
    { id: "D16", battery: 70, status: "delivering" },
    { id: "D17", battery: 45, status: "available" },
    { id: "D18", battery: 12, status: "charging" },
    { id: "D19", battery: 98, status: "available" },
    { id: "D20", battery: 65, status: "available" },
    { id: "D21", battery: 35, status: "delivering" },
    { id: "D22", battery: 55, status: "available" },
    { id: "D23", battery: 80, status: "available" }
];

function addDrone(newDrone) {
    droneFleet.push(newDrone);
}
function findAvailableDrone() {
    return droneFleet.find(drone => drone.status === "available" && drone.battery > 20);
}
function updateDroneStatus(id, newStatus) {
    const drone = droneFleet.find(d => d.id === id);

    if (drone) {
        drone.status = newStatus;
    }
}
function dispatchOrder() {
    const drone = findAvailableDrone();

    if (drone) {
        drone.status = "delivering";
        console.log(`Đã điều phối Drone ${drone.id}`);
    } else {
        console.log("Không có Drone nào sẵn sàng!");
    }
}
function removeDrone(id) {
    const index = droneFleet.findIndex(
        drone => drone.id === id
    );

    if (index !== -1) {
        droneFleet.splice(index, 1);
    }
}
addDrone({ id: "D24", battery: 100, status: "available" });
console.log(droneFleet);
console.log(findAvailableDrone());
dispatchOrder();
console.log(droneFleet);
dispatchOrder();
console.log(droneFleet);
dispatchOrder();
console.log(droneFleet);
removeDrone("D10");
console.log(droneFleet.find(d => d.id === "D10"));
