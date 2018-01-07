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

    $("#first_content_img").css("opacity", "1");
  
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

    $("#first_content_img").css("opacity", "0");
  }

  if($(window).scrollTop() >= 311 && $(window).width() <= 412){
    $("div#about1").css({
      "left": 30 + "%"
    });

    $("div#about1_id").css({
      "right": 2 + "%"
    });

    $("div#about2_id").css({
      "right": 2 + "%"
    });

    $("#first_content_img").css("opacity", "1");
  
  }else{
    $("div#about1").css({
      "left": "",
      "margin-left": -20 + "%"
    });

    $("div#about1_id").css({
      "right": -30 + "%"
    });

    $("div#about2_id").css({
      "right": -30 + "%"
    });

    $("#first_content_img").css("opacity", "0");
  }

  if($(window).scrollTop() >= 872){
    $("span#span2").css({
      "width": 100 + "px"
    });
  }else{
    $("span#span2").css({
      "width": 0 + "px"
    });
  }
});

