type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'completed';
};

type Identifier = string | number;

let cashInRegister: number = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
let orderHistory: Order[] = [];

let menu:Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 12 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 14 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 16 },
  { id: nextPizzaId++, name: 'Veggie', price: 15 },
];

function addToArray<T>(array: T[], item: T): T[]{
  array.push(item)
  return array
}

addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Checken Bacon Ranch", price: 16 })
addToArray<Order>(orderHistory, { id: nextPizzaId++, pizza:menu[2],status:"completed"})


function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
 
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: 'Chicken Bacon Ranch', price: 18 });
addNewPizza({ name: 'BBQ CHicken', price: 16 });
addNewPizza({ name: 'Spicy Sausage', price: 15 });

export function getPizzaDetail(identifier: Identifier): Pizza | undefined {
  if (typeof identifier === 'string') {
   return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === 'number') {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      'Parameter `identifier` mujst be either a string or a number '
    );
  }
}

function placeOrder(pizzaName: string) :Order | undefined{
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.log(`${pizzaName} does not exist in the menu `);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: 'ordered',
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) :Order | undefined{
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.log(`Order ${orderId} does not exist`);
    return;
  }
  order.status = 'completed';
  return order;
}


placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log('Menu:', menu);
console.log('Cash in register:', cashInRegister);
console.log('order queue:', orderHistory);

