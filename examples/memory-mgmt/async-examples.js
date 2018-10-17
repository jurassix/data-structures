let counter = 0;
let total = 0;
let go = true;

const work = callback => {
  total++;
  counter++;
  if (go) {
    if (counter > 500) {
      console.log(total, counter);
      counter = 0; // reset counter
      return setTimeout(() => work(callback), 0); // reset call stack
    } else {
      return work(callback);
    }
  } else {
    return callback(total);
  }
};

// kick it off!
work(t => console.log(`total: ${t}`));

// turn it off!
setTimeout(() => {
  go = false;
  console.log('off!');
}, 10000);
