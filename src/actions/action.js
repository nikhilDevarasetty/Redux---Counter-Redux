// export const increment = () => {
//   return { type: "counter/incremented" };
// };
// export const decrement = () => {
//   return { type: "counter/decremented" };
// };

const increment = () => ({
  type: "increment",
});

const decrement = () => ({
  type: "decrement",
});

export { increment, decrement };
