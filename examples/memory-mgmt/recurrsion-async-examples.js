let counter = 0;
let go = true;
let iteration = 0;

const work = () => {
  if (counter++ > 1000) {
    counter = 0;
    iteration++;
    console.log(iteration * 1000);
  }
  if (go) setTimeout(work, 0);
};

// kick it off!
work();

// turn it off!
setTimeout(() => {
  go = false;
  console.log('off!');
}, 10000);
