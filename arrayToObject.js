const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'banana', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'broccoli', category: 'vegetable' }
];

const grouped = {};
items.forEach(({name, category})=>{
    (grouped[category] ??=[]).push(name)
})

console.log(grouped);