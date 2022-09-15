var partnerA = document.getElementsByClassName("partner-a").textContext;

var partnerB = document.getElementsByClassName("partner-b").textContext;

var btn = document.getElementsByClassName("btn")[0];

var ball = partnerA + partnerB;

btn.addEventListener("click", function () {
  if (partnerA + partnerB == "AAAA") {
    alert("You are Compactible");
  } else if (partnerA + partnerB == "AAAS") {
    alert("you are compactible");
  } else if (partnerA + partnerB == "AASS") {
    alert("You are compactible");
  } else if (partnerA + partnerB == "ASAS") {
    alert(
      "You are compactible but might give birth to a child that is SS. This is very bad"
    );
  } else if (partnerA + partnerB == "SSSS") {
    alert("you are not compactible");
  } else if (partnerA + partnerB == "ASAA") {
    alert("you are compactible");
  } else if (partnerA + partnerB == "SSAA") {
    alert("You are compactible");
  } else {
    alert("this is not a genotype");
  }
});
