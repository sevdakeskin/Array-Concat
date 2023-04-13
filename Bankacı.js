let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"];
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma","Semih"];
let yeniArray = array1.concat(array2); //iki arrayi birleştirdim

// çift olanları belirledim.
let tek = yeniArray.filter(function (item,index) {
    return yeniArray.indexOf(item) === index;   
});

// öğeleri sıraladım

let sortedYeniArray = tek.sort();



console.log(sortedYeniArray);


