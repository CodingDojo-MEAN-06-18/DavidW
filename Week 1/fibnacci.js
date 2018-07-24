function fib() {
    var last_number = 1;
    var current_number = 1;
    var counter = 0;

    function nacci() {
        const temp = last_number;
        counter++;
        console.log(`Fibnacci has been called ${counter} time(s) and equals ${last_number}`);
        last_number = current_number;
        current_number += temp;
    }
    return nacci;
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  