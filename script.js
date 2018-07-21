let dummyHeight = $('#Home .carousel').css('height');
$('#About').css('margin-top',dummyHeight);



//NAVBAR TOGGLE
$(window).scroll(event=>{
  if($(document).scrollTop() < 350){
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("navbar-light");
    $(".activeDark").addClass("activeLight");
    $(".activeDark").removeClass("activeDark");
    $(".navbar-toggler").removeClass("lightGreyBack");
    $(".navbar-toggler").addClass("transBack");
    if($(window).width() < 991.98){$(".navbar").addClass("transBack");}
    else{$(".navbar").removeClass("transBack");}
  }
  else{
    $(".navbar").removeClass("navbar-light");
    $(".navbar").addClass("navbar-dark");
    $(".activeLight").addClass("activeDark");
    $(".activeLight").removeClass("activeLight");
    $(".navbar-toggler").addClass("lightGreyBack");
    $(".navbar-toggler").css("borderRadius","20px");
    if($(window).width() < 991.98){$(".navbar").addClass("transBack");}
    else{$(".navbar").removeClass("transBack");}
  }
});


$(".nav-item").click(event=>{
  event.preventDefault();
  scrollToSection(event.target);
  //setCursor(event.target);
});

function setCursor(el){
  if($(document).scrollTop() < 350){
    $(".activeLight").removeClass("activeLight");
    $(el).addClass("activeLight");
  }
  else{
    $(".activeDark").removeClass("activeDark");
    $(el).addClass("activeDark");
  }
}

function scrollToSection(nav){
  let target = $(nav).attr("href");
  $('html, body').animate({
    scrollTop : $(target).offset().top - 50
  },1000);
};

let aboutCenter = $('#About').offset().top + $('#About').height() / 2;
let skillsCenter = $('#Skills').offset().top + $('#Skills').height() / 2;
let projectsCenter = $('#Projects').offset().top + $('#Projects').height() / 2;
let achCenter = $('#Achievments').offset().top + $('#Achievments').height() / 2;
let contactCenter = $('#Contact').offset().top + $('#Contact').height() / 2;

$(window).scroll(event=>{
  let x = $(document).scrollTop() + ($(window).height()*0.7);
  if(x <= aboutCenter){$(".activeLight").removeClass("activeLight"); $(".activeDark").removeClass("activeDark");}
  else if($(document).height() <= ($(window).height() + $(window).scrollTop()) + 50 ){setCursor($(".nav-item")[4]);}
  else if(x > aboutCenter && x <= skillsCenter){setCursor($(".nav-item")[0]);}
  else if(x > skillsCenter && x <= projectsCenter){setCursor($(".nav-item")[1]); console.log("skills");}
  else if(x > projectsCenter && x <= achCenter){setCursor($(".nav-item")[2]); console.log("proj");}
  else if(x > achCenter && x <= contactCenter){setCursor($(".nav-item")[3]); console.log("ach");}
})
//END NAVBAR TOGGLE

//HOME SECTION
  let d = new Date();
  if(d.getHours() < 5 || d.getHours() >= 18){
    $(".homeText h1").html("<h1>Good Evening!&nbsp&nbsp;<i class=\"fas fa-moon\"></i></h1>");
  }else if(d.getHours() >= 5 && d.getHours() < 12){
    $(".homeText h1").html("<h1>Good Morning!&nbsp;&nbsp;<i class=\"fas fa-sun\"></i></h1>");
  }else{
    $(".homeText h1").html("<h1>Good Afternoon!&nbsp;&nbsp;<i class=\"fas fa-coffee\"></i></h1>");
  }

  let str = ['It\'s so nice of you to come and visit!' ,'My name is Ahmed Hammad.','Here, you can know all about me.','Come on, take a tour.                           '];

  $(window).on('load', function(){
    TxtType($(".homeText h3")[0],str,1500);
  });


//CREDIT TO CSS TRICKS.
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = '';
    this.isDeleting = false;
    this.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerText = this.txt;

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function(){that.tick();}, delta);
    };
    this.tick();
};
//END HOME SECTION



//SKILLS SECTION
let techSkillsHeight = $(".tech-skills:first").offset().top - ($(window).height()*0.6);
let persSkillsHeight = $(".pers-skills:first").offset().top - ($(window).height()*0.8);
let setR=false,setB=false;

$(window).scroll(event=>{
  if($(document).scrollTop() > techSkillsHeight){progressRadialOn();}
  if($(window).scrollTop() > persSkillsHeight){ProgressBarOn();}
});

function progressRadialOn(){
  if(!setR){$(".c100").each((i,el)=>{setTimeout(updateCircle($(el)),100)});}
  setR=true;
}

function updateCircle(el){
  displayProgress($(el).attr("progress"),el);
}

function displayProgress(p,el){
  $(el).removeClass("p0");
  $(el).addClass("p"+p);
}

function ProgressBarOn(){
  if(!setB){$(".progress-bar").each((i,el)=>{setTimeout(lonenProgress($(el)),100)});}
  setB=true;
}

function lonenProgress(el){
  var val = $(el).attr("progress") + "%";
  $(el).attr("style","width: "+val);
}
//END SKILLS SECTION

//ACHIEVMENTS SECTION
let achHeight = $("#Achievments").offset().top - ($(window).height()*0.6);
$(window).scroll(event=>{
  if($(document).scrollTop() > achHeight){doMagic();}
});

var magicFlag = false;
function doMagic(){
  if(magicFlag){return;}
  $("#Achievments img").removeClass("pre-flipImages");
  $("#Achievments img").addClass("post-flipImages");
  magicFlag = true;
}
//END ACHIEVMENTS SECTION
