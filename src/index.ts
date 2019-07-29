export interface IIsBlnak {
  (value?: any): boolean;
}

const isBlnak: IIsBlnak = function (value: any) {
  const valueType = typeof value;
  if (value == undefined) {
    return true
  } else if (valueType === "number" || valueType === "boolean") {
    if (Number.isNaN(value) || value === false) {
      return true;
    } else {
      return false;
    }
  } else if (typeof value.length != "undefined") {
    if (/^[\s]*$/.test(value.toString())) {
      return true;
    }
    return value.length === 0;
  } else {
    for (let i in value) {
      if (value.hasOwnProperty(i)) {
        return false;
      }
    }
  };
  return true;
}

export default isBlnak;