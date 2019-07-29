export interface IIsBlnak {
  (value?: any): boolean;
}

const isBlnak: IIsBlnak = function (data: any) {
  const dataType = typeof (data);
  if (dataType == 'number') {
    if (Number.isNaN(data)) {
      return true;
    }
    return false;
  }
  if (dataType == 'boolean') {
    return false;
  }
  if (dataType == 'undefined' || data === null) {
    return true;
  }
  if (typeof (data.length) != 'undefined') {
    // [""]也会被判断位空
    // 是否是空字符串
    if (/^[\s]*$/.test(data.toString())) {
      return true;
    }
    return data.length == 0;
  }
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
}

export default isBlnak;