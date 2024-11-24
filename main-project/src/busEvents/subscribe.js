import { useOn } from "./index";
import { ElMessage, ElNotification } from "element-plus";

/**
 * 订阅全局消息
 */
const subscribeMessage = function () {
  const [type, message = ""] = [...arguments];
  if (typeof type === "string") {
    ElMessage({ type, message });
  } else if (typeof type === "object") {
    ElMessage(type);
  }
};

/**
 * 订阅全局通知
 */
const subscribeNotify = function () {
  const [type, message = "", title = ""] = [...arguments];
  if (typeof type === "string") {
    ElNotification({ title, message, type });
  } else if (typeof type === "object") {
    ElNotification(type);
  }
};

/**
 * 全局订阅
 */
const subscribe = () => {
  useOn("global-message", subscribeMessage);
  useOn("global-notify", subscribeNotify);
};

/**
 * 全局取消订阅
 */
const stopSubscribe = () => {
  useOff("global-message", subscribeMessage);
  useOff("global-notify", subscribeNotify);
};

export { subscribe, stopSubscribe };
