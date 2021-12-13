// Get Abbrevation of hex addres //
export const reduceHexAddress = strAddress => {
  return `${strAddress.substring(0, 5)}...${strAddress.substring(
    strAddress.length - 3,
    strAddress.length
  )}`;
};
// Get time from timestamp //
export const getTime = timestamp => {
  const date = new Date(timestamp * 1000);
  const strDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return strDate;
};
// Get thumbnail url //
export const getThumbnail = id => {
  return `https://ipfs0.trinity-feeds.app/ipfs/${id.substring(12, id.length)}`;
};
