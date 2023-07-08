//т.к.сравнение в useSelector по ссылке, а не по значение,
//count и step должны быть ссылочными типами-объектами
const createDataNode = (value) => {
  const data = { data: { value } };
  return data;
};
const objCount = createDataNode(0);
const objStep = createDataNode(1);

const defaultState = {
  count: objCount,
  step: objStep,
};

export default defaultState;
