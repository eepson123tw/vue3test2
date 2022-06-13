const nextElementList = (list, value) => {
  const currentIndex = list.indexOf(value);
  const nextActionIndex = (currentIndex + 1) % list.length;
  const nextAction = list[nextActionIndex];
  return nextAction;
};

export default nextElementList;
