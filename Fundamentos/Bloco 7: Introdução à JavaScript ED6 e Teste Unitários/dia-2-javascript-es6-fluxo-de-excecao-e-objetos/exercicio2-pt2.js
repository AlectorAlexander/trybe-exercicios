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
        marguerita: {
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
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let deliveryPerson = order.order.delivery.deliveryPerson
    let name = order.name
    let phoneNumber = order.phoneNumber
    let address = `${order.address.street}, ${order.address.number}, AP: ${order.address.apartment} `
  console.log(`Olá ${deliveryPerson}, entrega para ${name}, telefone: ${phoneNumber}, ${address}`);
  }
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva'
    let deliveryPerson = order.order.delivery.deliveryPerson
    let pizzaErefri = `${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} `
    order.order.payment = '50'
    let payment = order.order.payment
  console.log(`Olá ${deliveryPerson}, o total de seu pedido de ${pizzaErefri} é R$${payment},00`)
  }
  
  orderModifier(order);