module.exports = (src) => {
  let mapping = {
    "0" : "0",
    "1" : "1",
    "2" : "2",
    "3" : "3",
    "4" : "4",
    "5" : "5",
    "6" : "6",
    "7" : "7",
    "8" : "8",
    "9" : "9",
    "10" : "A",
    "11" : "B",
    "12" : "C",
    "13" : "D",
    "14" : "E",
    "15" : "F"
  }
  let n = 0
  let returnString = ""
  
  while (16 ** (n+1) < src) {
    n++
  }
  for (n; n >= 0; n--) {
    if (16 ** n <= src) {
      returnString += mapping[Math.floor(src / 16 ** n).toString()]
      src = src - Math.floor(src / 16 ** n) * (16 ** n)
    } else {
      returnString += "0"
    }
  }

  return returnString 
}