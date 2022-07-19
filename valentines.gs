// Returns Valentine's Day and the Friday prior (for Singing Valentines).

function singingvalentines(year){ 
  var vdate = new Date("February 14,"+year)

  // Sunday is 0
  var dayofweek = vdate.getDay()

  // Correct to Friday if VDay falls on Saturday/Sunday
  if (dayofweek == 0) { //Sunday
    var sing = new Date ("2/12/"+year)
  }
  else if (dayofweek == 6){ // Saturday
    var sing = new Date ("2/13/"+year)
  }
  else{
    var sing = new Date (vdate.getTime())
  }   

  var cupid = {"sing":sing, "vday":vdate}
  return cupid 
}
