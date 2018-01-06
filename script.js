document.querySelector("#nav_toggle").addEventListener( "click", function() {
  this.classList.toggle("active");
});

function whyTho(){
  alert("There's a freaking button over there, click it!");
}

let flag = true;
function navButton(){    
  
  if(flag){
      document.getElementById("overlay_id").style.width = "100%";
      flag = false;
      console.log("open");
    }else{
      document.getElementById("overlay_id").style.width = "0%";
      flag = true;
      console.log("close");
    }
  }

function heyhey(){
  
}

$(window).scroll(function(){
  // var setScroll = 206;
  // if($(window).scrollTop() == setScroll){
  //   setScroll = 0;
  //   setScroll++;
  //   $("div#about1").css({
  //     "left": setScroll + "px" 
  //   });
  // }
  console.log($(window).scrollTop());
  if($(window).scrollTop() >= 311){
    $("div#about1").css({
      "left": -6 + "%"
    });

    $("div#about1_id").css({
      "right": 2 + "%"
    });

    $("div#about2_id").css({
      "right": 2 + "%"
    });

    // $("img#first_content_img").css({
    //   "visibility": "visible"
    // })
  
  }else{
    $("div#about1").css({
      "left": -50 + "%"
    });

    $("div#about1_id").css({
      "right": -30 + "%"
    });

    $("div#about2_id").css({
      "right": -30 + "%"
    });

    // $("img#first_content_img").css({
    //   "visibility": "hidden"
    // })
  }
});

