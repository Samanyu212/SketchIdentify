function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("red");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function draw(){
strokeWeight(13);
stroke(0);

if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);

}
}

function classifyCanvas(){
classifier.classify(canvas,gotResults);    
}

function gotResults(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML="LABEL:"+results[0].label;
    document.getElementById("confidence").innerHTML="CONFIDENCE:"+Math.round(results[0].confidence*100)+"%";
    utterthis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}
}

function clear_canvas(){
    background("red");
}
