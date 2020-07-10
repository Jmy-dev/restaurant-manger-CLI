const {prompt}  = require('inquirer');

const addHelper = [
    {
        name:'firstName',
        message:' first name'
    },
    {
        name: 'lastName',
        message: 'last name'
    },
    {
        name:'phoneNumber',
        message:'phone number'
    },
    {
        name:'email' ,
        message: "email"
    }

];

const customerFinder = [
    {
     name: 'name',
     message: 'Enter the customer name'
    }
];
const foodFinder = [
    {
     name: 'name',
     message: 'Enter the food name'
    }
];


const foodOrganize = [
    {
        name:'name',
        message:'Enter food Name'
    },
    {
        name:'categorie',
        message: 'Enter food categorie'
    },
    {
        name: 'price' ,
        message: 'Enter the price' 

    }
];

const order = [
    {
        name:'food',
        message:'Enter the food name '
    }
]

module.exports = {
    addHelper,
    customerFinder ,
    foodFinder,
    foodOrganize ,
    order
};