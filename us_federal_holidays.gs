// https://www.federalreserve.gov/aboutthefed/k8.htm

/*
New Years - Done
MLK - Done 
Washinton's Birthday / President's Day
Memorial Day - Done
Juneteenth - Done
Indepedence Day - Done
Labor Day - Done
Columbus Day - Done
Veteran's Day
Thanksgiving
Christmas
*/

function getNewYearsDayFederal(year) {
  var newYearsDay = new Date("January 1,"+year.toString());
  var federalNewYearsDay = federalShift(newYearsDay)
  Logger.log(federalNewYearsDay)
  return federalNewYearsDay

}

// President's Day
function getWashingtonBirthday(year) {
  if (year==null){
    year = new Date().getFullYear();
  }
  
  var mondays = getWeekdaysInMonth("February",year,"Monday");
  var wbd = mondays[2] //third monday

  return wbd;
}

function getMemorialDay(year){
  // Last Monday in May - LAST not fourth...
  if (year==null){
    year = new Date().getFullYear();
  }
  var mondays = getWeekdaysInMonth("May",year,"Monday");
  var md = mondays[mondays.length-1]
  return md

}

function getJuneteenthFederal(year){
  if (year==null){
    year = new Date().getFullYear();
  }
  var jt = new Date("June 19,"+year.toString());
  var jtfederal = federalShift(jt)
  return jtfederal

}

function getFourthOfJulyFederal(year){
   if (year==null){
    year = new Date().getFullYear();
  }
  var fourthOfJuly = new Date("July 4,"+year.toString());
  var fourthOfJulyFederal = federalShift(fourthOfJuly)
  return fourthOfJulyFederal

}

function getLaborDayFederal(year) {
  if (year==null){
    year = new Date().getFullYear();
  }
  var laborDay = getLaborDay(year)
  var laborDayFederal = federalShift(laborDay)
  return laborDayFederal

}

// Indegenous People's Day
function getColumbusDay(year){
  // second Monday in October
  if (year==null){
    year = new Date().getFullYear();
  }
  
  var mondays = getWeekdaysInMonth("October",year,"Monday");
  var columbusDay = mondays[1] // second monday

  return columbusDay;

}

function getVeteransDayFederal(year) {
  if (year==null){
    year = new Date().getFullYear();
  }
  var veteransDay = new Date("November 11,"+year.toString());
  var veteransDayFederal = federalShift(veteransDay)
  Logger.log(veteransDayFederal)
  return veteransDayFederal

}

function getThanksgivingFederal(year){
  if (year==null){
    year = new Date().getFullYear();
  }
  var thanksgiving = getThanksgiving(year)
  var thanksgivingFederal = federalShift(thanksgiving)
  return thanksgivingFederal
}

function getChristmasFederal(year){
  if (year==null){
      year = new Date().getFullYear();
    }
  var xmas = getChristmas()
  var xmasFederal = federalShift(xmas)
  return xmasFederal
}



function federalShift(holidayDate){
  /*Per the Federal reserve: 
  *For holidays falling on Saturday, Federal Reserve Banks and Branches will be open the preceding Friday.

  **For holidays falling on Sunday, Federal Reserve Banks and Branches will be closed the following Monday.
  */
  
  // Sunday is 0
  var dayofweek = holidayDate.getDay()

  // Correct to Monday if date falls on a Sunday
  if (dayofweek == 0) { //Sunday
    holidayDate.setDate(holidayDate.getDate()+1);
  }
  else{
    // pass
  }   
  return holidayDate 
}
