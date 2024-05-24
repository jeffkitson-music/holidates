function getRamadata(year) {
  // U.S. Naval Observatory!!
  var url = `https://aa.usno.navy.mil/api/observances/islamic?year=${year}`
  var ramadata = JSON.parse(UrlFetchApp.fetch(url))
  return ramadata

}

function getRamadan(year){
  if(year==""){
    year = new Date().getFullYear().toString()
  }
  var ramadata = getRamadata(year)
  Logger.log(ramadata.data)
  var ramadanCalendar = {"start":null, "end":null}
  for (let i = 0; i < ramadata.data.length; i++) {
    if (ramadata.data[i]["observance"]=="First Day of Ramadan"){
      var dateRaw = ramadata.data[i]["month"]+"/"+ramadata.data[i]["day"]+"/"+ramadata.data[i]["year"]
      var startOfRamadan = new Date(dateRaw)
      Logger.log(startOfRamadan)
      ramadanCalendar.start = startOfRamadan
    }
    else if(ramadata.data[i]["observance"]=="First Day of Shawwal"){
      var dateRaw = ramadata.data[i]["month"]+"/"+ramadata.data[i]["day"]+"/"+ramadata.data[i]["year"]
      var shawwal = new Date(dateRaw)
      var endOfRamandan = new Date()
      endOfRamandan.setTime(shawwal.getTime() - (24 * 60 * 60 * 1000)) // set this as 11:59:59 ?
      endOfRamandan.setHours(23, 59, 59);
      Logger.log(endOfRamandan)
      ramadanCalendar.end = endOfRamandan
    }
  }
  Logger.log(ramadanCalendar)
}

// Quality of life...
function getRamadanStart(year){
  var r = getRamadan()
  return r.start
}

function getRamadanEnd(year){
  r = getRamadan()
  return r.end
}
