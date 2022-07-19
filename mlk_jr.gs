function mlkJR(year) {
  if (year==null){
    year = new Date().getFullYear()
  }
  
  mondays = getXdays("January",year,"Monday") // getXdays is in Code.gs
  mlk = mondays[2] //third monday

  return mlk
}
