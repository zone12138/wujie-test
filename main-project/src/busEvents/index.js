import WujieVue from "wujie-vue3";
const { bus } = WujieVue;

/**
 * 向子应用发送消息
 */
const useEmit = function () {
  const [eventName, ...args] = [...arguments];
  if (typeof eventName !== "string") return;
  bus.$emit(eventName, ...args);
};

/**
 * 订阅来自子应用的消息
 * @returns 取消订阅的方法
 */
const useOn = function () {
  const [eventName, fn] = [...arguments];
  if (typeof eventName !== "string" || typeof fn !== "function")
    return () => void 0;
  bus.$on(eventName, fn);
  return () => useOff(eventName, fn);
};

/**
 * 取消订阅
 */
const useOff = function () {
  const [eventName, fn] = [...arguments];
  if (typeof eventName !== "string" || typeof fn !== "function") return;
  bus.$off(eventName, fn);
};

export { useEmit, useOn, useOff };
