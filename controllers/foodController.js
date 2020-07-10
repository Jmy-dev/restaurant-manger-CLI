const mongoose = require('mongoose');
const Food     = require('../models/food');

const addFood = async (foodInfo)=>{
    const newFood = await Food.create(foodInfo)
    .then(()=> console.info("NEW FOOD WAS ADDED!"));
   }

const searchHelper = async (foodName) =>{
     const search = new RegExp(foodName.name , 'i');
     const matchedFood = await Food.findOne({name: search})
      .lean()
      .exec()
     return matchedFood;
   }
   
   
   const findFood = async (name)=>{
       const search = new RegExp(name.name , 'i');
       const matchedFoods = await Food.find({name: search})
       .lean()
       .exec()
       console.info(matchedFoods)  ;
       console.info(`${matchedFoods.length} matches`);
       return matchedFoods;
   }
   
   const deleteFood= async(name) =>{
       searchHelper(name)
       .then(async food =>{
           await Food.deleteOne({name: food.name});
           console.info(`${food.name} was deleted!`) 
       })
       .catch(e => console.error(e))
   }
   
   const updateFood = async (name , newInfo) =>{
       searchHelper(name)
       .then(async food =>{
          await Food.updateOne(food , newInfo)
         .then(newFood=>{
            console.info(`${food.name} was updated!`)
         })
         .catch(e => console.error('There is no food with that Name'))
         
       })
       .catch(e => console.error(e))
   }
   const listMenu = async () =>{
       const menu = await Food.find({})
       .lean()
       .exec()
   
       console.info(menu) ;
       console.info(`${menu.length} food was founded! `)
   }

  const handleOrder = async (order) =>{
      const foodName = order.food;
      const receipt  = {};
       Food.findOne({name:foodName})
      .then(food => {
          receipt.food = food.name ;
          receipt.cost = food.price;
          console.log(receipt);
          console.log('this is your receipt')
      })
      .catch(e => console.error( 'there is no food with that name please check out the menu again'));
      
  }


   
   module.exports = {
    addFood ,
    findFood,
    deleteFood,
    updateFood,
    listMenu,
    handleOrder
}