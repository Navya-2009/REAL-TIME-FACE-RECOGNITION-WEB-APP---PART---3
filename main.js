function preload(){
}

function setup(){

    canvas= createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ubLwrBEnB/model.json', modelLoaded);
}

function draw(){

    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResult);
}

function gotResult(error, result){

    if(error){

        console.error(error);
    }

    else{

        console.log(result);
        document.getElementById("family_name").innerHTML = result[0].label;
        document.getElementById("family_accuracy").innerHTML = result[0].confidence;
    }
}

function modelLoaded(){

    console.log("Model Loaded !");
}