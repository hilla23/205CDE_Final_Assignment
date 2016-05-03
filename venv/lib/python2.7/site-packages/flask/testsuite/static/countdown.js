
var countdown = function (end, elements, callback) {
    var _second = 1000,
        _minute = _second * 60,
        _hour= _minute * 60,
        _day = _hour * 24,
        
        end = new Date(end),
        timer,
        
        calculate = function(){
            var now = new Date(),
                remaining = end.getTime() - now.getTime(),
                data;
                
          if(isNaN(end)){
              console.log('Invalid date/time');
              return;
          } 
          
          if (remaining <= 0 ){       // Checks remaining time left before the day.
              clearInterval(timer);// clear our timer
              if(typeof callback === 'function' ){
                  callback();
              }// call back 
          } else {
              if(!timer){
                  timer= setInterval(calculate, _second); //set timer if it isn't already set.
              }
               data = {
              'days' : Math.floor(remaining / _day),
              'hours' : Math.floor((remaining % _day)/ _hour),
              'minutes' :Math.floor((remaining % _hour) / _minute),
              'seconds' : Math.floor((remaining % _minute) / _second),
          }
          if(elements.length){
              for(x in elements){
                  var x = elements[x];
                  data[x] = ('00' + data[x]).slice(-2); //makes sure we have two digits at all times
                  document.getElementById(x).innerHTML = data[x];
              }
              
          }
        };
          }

   calculate(); 
   
}

