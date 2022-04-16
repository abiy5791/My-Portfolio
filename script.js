
// for typeing text style or animation

var i=0,text;
text = "I’ve already touched on personal branding a bit in this post, but next up I want to look at some websites that are killing it with how they showcase the site owner’s personality and style."

function typing(){
    if(i<text.length){
        document.getElementById("letter").innerHTML +=text.charAt(i);
        i++;
        setTimeout(typing,30);
    }
}
typing();

//for digital time
setInterval(function () {
    const clock = document.querySelector(".clock");
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.toDateString();
    let day = "AM";

    if(hr>12){
    hr=hr-12;
    day="PM";
    }
if(hr == 0){
    hr=12;
}
if(hr<10){
    hr="0"+hr;
}
if(min<10){
    min="0"+min;
}
if(sec<10){
    sec="0"+sec;
}
clock.textContent = hr + ":" + min + ":" + sec + " " + day+" "+date;
});

// image slider

var x = 0;
var images = [];
var time = 2000;

images[0] = "../port/img/active-states.jpg";
images[1] = "../port/img/active-states1.jpg";
images[2] = "../port/img/active.jpg";
images[3] = "../port/img/desktop-design 00.jpg";
images[4] = "../port/img/desktop-design1.jpg";
images[5] = "../port/img/text to speech.png";
images[6] = "../port/img/Screenshot 1.png";
images[7] = "../port/img/Screenshot 2022-03-27 131339.png";

function slide() {
  document.slider.src = images[x];
  if (x < images.length - 1) {
    x++;
  } else {
    x = 0;
  }
  setTimeout("slide()", time);
}
window.onload = slide;

// for scroll effect at the top of the page

$(document).ready(function(){
    $(window).scroll(function(){
        var windowTop = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height();
        var scroll = (windowTop/(documentHeight - windowHeight))*100;
        $('.scroll-line').css("width",(scroll + '%'));
});
});


//for scroll reveal effect

ScrollReveal({
     reset: true ,
    distance:'60px',
    duration:2500,
    delay:400
    });

ScrollReveal().reveal('.inside1 h1,.gallery strong,.card3 p,.card_list2',{delay:100,origin:'top'});
ScrollReveal().reveal('.photo1,.photo4,.photo7,.card1 .profile,#aboutimg',{delay:550,origin:'left'});
ScrollReveal().reveal('.photo2,.photo5,#letter',{delay:300,origin:'bottom'});
ScrollReveal().reveal('.photo3,.photo6,.phone,.card_list3',{delay:600,origin:'right'});
ScrollReveal().reveal('.card3 p button,.clock,.contact h2,.card_list1,.photo-slider',{delay:500,origin:'left'});
ScrollReveal().reveal('.icon i',{delay:400,origin:'bottom',interval:400});





