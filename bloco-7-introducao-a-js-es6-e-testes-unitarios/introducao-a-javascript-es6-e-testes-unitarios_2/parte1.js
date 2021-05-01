const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderDelivery = order.order['delivery']

const customerInfo = (order) => {
  console.log(`Olá ${orderDelivery['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${order.address['street']}, Nº ${order.address['number']}, AP ${order.address['apartment']}.`);
}

customerInfo(order);

const orderRequest = Object.assign({}, order.order['pizza'], order.order['drinks'])

const orderModifier = (order) => {
  const orderRequestKeys = Object.keys(orderRequest);
  let stringRequest = '';
  let total = orderDelivery['price'];
  for (let index = 0; index < orderRequestKeys.length; index += 1) {
    let item = orderRequest[orderRequestKeys[index]]
    if (index < orderRequestKeys.length - 1) {
      stringRequest += ` ${orderRequestKeys[index]},`
      total += item['amount'] * item['price']
    } else {
      stringRequest = stringRequest.slice(0, -1)
      stringRequest += ` e ${orderRequestKeys[index]}`
      total += item['amount'] * item['price']
    }

  }
  console.log(`Olá ${order['name']}, o total do seu pedido de ${stringRequest} é R$ ${total}.`)
}

orderModifier(order);

// console.log(Object.entries(order))