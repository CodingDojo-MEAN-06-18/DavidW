// function leadBootcamp(language, leader){
//     var outcome = leader(language);
//     console.log(outcome);
// }
// function Mike(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Charlie(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Jimmy(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//     'iOS':'successful leader',
//     'java_android':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// leadBootcamp('java_android', Mike);
// leadBootcamp('java_android', Charlie);
// leadBootcamp('java_android', Jimmy);


// This is a function that just prints the result of another list of instructions
// function printResult(doSomething) {
//     var result = doSomething();          store the return value of the callback parameter
//     console.log(result);                 print the result!
//    }

// printResult(function returnFive(){ return 5 })   this should print "5"

   
// works in html
// function each(arr, callback) {
    // loop through the array
    // for(var i = 0; i < arr.length; i++) {
    //   callback(arr[i]); invoking the callback many times... delegation!
//     }
//   }
  // call the each function
//   each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) so many alerts!


//simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        //it just got back from the DB!
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 3000);
    // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
  }    
  //simulated request (failing);
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(); // this should return my data right??copy
    console.log(data);
  }
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();
  //e


  //simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 10000);
    return data;
  }    
  // ************CHANGES HERE **************
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
      console.log(data, "ASynchronous");
      for (var i = 0; i < data.length; i ++){
        console.log(data[i].name);
      }
    });
    console.log(data, "Synchronous");
  }
  //***************** END CHANGES **********************
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();
  //etc.
   
  