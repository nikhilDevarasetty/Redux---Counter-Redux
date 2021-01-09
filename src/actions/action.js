function actions() {
  const increment = () => {
    return { type: "counter/incremented" };
  };
  const decrement = () => {
    return { type: "counter/decremented" };
  };
}

export default actions;
