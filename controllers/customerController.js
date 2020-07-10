const mongoose = require('mongoose');
const Customer = require('../models/customer');



const addCustomer = async (customer)=>{
 const newCustomer = await Customer.create(customer)
 .then(()=> console.info("NEW CUSTOMER WAS ADDED!"));
}
const searchHelper = async (name) =>{
    const search = new RegExp(name , 'i');
    const matchedCustomer = await Customer.findOne({$or:[{firstName: search , lastName: search}]})
    .lean()
    .exec()
    return matchedCustomer;
}


const findCustomer = async (name)=>{
    const search = new RegExp(name , 'i');
    const matchedCustomers = await Customer.find({$or:[{firstName: search , lastName: search}]})
    .lean()
    .exec()
    console.info(matchedCustomers)  ;
    console.info(`${matchedCustomers.length} matches`);
    return matchedCustomers;

}

const deleteCustomer = async(name) =>{
    searchHelper(name)
    .then(async customer =>{
        await Customer.deleteOne({firstName: customer.firstName});
        console.info(`${customer.firstName} was deleted!`) 
    })
    .catch(e => console.error(e))
}

const updateCustomer = async (name , newInfo) =>{
    searchHelper(name)
    .then(async customer =>{
      const newCustomer =  await Customer.updateOne(customer , newInfo);
      console.info(`${customer.firstName} was updated!`)
    })
    .catch(e => console.error(e))
}
const listCustomers = async () =>{
    const customers = await Customer.find({})
    .lean()
    .exec()

    console.info(customers) ;
    console.info(`${customers.length} customers`)
}

module.exports = {
    addCustomer ,
    findCustomer,
    deleteCustomer,
    updateCustomer,
    listCustomers
}