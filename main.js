$(".menu a").on("click", function (e) { //smooth scroll 
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: ($(href).offset().top )}, 1400);
    console.log($("div#work").offset().left)
});
var logo = document.getElementById('logo');
logo.addEventListener('click',function(){
  $("html, body").animate({ scrollTop: $('div.content').offset().top }, 1400); /// logo smooth scroll to top 
});

/*(window.onload = function() {
  Particles.init({
    selector:'.midback',
    connectParticles:true,
    color:['#000000','#41494e'],
    maxParticles:1000,
  });
};*/

function logoanim (delay){
  var computedFontSize = parseInt(window.getComputedStyle(document.getElementById("H26")).fontSize);
  var var2 = computedFontSize+(computedFontSize * 0.15)
  anime({
  targets:['#H26'],
  height:['0',var2],  
  duration:1000,
  easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
  delay:delay,

});};

/**onload  */
window.addEventListener('load',function(){
   //text animation  for lc 
  const lowerc = document.getElementById('lower-content');
  lowerc.style.transition='background-color 1.4s ease'; 

  mid = anime({ //background animation 
    targets:['.midback'],
    width:['20vw','20vw',{value:'100vw',duration:600,delay:200,}],
    height:[{value:'20vh',duration:600},{value:'100vh',duration:600,}],
    scale:[0,1],
    duration:1800,
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
    direction:'normal',
    delay:800, 
  });

  logoanim(2200) //logo animations

  anime({ //date animation 
    targets:'.date',
    color:['#f5f5f5','rgb(0 0 0 / 0)'],
    duration:1400,
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
    delay:800,
    direction:'normal',
  });

  function emailinit(){ //cf initiation 
    emailjs.init("user_AUhoFsrWUYQXL9PGYDqAn");
  };
  let date = moment().format('YYYY');
  document.getElementById('ftr').innerHTML='&copy; '+date+' H26'; //footer copyright  date 

});

// card resize 
var rellax = new Rellax('.prlx',); // paralax initiation 

window.addEventListener('resize',function () { // resize  content logo  and cards
  logoanim(0);
  cardfi()
}); 

tella_t = function(){ // time function 
  var wid = window.innerWidth
  var tme = moment.tz('Europe/London').format('HH:m z').toString();
  var conc = "London "+tme
  document.getElementById("date").innerHTML = (tme);
  /*console.log(tme); */  
  /*console.log(wid," - width" ,conc );*/
};
tella_t();
setInterval(tella_t,15000);

/* */
/*object animation functions  */

function fade_in (){ // fade in text animation 
  anime({
    targets:['.fitxt',],
    translateY:['80%','0%'],
    opacity:[0,1],
    duration:1400,
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
    delay:anime.stagger(150),

  });
};

function colortd(){ //color turn to 'black'
  var logo = document.getElementById('logo');
  logo.style.webkitTextStroke = '1px #242526';
  anime({
    targets:['.menua','#twwht'],
    color:'#242526',
    duration:700,
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
  });
  
};

function colortb(){ //color turn back
  var logo = document.getElementById('logo');
  logo.style.webkitTextStroke = '1px #f5f5f5';
  anime({
    targets:['.menua','#twwht'],
    color:'#f5f5f5',
    duration:700,
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
  });
};


function cardfi() { // cards in work
  let crdheight = '60%' 
  if (window.innerHeight > window.innerWidth){ // card resize 
    crdheight = '40%'
    //console.log('smaller')
  }else{
    crdheight = '60%'
    //console.log('bigger')
  };

  anime({
    targets:['.wrkcards'],
    opacity:[0,1],
    translateX:['-100%','0%'],
    height:{
      value:['10%',crdheight],
      delay:anime.stagger(200,{start:600,}),
    },
    scale:[1],
    easing: 'cubicBezier(0.76, 0, 0.24, 1)',
    direction:'normal',
    duration:1200,
    delay:anime.stagger(150),
    complete:function(anim){
       $('.wrkcards').css({'transition':'transform 0.4s ease'});
      },
  });
};

const navbr = document.getElementsByClassName('nav');

function menusml(){ // change menu height
  navbr[0].style.minHeight = '4.5vh' ;
};
function menubg(){ //change menu height to normal height 
  navbr[0].style.minHeight = '7.5vh' ;
};

/*scroll triggers  */

ScrollTrigger.create({ // text fade in
  trigger:'#trigger_box',
  start:'top center+=10%',
  end:'top center+=10%',
  once:'True',
  markers:'True',
  onEnter:fade_in,
});

ScrollTrigger.create({ // cards in work 
  trigger:'#work',
  start:'top center+=10%',
  end:'top center+=10%',
  once:'True',
  markers:'True',
  onEnter:cardfi,
});

ScrollTrigger.create({ //menu and logo color 
  trigger:'#trigger_box',
  start:'top 10%',
  end:'top 10%',
  markers:'True',
  onEnter:colortd,
  onEnterBack:colortb,
});

ScrollTrigger.create({ // menu height
  trigger:'#trigger_box',
  start:'top 85%',
  end:'top 85%',
  onEnter:menusml,
  onEnterBack:menubg,
  markers:'True',
});

/*object fade in / out code end */

/* email section */
var empop =document.getElementById('empop');

document.getElementById('cont-form').addEventListener('submit',function(event){ // send email form 
  event.preventDefault();
  emailjs.sendForm('service_uve1fe8', 'template_8a31r9r','#cont-form',)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        empop.innerText = 'Sent';
        empop.style.background = '#242526';
        emailpop() // when the form is completed and sent succesfully show sent bar 
    }, function(error) {
      empop.style.background = 'red';
      empop.innerText = 'Error';
      emailpop()
      console.log('FAILED...', error);
    });
  this.reset()
});

function emailpop (){ // trigger a sent bar at the top once successfully
  anime({
    targets:['#empop',''],
    translateY:['-100%','0%'],
    duration:1400,
    direction: 'alternate',
    easing: 'cubicBezier(0.25, 0.1, 0.25, 1)',
  });
};
/* */




