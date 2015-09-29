
function animateLogo () {
	TweenMax.fromTo('#react-logo', 3, {
		css: {
			y: "0px"
		}
	}, {
		css: {
			y: "40px"
		},
		repeat: -1,
		yoyo: true,
		ease: Power2.easeInOut
	});
}

function animateRobot () {
	var t = new  TimelineMax({yoyo: true, repeat: -1});
	t.to("#android-robot", 1, {rotation: "-67.5deg"}).to("#android-robot",1,{rotation:"-22.5deg"});

}


function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var section_name = link.getAttribute('href');
    

    // Get the section pointed to by the link
    var section = document.querySelector(section_name);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetHeight + sectionTop;

   
    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    (function (_link) {
    	_link.addEventListener('click', function (event) {
    		var href = _link.getAttribute('href');
    		var section_node = document.querySelector(href);
    		scrollToElement(section_node);
    		event.preventDefault();
    	})
    })(link)
  }
}

// Use the onscroll callback to update slider.
window.onscroll = function() {
  // ...
  updateSliderControl();
}
window.onload = function () {
	// 图标运动
	animateLogo();
	// 机器人图标运动
	animateRobot();
	//
	updateSliderControl();
	// 点击平滑过度
    addSmoothScrolling();
}