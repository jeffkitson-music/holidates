function mlkJR(year) {
  if (year==null){
    year = new Date().getFullYear()
  }
  
  mondays = getWeekdaysInMonth("January",year,"Monday")
  mlk = mondays[2] //third monday

  return mlk
}
