const datasetInfo = [
    ["FIREBALL WHSKY 50ML", [0, 0, 5, 0, 10, 2, 0, 0, 0, 17], "rgba(255, 99, 132, 0.7)"],
    ["G87E10S", [598.275, 0, 720.177, 25.87, 601.023, 110.657, 397.249, 80.165, 0, 2533.416], "rgba(54, 162, 235, 0.7)"],
    ["HOT DOG FCS", [4, 3, 12, 0, 8, 3, 7, 2, 0, 39], "rgba(255, 206, 86, 0.7)"],
    ["KK AST FILL", [1, 0, 0, 0, 7, 0, 0, 0, 1, 8], "rgba(75, 192, 192, 0.7)"],
    ["KOOLEE", [5, 5, 3, 0, 9, 4, 6, 2, 5, 35], "rgba(153, 102, 255, 0.7)"],
    ["MEDIUM FTN", [12, 5, 14, 0, 15, 5, 18, 3, 5, 77], "rgba(255, 159, 64, 0.7)"],
    ["No Lead Plus", [139.899, 77.925, 110.151, 32.476, 135.335, 102.781, 57.718, 0, 59.771, 716.056], "rgba(199, 199, 199, 0.7)"],
    ["REESES 1.5OZ REG", [0, 0, 1, 0, 4, 0, 0, 0, 0, 5], "rgba(83, 102, 255, 0.7)"],
    ["SLC PZ PEPPRNI 13IN FCS", [14, 7, 5, 0, 2, 2, 4, 0, 0, 34], "rgba(255, 99, 255, 0.7)"],
    ["WILD TURKEY AM HNY 50ML", [0, 0, 0, 0, 11, 0, 0, 0, 0, 11], "rgba(100, 150, 0, 0.7)"]
];

const datasets = datasetInfo.map(([label, data, backgroundColor]) => ({ label, data, backgroundColor }));

// Export the datasets so it can be used in other files
export { datasets };

