function tipCalculator(bill){
    
    var percentage;
       if (bill < 50) {
         percentage= .2
                      
        } else if (bill >= 50 && bill < 200){ 
                                             
            percentage = .15;
               
    }else{
         percentage = .10
            
              
    }
    
    return percentage *bill
}
    

console.log(tipCalculator(200));
}

======================================BMI INdex=========================

var john = {
firstName: 'John',
lastName: 'Snow',
height: 1.90,
mass: 70,
calcBMI: function(){
    
    this.BMI= this.mass/(this.height*this.height);
    
    
}
}
john.calcBMI();
//console.log(john);

var mark = {
firstName: 'Mark',
lastName: 'Harris',
height: 1.75,
mass: 110,
calcBMI: function(){
    
    this.BMI= this.mass/(this.height*this.height);
    
    
}
}
mark.calcBMI();
//console.log(mark);


if(john.BMI>mark.BMI){
    
    console.log(john.firstName + john.lastName + john.BMI + 'is greater than' + mark.firstName + mark.BMI);
}else if(mark.BMI>john.BMI) {
    
    console.log(mark.firstName + mark.lastName + mark.BMI + 'is greater than' + john.firstName + john.BMI);
    
}else{
    
    console.log('draw');
}
