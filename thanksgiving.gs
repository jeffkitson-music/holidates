function getThanksgivingBreak(year){
  // This only gets CURRENT academic Year!!!!
  var t = getThanksgiving(year)
  var wednesday = new Date(t)
  wednesday.setDate(wednesday.getDate()-1)
  return wednesday
}


function getThanksgiving(year) {
  if (year==null){
    year = new Date().getFullYear()
  }
  thursdays = getWeekdaysInMonth("November",year,"Thursday")
  thanksgiving = thursdays[3] // Fourth Thursday
  return thanksgiving
}
