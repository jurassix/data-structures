import faker from 'faker';

const emails = () => {
  const list = [];
  for (let i = 0; i < 10000; i++) list.push(faker.internet.email());
  return list;
};

export default emails;
