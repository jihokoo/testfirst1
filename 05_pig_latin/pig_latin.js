var translate = function(string){
  var dummy = string.split(" ")
  var array = []
  for (var i = 0; i < dummy.length; i++){
    array.push(second(dummy[i].split("")))

  }
  return array.join(" ")
}
var second = function(arrayed){
  console.log(arrayed.join(""));
  if(arrayed[0].match(/[aeiou]/)){
    arrayed.push("ay");
    }
  else{
    if(arrayed[0] === "q" && arrayed[1] === "u"){
      arrayed.reverse().pop();
      arrayed.pop();
      arrayed.reverse().push("qu");
      second(arrayed)
    }
    else{
      first = arrayed[0];
      arrayed.reverse().pop();
      arrayed.reverse().push(first);
      second(arrayed)
    }
  }
  return arrayed.join("");
};
