//https://www.hebcal.com/home/developer-apis

// Reference: https://en.wikipedia.org/wiki/Public_holidays_in_the_United_States#Jewish_holidays
// Included where "schools may close" was listed

function getJewishHolidays(year){
  var url = "https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&year="+year
  var response = UrlFetchApp.fetch(url)
  var r = JSON.parse(response)

  var hebcal = {
    "Pesach I":{"name":"passover"}, // I refers to the day (I-VII or VIII)
    "Erev Rosh Hashana":{"name":"rosh_hashana"}, 
    "Erev Yom Kippur":{"name":"yom_kippur"},
    "Chanukah: 1 Candle":{"name":"hanukkah"} // First night of Hanukkah
  }

  var jh = {}

  for (let i = 0; i < r.items.length; i++) {
    if(Object.keys(hebcal).includes(r.items[i].title)){
      //jewishHolidays[r.items[i].title]["date"] = r.items[i].date
      jh[hebcal[r.items[i].title].name] = r.items[i].date
    }
  }
  //Logger.log(hebcal)
  //Logger.log(jh)
  return jh
}
