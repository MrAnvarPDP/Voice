let record = new webkitSpeechRecognition();

record.lang = "en-US";
record.start();

record.onend = () => {
  console.log("-------------END------------");
};

record.onresult = (evt) => {
  gapirgich(evt.results[0][0].transcript);
};

function gapirgich(soz) {
  console.log(soz);
  if (soz == "yashil" || soz == "green") {
    document.body.style.background = "green";
  }
  if (soz == "qizil" || soz == "red") {
    document.body.style.background = "red";
  }
  if (soz == "kora" || soz == "black") {
    document.body.style.background = "black";
  }
  if (soz == "kok" || soz == "blue") {
    document.body.style.background = "blue";
  }
  if (soz == "sariq" || soz == "yellow") {
    document.body.style.background = "yellow";
  }
  if (soz == "sabzirang" || soz == "orange") {
    document.body.style.background = "orange";
  }
}
