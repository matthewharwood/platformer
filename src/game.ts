const parseLevelToRows = plan => {
  return plan
    .trim()
    .split("\n")
    .map(l => [...l]);
};

const getGameHeight = x => {
  return x.length;
};

const getGameWidth = x => {
  return x[0].length;
};

export { parseLevelToRows, getGameHeight, getGameWidth };
