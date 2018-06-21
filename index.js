function takeANumber(katzDeliLineArray, newName){
  katzDeliLineArray.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLineArray.length} in line.`;
}
function nowServing(katzDeliLineArray){
  if (katzDeliLineArray.length < 1) return "There is nobody waiting to be served!";
  var strOut = "Currently serving " + katzDeliLineArray.shift() + ".";
  return strOut;
}
function currentLine(katzDeliLineArray){
  console.log("currentLine Reached")
  if (katzDeliLineArray.length < 1) return "The line is currently empty.";
  console.log("currentLine - after 1st if")
  var outString="";
  for (var i=0;i<=katzDeliLineArray.length-1;i++){
    console.log(`currentLine - for loop start: ${i}`)
    if (i>0) outString = outString + ',';
    if (i===0) {
      console.log(`currentLine - inner if(=0).  Loop: ${i}`)
      outString=`${i+1}. ${katzDeliLineArray[i]}`;
    } else{
      console.log(`currentLine - inner if(!=0).  Loop: ${i}`)
      outString=`${outString} ${i+1}. ${katzDeliLineArray[i]}`;
    }
  }
  return outString;
}
var katzDeli = [];


console.log(currentLine(katzDeli));
console.log(takeANumber(katzDeli,"Joe Blow"));
console.log(takeANumber(katzDeli,"Joe Blow2"));
console.log(JSON.stringify(katzDeli));
console.log(currentLine(katzDeli));
