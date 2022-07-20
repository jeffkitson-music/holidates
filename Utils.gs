function determineYear(year,semester){
  if(year.length <= 4){
    return year
  }
  else if (semester == "Fall"||semester=="fall"){
   return year.substring(0, 4)
  }
  else{
    return year.substring(year.length-4)
  }
}


function getWeekdaysInMonth(month,year,weekday) {
  // example: getWeekdaysInMonth("November","2022","Thursday")
  // Formerly "Get Mondays"
  // Now works for any day
  //https://stackoverflow.com/questions/9481158/how-can-i-get-the-4-mondays-of-a-month-with-js
    var d = new Date(month+" 1,"+year)
        month = d.getMonth(),
        weekdays = [];

    var dayNumber = getDayOffset(weekday)
    
    //d.setDate(1); 

    // Get the first weekday (e.g. Monday) in the month
    while (d.getDay() !== dayNumber) {
        d.setDate(d.getDate() + 1);// needs to stay 1, to advance one day
    }

    // Get all the other similar weekdays in the month
    while (d.getMonth() === month) {
        weekdays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return weekdays;
}

function getDayOffset(weekday){
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var offset = days.indexOf(weekday);
  return offset
}

function aySplitter(year) {
  y = year.split("-")
  Logger.log(y)
  return y
}
