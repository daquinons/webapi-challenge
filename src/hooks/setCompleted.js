module.exports = context => {
  if (!context.data.completed) {
    context.data.completed = false;
  }
};
