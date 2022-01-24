function startClassification(){
    console.log("hello");
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XKxR1bUQE/model.json',{probabilityThreshold: 0.7}, modelReady);
}      

function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_R = Math.floor(Math.random() * 255) + 1;
        random_G = Math.floor(Math.random() * 255) + 1;
        random_B = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML='I can hear - ' + results[0].label;
        document.getElementById("Accuracy_label").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + random_R + "," + random_G + "," + random_B + ")";
        document.getElementById("Accuracy_label").style.color = "rgb(" + random_R + "," + random_G + "," + random_B + ")";
        img = document.getElementById("img");
        if (results[0].label== "meowing") {
            img.src= 'cat.png';
            cat = cat + 1;
        } else if (results[0].label== "barking") {
            img.src= 'dog.png';
            dog = dog + 1;
        } else {
            img.src= 'bn.jpg';
        }
    }
}