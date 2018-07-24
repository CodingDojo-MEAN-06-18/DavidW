function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  var orders = []

  setTimeout(function() {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      }
    };

    orders.push(callback(warehouse[item]));
    }, deliveryTime);

    if (orders.length > 0){
        organized(orders);
    }
}

function organized(orders){
    for (item of orders){
        if (item === "brush"){
            callback(warehouse[item]);
        }
    }
    for (item of orders){
        if (item === "paint"){
            callback(warehouse[item]);
        }
    }
    return this
}

function receivedItem(item) {
  console.log(`Received ${ item.product } time to ${ item.directions() }`);
}

orderSupplies('paint', receivedItem);
orderSupplies('brush', receivedItem);
orderSupplies('paint', receivedItem);
orderSupplies('brush', receivedItem);
orderSupplies('brush', receivedItem);