const set = new WeakSet();
let go = true;

const work = () => {
  for (let i = 0; i < 100000; i++) {
    set.add({});
  }
  console.log(0);

  for (let i = 0; i < 100000; i++) {}
  console.log(1);

  if (go) setTimeout(work, 0);
};

// kick it off!
work();
