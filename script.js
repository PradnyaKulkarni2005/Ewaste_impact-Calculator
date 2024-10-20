// Predefined data for e-waste items
const ewasteData = {
    smartphone: { weight: 180, recyclablePercent: 80, co2Saved: 11 },
    laptop: { weight: 2200, recyclablePercent: 85, co2Saved: 145 },
    desktopComputer: { weight: 7000, recyclablePercent: 85, co2Saved: 460 },
    tablet: { weight: 600, recyclablePercent: 75, co2Saved: 30 },
    smartwatch: { weight: 50, recyclablePercent: 60, co2Saved: 3 },
    keyboard: { weight: 400, recyclablePercent: 90, co2Saved: 20 },
    mouse: { weight: 100, recyclablePercent: 80, co2Saved: 5 },
    printer: { weight: 8000, recyclablePercent: 75, co2Saved: 340 },
    scanner: { weight: 4000, recyclablePercent: 75, co2Saved: 170 },
    lcdMonitor: { weight: 3500, recyclablePercent: 85, co2Saved: 200 },
    externalHardDrive: { weight: 500, recyclablePercent: 85, co2Saved: 30 },
    usbFlashDrive: { weight: 30, recyclablePercent: 75, co2Saved: 2 },
    ledTelevision: { weight: 10000, recyclablePercent: 85, co2Saved: 550 },
    videoGameConsole: { weight: 2000, recyclablePercent: 80, co2Saved: 110 },
    router: { weight: 300, recyclablePercent: 75, co2Saved: 15 },
    setTopBox: { weight: 1000, recyclablePercent: 75, co2Saved: 50 },
    digitalCamera: { weight: 350, recyclablePercent: 75, co2Saved: 17 },
    smallSpeakers: { weight: 700, recyclablePercent: 75, co2Saved: 35 },
    largeSpeakers: { weight: 2000, recyclablePercent: 80, co2Saved: 120 },
    projector: { weight: 5000, recyclablePercent: 85, co2Saved: 270 },
    wiredHeadphones: { weight: 100, recyclablePercent: 70, co2Saved: 5 },
    wirelessHeadphones: { weight: 150, recyclablePercent: 70, co2Saved: 7 },
    microwaveOven: { weight: 12000, recyclablePercent: 80, co2Saved: 700 },
    washingMachine: { weight: 60000, recyclablePercent: 85, co2Saved: 3500 },
    dishwasher: { weight: 50000, recyclablePercent: 85, co2Saved: 3000 },
    refrigerator: { weight: 70000, recyclablePercent: 80, co2Saved: 4000 },
    airConditioner: { weight: 40000, recyclablePercent: 85, co2Saved: 2500 },
    vacuumCleaner: { weight: 5000, recyclablePercent: 75, co2Saved: 280 },
    electricKettle: { weight: 1000, recyclablePercent: 80, co2Saved: 60 },
    toaster: { weight: 1500, recyclablePercent: 80, co2Saved: 75 },
    blender: { weight: 2000, recyclablePercent: 80, co2Saved: 110 },
    hairDryer: { weight: 800, recyclablePercent: 75, co2Saved: 40 },
    electricScooter: { weight: 12000, recyclablePercent: 85, co2Saved: 600 },
    hoverboard: { weight: 10000, recyclablePercent: 80, co2Saved: 500 },
    drones: { weight: 1500, recyclablePercent: 80, co2Saved: 75 },
    serverRackUnit: { weight: 20000, recyclablePercent: 85, co2Saved: 1500 },
    upsBatteryBackup: { weight: 5000, recyclablePercent: 80, co2Saved: 300 },
    wifiExtender: { weight: 200, recyclablePercent: 75, co2Saved: 10 },
    smartDoorbell: { weight: 250, recyclablePercent: 70, co2Saved: 12 },
    smartThermostat: { weight: 300, recyclablePercent: 75, co2Saved: 18 }
};

// Calculation function
function calculateImpact() {
    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const data = ewasteData[item];
    
    const totalWeight = data.weight * quantity;
    const recyclableWeight = (data.recyclablePercent / 100) * totalWeight;
    const co2Saved = data.co2Saved * quantity;

    // Set the content
    document.getElementById("type").innerText = `E-Waste Type: ${item}`;
    document.getElementById("weight").innerText = `Weight of Recyclable Material: ${recyclableWeight.toFixed(2)} kg`;
    document.getElementById("c").innerText = `Saved CO2 Emissions: ${co2Saved} kg`;

    // Show the result with transition
    const resultDiv = document.getElementById("result");
    resultDiv.style.opacity = "1"; // Make it visible
    resultDiv.style.transform = "scale(1)"; // Smooth pop-up effect
}
