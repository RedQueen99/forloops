
function parseCSV(csv) {
    const rows = csv.trim().split("\n").map(row => row.split(","));
    const numberOfColumns = rows[0].length; 
    console.log(`Number of columns: ${numberOfColumns}`);
    return rows;
}


function csvToObjects(rows) {
    const headers = rows[0].map(header => header.toLowerCase());
    const result = rows.slice(1).map(row => {
        let obj = {};
        row.forEach((value, index) => {
            obj[headers[index]] = value;
        });
        return obj;
    });
    return result;
}


function manipulateData(data) {
    
    data.pop();

    
    data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

    
    data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    
    let totalAge = 0;
    data.forEach(item => {
        totalAge += parseInt(item.age);
    });
    const averageAge = totalAge / data.length;
    console.log(`Average Age: ${averageAge}`);

    return data;
}


function objectsToCSV(data) {
    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(","),
        ...data.map(row => headers.map(header => row[header]).join(","))
    ].join("\n");

    return csv;
}


function processCSV() {
    const csvInput = document.getElementById("csvInput").value;

    
    const rows = parseCSV(csvInput);
    console.log("2D Array: ", rows);

    
    let data = csvToObjects(rows);
    console.log("Array of Objects: ", data);

    
    data = manipulateData(data);
    console.log("Manipulated Data: ", data);

    
    const newCSV = objectsToCSV(data);
    console.log("Final CSV: ", newCSV);

    
    document.getElementById("output").innerText = `Average Age: ${data.reduce((sum, obj) => sum + parseInt(obj.age), 0) / data.length}\n\nNew CSV:\n${newCSV}`;
}
