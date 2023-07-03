export const updateTextData = (data, ref) => {
  const element = ref.current;
  while (element.firstChild) element.removeChild(element.firstChild);
  element.appendChild(document.createTextNode(data));
};
