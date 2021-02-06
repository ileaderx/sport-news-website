$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
// Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 5;
    var w = $(window).width() - 5;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

//Animate the divider
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

// Stop the divider
function stopdiv(){
  onmouseover($('.a').stop())
};

// Hide the divider
function hide(){
  document.getElementById('card').style.display="none"
}

// Set speed
function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.2;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

// Navbar Script
$(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
      $('.dropdown-menu').slideToggle(300, "linear");
    });
    
    $('.dropdown-menu').mouseleave(function() {
      $(this).slideToggle(300, "linear");
    });
  });


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}  


var like_button = document.getElementById("like-button");
if (like_button) {
    like_button.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}


$(function() {
  $( ".like-icon1" ).click(function() {
    $( ".like-icon1" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon2" ).click(function() {
    $( ".like-icon2" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon3" ).click(function() {
    $( ".like-icon3" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon4" ).click(function() {
    $( ".like-icon4" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon5" ).click(function() {
    $( ".like-icon5" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon6" ).click(function() {
    $( ".like-icon6" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon7" ).click(function() {
    $( ".like-icon7" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon8" ).click(function() {
    $( ".like-icon8" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon9" ).click(function() {
    $( ".like-icon9" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon10" ).click(function() {
    $( ".like-icon10" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon11" ).click(function() {
    $( ".like-icon11" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon12" ).click(function() {
    $( ".like-icon12" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".like-icon13" ).click(function() {
    $( ".like-icon13" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon1" ).click(function() {
    $( ".save-icon1" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon2" ).click(function() {
    $( ".save-icon2" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".save-icon3" ).click(function() {
    $( ".save-icon3" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon4" ).click(function() {
    $( ".save-icon4" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon5" ).click(function() {
    $( ".save-icon5" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon6" ).click(function() {
    $( ".save-icon6" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon7" ).click(function() {
    $( ".save-icon7" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon8" ).click(function() {
    $( ".save-icon8" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".save-icon9" ).click(function() {
    $( ".save-icon9" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon10" ).click(function() {
    $( ".save-icon10" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon11" ).click(function() {
    $( ".save-icon11" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".save-icon12" ).click(function() {
    $( ".save-icon12" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".save-icon13" ).click(function() {
    $( ".save-icon13" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon1" ).click(function() {
    $( ".share-icon1" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon2" ).click(function() {
    $( ".share-icon2" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".share-icon3" ).click(function() {
    $( ".share-icon3" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon4" ).click(function() {
    $( ".share-icon4" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon5" ).click(function() {
    $( ".share-icon5" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon6" ).click(function() {
    $( ".share-icon6" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon7" ).click(function() {
    $( ".share-icon7" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon8" ).click(function() {
    $( ".share-icon8" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".share-icon9" ).click(function() {
    $( ".share-icon9" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon10" ).click(function() {
    $( ".share-icon10" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon11" ).click(function() {
    $( ".share-icon11" ).toggleClass( "press", 1000 );
  });
});
$(function() {
  $( ".share-icon12" ).click(function() {
    $( ".share-icon12" ).toggleClass( "press", 1000 );
  });
});$(function() {
  $( ".share-icon13" ).click(function() {
    $( ".share-icon13" ).toggleClass( "press", 1000 );
  });
});
