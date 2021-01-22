// https://github.com/jihan212/assignment-3_javascript

// Function for kilometer to meter

function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    if ( kilometer < 0 ){
        return "Distance cannot be negative";
    } else{
        return meter;
    }
}

// Function for budget calculator

function budgetCalculator(watch,phone,laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalCost = ( watch*watchPrice ) + ( phone*phonePrice ) + ( laptop*laptopPrice );
    if ( watch < 0 || phone < 0 || laptop <0){
        return "Price can't be negative";
    } else {
    return totalCost;
    }  
}

// Function for hotel cost

function hotelCost(days) {
    var cost = 0;
    if ( days <= 10 ){
        cost = days*100;
    } else if ( days <=20 ) {
        var firstTenDays = 10*100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    } else {
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays = days - 20;
        var remainingCost = remainingDays*50;
        cost = firstTenDays + secondTenDays + remainingCost;
    }
    return cost;
}

// Function for longest string in array

function megaFriend(nameList) {
    if (nameList.length == 0){
        return "Array is empty";
      } else {
      var max = nameList[0].length;
      var name = nameList[0];
      for( var i=1; i<nameList.length; i++ ){
          var element = nameList[i].length;
          if ( element> max ){
              max = element;
              name = nameList[i];
          }
      }
      return name;
      }
  }