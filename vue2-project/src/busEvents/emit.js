/**
 * 判断是否是微前端环境
 * @returns {boolean} 是否是微前端环境
 */
export const isWujie = window.$wujie !== undefined && window.__POWERED_BY_WUJIE__;

/**
 * 子应用向主应用发送消息
 * @param {string} eventName 
 * @param  {...any} data 
 */
export const useEmit = (eventName, ...data) => {
  if (isWujie && typeof eventName === "string") {
    window.$wujie.bus.$emit(eventName, ...data);
  }
};
