import generalDateTimeFormat from "./general";
import aeDateTimeFormat from "./ar-AE";
import saDateTimeFormat from "./ar-SA";

const tempTimeFormat = {
  date: {
    dateStyle: "medium",
  },
  dateTime: {
    timeStyle: "short",
    dateStyle: "medium",
    numberingSystem: "latn",
  },
  time: {
    timeStyle: "short",
  },
};

const dateTimeFormats = {
  "en-US": tempTimeFormat,
  "en-GB": generalDateTimeFormat,
  "ko-KR": tempTimeFormat,
  "ar-AE": aeDateTimeFormat,
  "ar-SA": saDateTimeFormat,
  "ru-RU": generalDateTimeFormat,
};

export default dateTimeFormats;
