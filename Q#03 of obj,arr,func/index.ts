// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

// 1. Define an array named inventory to store product information.
type Product={
    name:string,
    model:string,
    cost:number,
    quantity:number,
}
const inventory:Product[]=[];

// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.

const product1:Product={

name: "iphone 15 pro",
    model: "MTLGLLA/A",
    cost: 345000,
    quantity: 10,
}
const product2:Product={

    name: "samsung QLED ",
        model: "QN75Q90R",
        cost: 599999,
        quantity: 15,
    };
    const product3:Product={

            name: "REDMi NOTE12",
            model: "RED-N12",
            cost: 54000,
            quantity: 20,
        };

 // 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1,product2,product3)

//4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
console.log("quantity of product3",inventory[2].quantity)


// lets make product 4
const product4:Product={
    name:"tablet",
    model:"QRE45RFTY-P",
    cost:40000,
    quantity:30
}

//adding more product to the inventory
inventory.push(product4)


//accessing more elements within the inventory array to understand
// how to manage product data.


for (let i = 0; i < inventory.length; i++) {
    const product = inventory[i];
    console.log(`Product ${i + 1}: ${product.name} - Model: ${product.model}, Cost: $${product.cost}, Quantity: ${product.quantity}`);
}



