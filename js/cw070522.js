// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  let hour = h * 3600 * 1000;
  let min = m * 60 * 1000
  let sec = s * 1000
  return hour + min + sec
}