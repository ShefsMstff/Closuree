// task1
// function createShoppingCart() {
//   let cart = [];
  
//   return {
//     addItem: (itemName, price) => cart.push({ itemName, price }),
//     removeItem: (itemName) => cart = cart.filter(item => item.itemName !== itemName),
//     getTotal: () => cart.reduce((total, item) => total + item.price, 0),
//     Cart: () => cart.map(item => `${item.itemName}: $${item.price.toFixed(2)}`).join('\n')
//   };
// }

// const myCart = createShoppingCart();
// myCart.addItem('bag', 50);
// myCart.addItem('dress', 300);
// console.log(myCart.Cart());
// console.log('Total: $' + myCart.getTotal());
// myCart.removeItem('bag');
// console.log(myCart.Cart());


  
// // task4
// function createTimer() {
//   let time = 0; 
// let interval

//   return {
//       start: seconds => {
//           if (interval) clearInterval(interval);
//           time = seconds;
//           interval = setInterval(() => {
//               if (time > 0) {
//                   time--;
//                   console.log(` ${time} saniyə`);
//               } else {
//                   clearInterval(interval);
//                   console.log("vaxt bitdi");
//               }
//           }, 1000);
//       },
//       getTime: () => time,
//       stop: () => {
//           if (interval) {
//               clearInterval(interval);
//               interval = null;
//           }
//       },
//       reset: seconds => {
//           this.stop();
//           time = seconds; 
//           console.log(`vaxt ${seconds} resetlendi.`);
//       }
//   };
// }

// const timer = createTimer();

// timer.start(10); 
// setTimeout(() => {
//   console.log("Qalan vaxt: ", timer.getTime()); 
//   timer.stop();
// }, 5000);

// setTimeout(() => {
//   timer.reset(15); 
//   timer.start(15); 
// }, 8000);


  
// // task5
// function createBankAccount() {
//     let balance = 0; 
    
//     return {
//       deposit: function(amount) {
//         if (amount > 0) {
//           balance += amount;
//           console.log(`${amount} pul kocuruldu.Balans: ${balance}`);
//         } 
//       },
//       withdraw: function(amount) {
//         if (amount > 0 && amount <= balance) {
//           balance -= amount; 
//           console.log(`${amount} pul çıxarıldı.  balans: ${balance}`);
//         } 
//       },
//       checkBalance: function() {
//         return `Cari balans: ${balance}`;
//       },
//       addInterest: function(rate) {
//         if (rate > 0) {
//           let interest = (balance * rate) / 100;
//           balance += interest;
//           console.log(`Balansınıza ${rate}% faiz əlavə edildi. Yeni balans: ${balance}`);
//         } 
//       }
//     };
//   }
  
//   const account = createBankAccount();
//  account.deposit(500);
//   account.addInterest(3); 
//   console.log(account.checkBalance()); 
//   account.withdraw(200);
//   console.log(account.checkBalance()); 
  