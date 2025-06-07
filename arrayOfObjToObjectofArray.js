var items = [
    { name: 'apple', category: 'fruit' },
    { name: 'banana', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'broccoli', category: 'vegetable' }
];

var grouped = {};

for (var i = 0; i < items.length; i++) {
    var category = items[i].category;
    var name = items[i].name;

    if (!grouped[category]) {
        grouped[category] = [];
    }
    grouped[category].push(name);
}

console.log(grouped);



