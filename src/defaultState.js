import { LinkedList } from './LinkedList';
//т.к.сравнение в useSelector по ссылке, а не по значение,
//count и step должны быть ссылочными типами-объектами
const createDataNode = (startValue) => {
  const list = new LinkedList();
  list.append(startValue);
  return list;
};
const objCount = createDataNode(0);
const objStep = createDataNode(1);

const defaultState = {
  count: objCount,
  step: objStep,
};

export default defaultState;
