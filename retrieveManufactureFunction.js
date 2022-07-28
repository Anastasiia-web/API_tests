let jsonData = [{"name": "A", "produtcs": "food", "isAllowed": true}, {"name": "B", "products": "stationary", "isAllowed": false}, {"name": "C", "products": "furniture", "isAllowed": false}]

// retrieving from array by index
function getVendor() {
    console.log(jsonData);
    console.log(jsonData[0].name);  //   A
}

getVendor();

//=== function forEach()

function getVendor() {
    jsonData.forEach(j => {
            console.log(j.name);       //   A   B
   });
}

getVendor();

// === function for()

function getVendor() {
    for (var i=0; i < jsonData.length; i++) {
        console.log(jsonData[i].name);             //  A   B
    }
}

getVendor();

// function for + condition

function getVendor() {
    for (var i=0; i < jsonData.length; i++) {
        if (jsonData[i].name === "B") {
            let name = jsonData[i].name;
            if (jsonData.isallowed === true) {
                console.log(name);
            } else {
            console.log(name + " is not allowed!");             //    B is not allowed!
        }
    }
}
}
getVendor();

//==== from the video not working

// function getVendor() {

//     let manufactorer;
//     for (let filter of jsonData.filters) {
//         if (filter.name == "B") {
//             manufactorer = filter;
//         }
//     }
//     console.log(manufactorer);
// }

// getVendor();
//====