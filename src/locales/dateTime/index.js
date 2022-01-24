import generalDateTimeFormat from "./general";
import aeDateTimeFormat from "./ar-AE";
import saDateTimeFormat from "./ar-SA";

const dateTimeFormats = {
  "en-US": generalDateTimeFormat,
  "en-GB": generalDateTimeFormat,
  "ko-KR": generalDateTimeFormat,
  "ar-AE": aeDateTimeFormat,
  "ar-SA": saDateTimeFormat,
  "ru-RU": generalDateTimeFormat,
};

export default dateTimeFormats;
