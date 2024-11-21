import WujieVue from "wujie-vue3";
const { bus } = WujieVue;

const useEmit = function () {
  const [eventName, ...args] = [...arguments];
  if (typeof eventName !== "string") return;
  bus.$emit(eventName, ...args);
};

const useOn = function () {
  const [eventName, fn] = [...arguments];
  if (typeof eventName !== "string" || typeof fn !== "function")
    return () => void 0;
  bus.$on(eventName, fn);
  return () => useOff(eventName, fn);
};

const useOff = function () {
  const [eventName, fn] = [...arguments];
  if (typeof eventName !== "string" || typeof fn !== "function") return;
  bus.$off(eventName, fn);
};

export { useEmit, useOn, useOff };
