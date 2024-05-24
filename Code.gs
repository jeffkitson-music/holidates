function getHoliday(holiday, year){
  // A little cleaning...
  holiday = holiday.toLowerCase().replace(" ","").replace("'", "").trim();
  
  // Get date 
  switch(holiday) {
  case "laborday":
    var date = getLaborDay(determineYear(year,"fall"));
    break;
  case "valentines":
    var cupid = getValentines(determineYear(year,"spring"));
    var date = cupid.vday; // date object of actual date is "vday"
    break;
  case "valentinesparty":
    var v = getValentines(determineYear(year,"spring"));
    var date = cupid.party; // date object of actual date is "vday"
    break;
  case "easter":
    var date = getEaster(determineYear(year,"spring"));
    break;
  case "goodfriday":
    var date = getGoodFriday(determineYear(year,"spring"));
    break;
  case "orthodoxeaster":
    var date = getOrthodoxEaster(determineYear(year,"spring"));
    break;
  case "orthodoxgoodfriday":
    var date = getGoodFriday(determineYear(year,"spring", orthodox=true));
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
  
  // Ramadan Dates provided by the U.S. Naval Observatory
  case "ramadan":
    // returns {"start":date, "end":day_before_Shawwal}
    return getRamadan(year, "any");
  
  case "ramadanstart":
    var rs = getRamadan(year, "any");
    var date = rs.start;
    break;
  
  case "ramadanend":
    var rs = getRamadan(year, "any");
    var date = rs.end;
    break
  
  // U.S. Federal Holidays
  case "newyearsdayfederal":
    var date = getNewYearsDayFederal(determineYear(year,"spring"));
    break;

  case "presidentsday":
  case "washingtonbirthday":
    var date = getWashingtonBirthday(determineYear(year,"spring"));
    break;
  
  case "memorialday":
    var date = getMemorialDay(determineYear(year, "spring"));
    break; 

  case "juneteenth":
    var date = getJuneteenthFederal(determineYear(year, "spring"));
    break; 

  case "forthofjulyfederal":
    var date = getFourthOfJulyFederal(determineYear(year, "spring"));
    break; 

  case "laborday":
   var date = getLaborDayFederal(determineYear(year, "fall"));
    break; 

  case "columbusday":
  case "indegenouspeoplesday":
    var date = getColumbusDay(determineYear(year, "fall"));
    break; 

  case "veteransday":
    var date = getVeteransDayFederal(determineYear(year, "fall"));
    break; 

  case "thanksgivingfederal":
    var date = getThanksgivingFederal(determineYear(year, "fall"));
    break; 

  case "christmasfederal":
    var date = getChristmasFederal(determineYear("year", "fall"));
    break; 
    
  default:
    var date = "Not Found"
  }
  
  //Logger.log(date)
  var date_formatted = Utilities.formatDate(date, "America/Chicago", "MM/dd/yyyy")
  return date_formatted
}

