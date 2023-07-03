//селектор должен возвращать ссылочный тип данных
export const getCount = (state) => state.count.tail;
export const getStep = (state) => state.step.tail;

// === тк ячейки памяти, где хранятся переменные должны совпадать,
// это значит одна и та же переменная, (по умолчанию)
//export const equalityFn = (current, prev) => current === prev;
