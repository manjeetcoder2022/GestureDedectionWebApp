Webcam.set({
width:350,
height:250,
image_formet:"png",
png_quality:90
})
Webcam.attach("camera")

function capture(){
    Webcam.snap(function(data_uri){
          
           
        document.getElementById("results").innerHTML="<img src='"+ data_uri+"'id='captured_image'>"

    })
}
prediction_1= "Best of Luck"
prediction_2= "Amazing"
function check(){
  gotResult()
}
console.log("ml5.version : " + ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GdBNmX8wz/model.json",modelloaded)

function modelloaded(){
    console.log("model loded Successfully")
}
function gotResult(){
    speak()
}


function speak(){
    var synth= window.speechSynthesis
    var speak_data_1= "First Prediction is " + prediction_1
    var speak_data_2= "Second Prediction is " + prediction_2
    var utterthis= new SpeechSynthesisUtterance(speak_data_1+ speak_data_2)
    synth.speak(utterthis)
}