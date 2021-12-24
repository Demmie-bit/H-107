//
function startClassification(){
    console.log("hello");
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WhUzAeyfg/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    console.log("hello");
}