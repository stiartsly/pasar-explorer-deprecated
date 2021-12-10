// Get Abbrevation of hex addres //
export const reduceHexAddress = strAddress => {
  return `${strAddress.substring(0, 5)}...${strAddress.substring(
    strAddress.length - 3,
    strAddress.length
  )}`;
};
// Get time from timestamp //
export const getTime = timestamp => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp);
};
// Get thumbnail url //
export const getThumbnail = id => {
  return `https://ipfs0.trinity-feeds.app/ipfs/${id.substring(12, id.length)}`;
};
