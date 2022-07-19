// Custom Function
function holidates(holiday, year){
  // A little cleaning...
  holiday = holiday.toLowerCase().replace(" ","").trim()
  year = year.substring(year.length-4) // last four characters so "2023" or "2022-2023" will work.
  
  // Get date 
  switch(holiday) {
  case "singingvalentines":
    var v = singingvalentines(year);
    var date = v["sing"]; // date object of actual date is "vday"
    break;
  case "easter":
    var date = getEaster(year);
    break;
  case "thanksgiving":
    var date = getThanksgivingBreak(year); // Returns Wednesday!
    break;
  case "mlk":
    var date = mlkJR(year);
    break;
  default:
    var date = "Not Found";
  }
  //Logger.log(date);
  return date;
}

// Helper Functions
function getWeekdaysInMonth(month,year,weekday) {
  // Formerly "Get Mondays"
  // Now works for any day
  //https://stackoverflow.com/questions/9481158/how-can-i-get-the-4-mondays-of-a-month-with-js
    var d = new Date(month+" 1,"+year)
    month = d.getMonth(),
    weekdays = [];

    var dayNumber = getDayOffset(weekday);
    
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
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var offset = days.indexOf(weekday);
  return offset;
}

function aySplitter(year) {
  y = year.split("-");
  Logger.log(y);
  return y;
};

// *** MLK Jr. Day ***
function mlkJR(year) {
  if (year==null){
    year = new Date().getFullYear();
  };
  
  mondays = getWeekdaysInMonth("January",year,"Monday")
  mlk = mondays[2]; //third monday

  return mlk;
}

// *** Valentine's Day ***
// Note: returns {"sing":returns friday prior if vday falls on the weekend , "vday":actual date of Valentine's Day}
// This is for event purposes. Adjust to your own needs!

function singingvalentines(year){
  var vdate = new Date("February 14,"+year);

  // Sunday is 0
  var dayofweek = vdate.getDay();

  // Correct to Friday if VDay falls on Saturday/Sunday
  if (dayofweek == 0) { //Sunday
    var sing = new Date ("2/12/"+year);
  }
  else if (dayofweek == 6){ // Saturday
    var sing = new Date ("2/13/"+year);
  }
  else{
    var sing = new Date (vdate.getTime());
  };   

  var cupid = {"sing":sing, "vday":vdate};
  return cupid;
}

// *** Easter ***
function getEaster(year){ // year should be int, not string
  var d = easterMath(year);
  var month = (d[0]).toString() ;
  var day = (d[1]).toString();
  year = year.toString();
  
  var easterDate = new Date(month+"/"+day+"/"+year);
  //Logger.log(easterDate);
  return easterDate;
};

function easterMath(year) {
  //https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
  // MONTH may need to be adjusted for javascript
  // THIS returns Jan = 1, JS returns Jan = 0 

	var f = Math.floor,
		// Golden Number - 1
		G = year % 19,
		C = f(year / 100),
		// related to Epact
		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
		// number of days from 21 March to the Paschal full moon
		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
		// weekday for the Paschal full moon
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		// number of days from 21 March to the Sunday on or before the Paschal full moon
		L = I - J,
		month = 3 + f((L + 40)/44),
		day = L + 28 - 31 * f(month / 4);

	return [month,day];
}

// *** Thanksgiving ***
function getThanksgiving(year) {
  if (year==null){
    year = new Date().getFullYear();
  }
  thursdays = getWeekdaysInMonth("November",year,"Thursday");
  thanksgiving = thursdays[3]; // Fourth Thursday
  return thanksgiving;
};
