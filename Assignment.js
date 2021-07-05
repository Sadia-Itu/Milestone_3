//first
function kilometerToMeter(kilometer){
    if(kilometer<0){
        meter='Invalid';
    }
    else{
    var meter=kilometer*1000;
    }
    return meter;
}

var convertvalue=kilometerToMeter(2.5);

console.log(convertvalue);

//second

function budgetCalculator(watch,phone,laptop){
    var budgetForWatch=watch*50;
    var budgetForPhone=phone*100;
    var budgetForLaptop=laptop*500;
     var totalBudget=budgetForWatch+budgetForPhone+budgetForLaptop;
     return totalBudget;
}
var total=budgetCalculator(9,5,2);
console.log(total);

//third
function hotelCost(day){
    if(day<=10){
        var cost=day*100;
    }
    else if(day<=20){
        var first=10*100;
        var remain=day-10;
        var second=remain*80;
        var cost=first+second;
    }
        
    else{
        var first=10*100;
        var second=10*80;
        var remain=day-20;
        var third=remain*50;
        var cost=first+second+third;
    }
    return cost;

}

var total=hotelCost(40);
console.log(total);

//forth

function megaFriend(friends){
    
    var mega=friends[0];
    for(var i=0;i<friends.length;i++){
        var currentfriends=friends[i];
        if(currentfriends.length > mega.length){
            mega=currentfriends;
        }

    
}
    return mega;
}
var friend=megaFriend(['nabil','ayesha','sara','tui','itu','mozammel']);
console.log(friend);
