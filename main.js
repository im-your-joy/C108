function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_V9v26XRy/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected Voice is of - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal1');
        img1 = document.getElementById('animal2');

        if (results[0].label == "Dog") {
            img.src = 'https://i.pinimg.com/564x/57/88/9a/57889a52b385df80bc77cf2f58704263.jpg';
            img1.src = 'https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg';
        } else if (results[0].label == "Cat") {
            img.src = 'https://i.pinimg.com/564x/57/88/9a/57889a52b385df80bc77cf2f58704263.jpg';
            img1.src = 'https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg';
        } else{
            img.src = 'https://i.pinimg.com/564x/57/88/9a/57889a52b385df80bc77cf2f58704263.jpg';
            img1.src = 'https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg';
        }
    }
}