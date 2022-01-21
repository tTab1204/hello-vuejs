export const languages = [
  {
    name: "한국어",
    type: "ko",
    dateType: "ko-KR",
  },

  {
    name: "English",
    type: "en",
    dateType: "en-US",
  },
  {
    name: "English(UK)",
    type: "en",
    dateType: "en-GB",
  },
  {
    name: "عربى",
    type: "ar",
    dateType: "ar-AE",
  },
  {
    name: "عربى",
    type: "ar",
    dateType: "ar-SA",
  },
  {
    name: "русский",
    type: "ru",
    dateType: "ru-RU",
  },
];

const dateTimeFormat = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  },
  time: {
    hour: "numeric",
    minute: "numeric",
  },
};

// 반복 제거
const dateTimeFormats = {
  "en-US": dateTimeFormat,
  "en-GB": dateTimeFormat,
  "ko-KR": dateTimeFormat,
  "ar-AE": dateTimeFormat,
  "ar-SA": dateTimeFormat,
  "ru-RU": dateTimeFormat,
};

export default dateTimeFormats;
