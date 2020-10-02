function getCurrentYear() {
  const date = new Date();

  return date.getFullYear();
}

module.exports = {
  getCurrentYear,
}