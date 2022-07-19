function getThanksgiving(year) {
  if (year==null){
    year = new Date().getFullYear()
  }
  thursdays = getXdays("November",year,"Thursday") // function in Code.gs
  thanksgiving = thursdays[3] // Fourth Thursday
  return thanksgiving
}
