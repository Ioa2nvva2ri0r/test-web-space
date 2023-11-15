import checkError from "./validation";

export default function dataForm<T>(form: HTMLFormElement | null): T | null {
  if (form) {
    const elements = Array.from(new Set(
      Object.values(form.elements).filter(
        (el) => el.nodeName === "INPUT"
      )
    )) as (HTMLInputElement)[];

    if (elements.length === 0) return null;

    let data: { [key in string]: any } = {};

    for (const [index, elem] of Object.entries(elements)) {
      const { type, name, value, checked } = elem;
      const checkType = type === "radio" || type === "checkbox";

      if (checkError(elem) === true) return null;

      if (checkType && checked) data[name] = checked;
      if (!checkType && value !== "") data[name] = value;

      if (Number(index) === elements.length - 1)
        elements.forEach((el) => {
          const _checkType = el.type === "radio" || el.type === "checkbox";

          if (_checkType) el.checked = false;
          if (!_checkType) el.value = "";
        });
    }

    return data as T;
  } else throw new Error("Passed parameter is not a HTML-form!");
}
