function getHoliday(holiday, year){
  // A little cleaning...
  holiday = holiday.toLowerCase().replace(" ","").trim()
  
  // Get date 
  switch(holiday) {
  case "singingvalentines":
    var v = singingvalentines(determineYear(year,"spring"));
    var date = v["sing"]; // date object of actual date is "vday"
    break;
  case "easter":
    var date = getEaster(determineYear(year,"spring"));
    break;
  case "goodfriday":
    var date = getGoodFriday(determineYear(year,"spring"));
    break;
  case "orthodoxeaster":
    var date = getOrthodoxEaster(determineYear(year,"spring"))
    break;
  case "orthodoxgoodfriday":
    var date = getGoodFriday(determineYear(year,"spring", orthodox=true))
    break;
  case "thanksgiving":
    var date = getThanksgiving(determineYear(year,"fall")); // Returns Wednesday!
    break;
  case "thanksgivingbreak":
    var date = getThanksgivingBreak(determineYear(year,"fall")); // Returns Wednesday!
    break;
  case "mlk":
    var date = mlkJR(determineYear(year,"spring"));
    break;
 
  // Jewish Holidays provided by hebcal.com
  case "roshhashana":
    var jh = getJewishHolidays(determineYear(year,"fall"));
    var date = jh.rosh_hashana;
    break;
  case "yomkippur":
    var jh = getJewishHolidays(determineYear(year,"fall"));
    var date = jh.yom_kippur;
    break;
  case "passover":
    var jh = getJewishHolidays(determineYear(year,"spring"));
    var date = jh.passover;
    break;
  case "hanukkah":
    var jh = getJewishHolidays(determineYear(year,"fall"));
    var date = jh.hanukkah;
    break;
  default:
    var date = "Not Found"
  }
  
  //Logger.log(date)
  return date
}
