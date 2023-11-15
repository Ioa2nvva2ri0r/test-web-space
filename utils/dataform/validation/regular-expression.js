export default function regExp(type, value, exception = "") {
  const newRegExp = (val, flags) => new RegExp(`[^${val}${exception}]`, flags);

  switch (type) {
    case "tel":
      return !/^\+\d{11,12}$/.test(value);
    case "ru":
      return newRegExp("а-яё", "gi").test(value);
    case "en":
      return newRegExp("a-z", "gi").test(value);
  }
}
