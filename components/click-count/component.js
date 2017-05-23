module.exports = {
  onCreate () {
    this.state = { count: 0 };
  },
  increment () {
    this.state.count++;
  }
};
