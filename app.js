const program = require('commander');
const connect = require('./connect');
const {prompt}= require('inquirer');
const {addHelper , customerFinder,foodFinder, foodOrganize ,order} = require('./prompts');
const {addCustomer ,
     findCustomer,
     deleteCustomer,
     updateCustomer ,
     listCustomers
    }
     = require('./controllers/customerController');
 const {addFood ,
        findFood,
        deleteFood,
        updateFood ,
        listMenu,
        handleOrder
       }
        = require('./controllers/foodController');


connect( )
.then( connection =>{
  })
.catch(e => console.error(e));

program
.version('1.0.0')
.description('A restaurant  management cli program')


program
.command('add')
.alias('a')
.description('add a customer')
.action(  ()=>{
   prompt(addHelper)
   .then( async customer =>{
     return  await addCustomer(customer);
   })
})

program
.command('update')
.alias('u')
.description('update a customer')
.action(  ()=>{
   prompt(findHelper)
   .then( async customerName =>{
     return  await prompt(addHelper) 
     .then(async newCustomer =>{
         await updateCustomer(customerName , newCustomer);
     });
   })
})

program
.command('find')
.alias('f')
.description('find a customer')
.action( ()=>{
  prompt(findHelper)
  .then( async customerName =>{
     return  await findCustomer(customerName);
  })
})

program
.command('delete')
.alias('d')
.description('delete a customer')
.action( ()=>{
  prompt(findHelper)
  .then( async customerName =>{
     return  await deleteCustomer(customerName);
  })
})
program
.command('list')
.alias('l')
.description(' list all customers')
.action( async ()=>{
 await listCustomers();
})

program
.command('insert-food')
.alias('i')
.description('insert a new food')
.action( ()=>{
    prompt(foodOrganize)
    .then( foodInfo =>{
     addFood(foodInfo);
    })
})
program
.command('find-food')
.alias('FF')
.description('find a food')
.action( ()=>{
  prompt(foodFinder)
  .then( async foodName =>{
     return  await findFood(foodName);
  })
})

program
.command('update-food')
.alias('UF')
.description('update a food')
.action(  ()=>{
   prompt(foodFinder)
   .then( async foodName =>{
     return  await prompt(foodOrganize) 
     .then(async newFood =>{
         await updateFood(foodName , newFood);
     });
   })
})

program
.command('delete-food')
.alias('DF')
.description('delete a food')
.action( ()=>{
  prompt(foodFinder)
  .then( async foodName =>{
     return  await deleteFood(foodName);
  })
})

program
.command('menu')
.alias('m')
.description(' list all menu')
.action( async ()=>{
 await listMenu();
})

program
.command('order')
.alias('o')
.description(' order your food')
.action(async ()=>{
    prompt(order)
    .then( async order => {
        await handleOrder(order);
    })
    .catch(e => console.error(e))
})

program.parse(process.argv);