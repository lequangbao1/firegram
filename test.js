function gen() {
  return 2;
}
const index = 1;

const a = {
  index,
  bndex: gen(),
};

console.log(a);
