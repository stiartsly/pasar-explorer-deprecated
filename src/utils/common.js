// Get Abbrevation of hex addres //
export const reduceHexAddress = strAddress => {
  return `${strAddress.substring(0, 6)}...${strAddress.substring(
    strAddress.length - 5,
    strAddress.length
  )}`;
};
// Get time from timestamp //
export const getTime = timestamp => {
  const date = new Date(timestamp * 1000);
  var pieces = date.toUTCString().split(" ");
  pieces[1] = pieces.splice(2, 1, pieces[1])[0];
  var date_str = pieces.splice(1,3).join("-");

  let hours = date.getUTCHours();
  var suffix = hours >= 12 ? "PM":"AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours.toString().padStart(2,'0');
  var min = date.getUTCMinutes().toString().padStart(2,'0');
  var sec = date.getUTCSeconds().toString().padStart(2,'0');
  var time_str = [hours, min, sec].join(':') + " " + [suffix, "+UTC"].join(' ');
  return {'date':date_str, 'time':time_str};
};
// Get thumbnail url //
export const getThumbnail = id => {
  return `https://ipfs0.trinity-feeds.app/ipfs/${id.substring(12, id.length)}`;
};

export const getElapsedTime = createdtimestamp => {
  const currentTimestamp = new Date().getTime() / 1000;
  const timestamp = currentTimestamp - createdtimestamp;
  var strDate = '';
  var nDay = parseInt(timestamp / (24 * 3600));
  var nHour = parseInt(timestamp/ 3600) % 24;
  var nMin = parseInt(timestamp / 60) % 60;
  if (nDay > 0) strDate += nDay + 'd';
  else if (nHour > 0) strDate += ' ' + nHour + 'h';
  else if (nMin > 0) strDate += ' ' + nMin + 'm';
  if (strDate == '') strDate = '0m';
  strDate += ' ago';
  return strDate;
};

export const getMethod = id => {
  var strDate;
  if (id == 0) strDate = 'Creation';
  else strDate = 'Transfer';
  return strDate;
};
