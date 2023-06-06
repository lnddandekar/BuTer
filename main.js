function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('kitty') 
    img1 = document.getElementById('dino')
    img2 = document.getElementById('horsie')
    
    if (results[0].label == "Background noise") {
      img.src = 'cat_gif.gif';
      img1.src = 'dino_png.jpg';
      img2.src = 'horse_png.jpg';
      
    } else if (results[0].label == "roar") {
      img.src = 'cat_png.jpg';
      img1.src = 'dino_gif.gif';
      img2.src = 'horse_png.jpg';
      
    } else  (results[0].label == "neigh") {
      img.src = 'cat_png.jpg';
      img1.src = 'dino_png.jpg';
      img2.src = 'horse_gif.gif';
  }
}
}
