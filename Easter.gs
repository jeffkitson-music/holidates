// Western Easter
function getEaster(year){
  var d = easterMath(year);
  var month = (d[0]).toString() ;
  var day = (d[1]).toString();
  year = year.toString();
  
  var easterDate = new Date(month+"/"+day+"/"+year);
  //Logger.log(easterDate)
  return easterDate;
}

function easterMath(year) { // Western!
  // https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343

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


// Good Friday

function getGoodFriday(year,orthodox){
  // Which Easter?
  if(orthodox){
    var easter = new Date(getOrthodoxEaster(year));
  }
  else{
    var easter = new Date(getEaster(year));
  }
  // Then subtract!
  var goodFriday = new Date(easter); // Yes, this is silly, but it's the JavaScript way, apparently. Python is better, I think...
  goodFriday.setDate(goodFriday.getDate()-2);
  //Logger.log(goodFriday);
  return goodFriday;
}

// Orthodox Easter

function getOrthodoxEaster(year){
  // Reference: https://stackoverflow.com/questions/3584307/code-golf-calculate-orthodox-easter-date
  // NOTE: Uses the Meeus's Julian algorithm 
  // This is only accurate for years 1900-2099
  
  // Cleaning
  y=parseInt(year);
   
  // Calculations (1900-2090 only)
  d=(19*(y%19)+15)%30;
  x=d+(2*(y%4)+4*(y%7)-d+34)%7+114;
  m=~~(x/31);d=x%31+1;
  if(y>1899&&y<2100){
    d+=13;
    
    if(m==3&&d>31){
      d-=31;m++
    }
    
    if(m==4&&d>30){
        d-=30;m++
    }
  }
  //Logger.log("0"+m+"/"+(d<10?"0"+d:d)+"/"+y)
  var orthodoxEaster = "0"+m+"/"+(d<10?"0"+d:d)+"/"+y;
  //Logger.log(orthodoxEaster)
  return orthodoxEaster;
}

