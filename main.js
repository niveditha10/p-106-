console.log("ml5_version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Cvkuq7Mj9/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function speak(){
    var synth=window.speechSynthesis;
     speak_1="your first prediction is"+prediction_1;
     speak_2="your second prediction is"+prediction_2;
     var utterrence=new SpeechSynthesisUtterance(speak_1+speak_2);
     synth.speak(utterrence);
}

