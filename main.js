// task1

function createShoppingCart() {
   
    let cart = [];
  
    return {
      addItem: function(itemName, price) {
        cart.push({ itemName, price });
      },
      
      removeItem: function(itemName) {
        cart = cart.filter(item => item.itemName !== itemName);
      },
      
      getTotal: function() {
        return cart.reduce((total, item) => total + item.price, 0);
      },
      
      showCart: function() {
        return cart.map(item => `${item.itemName}: $${item.price.toFixed(2)}`).join('\n');
      }
    };
  }
  

  const myCart = createShoppingCart();
  myCart.addItem('Apple', 1.5);
  myCart.addItem('Orange', 2);
  console.log(myCart.showCart()); 
  console.log('Total: $' + myCart.getTotal());  
  myCart.removeItem('Apple');
  console.log(myCart.showCart());  

  



// task3
function createEventLogger() {
    let eventLog = []; 
  
    return {
      logEvent: function(eventName) {
        eventLog.push(eventName); 
      },
      getEvents: function() {
        return eventLog; 
      },
      clearLog: function() {
        eventLog = []; 
      }
    };
  }
  
  const logger = createEventLogger(); 
  
  logger.logEvent('User logged in');
  logger.logEvent('File uploaded'); 
  
  console.log(logger.getEvents()); 
  logger.clearLog();
  console.log(logger.getEvents()); 
  




// task4
function createCountdownTimer() {
    let time = 0; 
    let intervalId = null; 
  
    return {
      start: function(seconds) {
        if (intervalId !== null) {
          clearInterval(intervalId); 
        }
        time = seconds;
        intervalId = setInterval(() => {
          if (time > 0) {
            time--;
            console.log(`Qalan vaxt: ${time} saniyə`);
          } else {
            clearInterval(intervalId); 
            console.log("Geri sayım bitdi!");
          }
        }, 1000); 
      },
      getTime: function() {
        return time; 
      },
      stop: function() {
        if (intervalId !== null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      reset: function(seconds) {
        this.stop();
        time = seconds; 
        console.log(`Taymer ${seconds} saniyəyə sıfırlandı.`);
      }
    };
  }
  
  const timer = createCountdownTimer();
  
  timer.start(10); 
  setTimeout(() => {
    console.log("Qalan vaxt: ", timer.getTime()); 
    timer.stop();
  }, 5000);
  
  setTimeout(() => {
    timer.reset(20); 
    timer.start(20); 
  }, 7000);
  



// task5
function createBankAccountWithInterest() {
    let balance = 0; 
    
    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          console.log(`${amount} məbləğ hesaba yatırıldı. Mövcud balans: ${balance}`);
        } else {
          console.log("Yatırılan məbləğ müsbət olmalıdır.");
        }
      },
      withdraw: function(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount; 
          console.log(`${amount} məbləğ hesabdan çıxarıldı. Mövcud balans: ${balance}`);
        } else {
          console.log("Mövcud balansdan çox və ya mənfi məbləğ çıxara bilməzsiniz.");
        }
      },
      checkBalance: function() {
        return `Cari balans: ${balance}`;
      },
      addInterest: function(rate) {
        if (rate > 0) {
          let interest = (balance * rate) / 100;
          balance += interest;
          console.log(`Balansınıza ${rate}% faiz əlavə edildi. Yeni balans: ${balance}`);
        } else {
          console.log("Faiz dərəcəsi müsbət olmalıdır.");
        }
      }
    };
  }
  
  const account = createBankAccountWithInterest();
  
  account.deposit(1000);
  account.addInterest(5); 
  console.log(account.checkBalance()); 
  account.withdraw(500);
  console.log(account.checkBalance()); 
  