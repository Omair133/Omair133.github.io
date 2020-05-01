$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});


$("#navto-one").click(function(){
	$.scrollify.move("#1");
   
});
$("#navto-two").click(function(){
	$.scrollify.move("#2");
});
$("#navto-three").click(function(){
	$.scrollify.move("#3");
});
$("#navto-four").click(function(){
	$.scrollify.move("#4");
});
$("#navto-five").click(function(){
    $.scrollify.move("#5");
});
$("#navto-six").click(function(){
    $.scrollify.move("#6");
});
$(".arrow-down").click(function(){
	$.scrollify.next();
});
$(".logo").click(function(){
    $.scrollify.move("#1");
});


$("#_navto-one").click(function(){
    $.scrollify.move("#1");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});
$("#_navto-two").click(function(){
    $.scrollify.move("#2");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});
$("#_navto-three").click(function(){
    $.scrollify.move("#3");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});
$("#_navto-four").click(function(){
    $.scrollify.move("#4");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});
$("#_navto-five").click(function(){
    $.scrollify.move("#5");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});
$("#_navto-six").click(function(){
    $.scrollify.move("#6");
     $('.nav-menu').removeClass('unhide');
     $('.hamburger').removeClass('rotate-ham');
});

$('.hamburger').click(function(){
    $(this).toggleClass('rotate-ham');
    $('.nav-menu').toggleClass('unhide');
});



/*$(window).scroll(function(){
	if($(window).scrollTop() == 0)
		$('.navto-one-li').addClass('effect');
	else
		$('.navto-one-li').removeClass('effect');

	if($(window).scrollTop() == $(".page-one").height())
    {
		$('svg').css('opacity','1');
        var mySVG = $('svg').drawsvg();
        mySVG.drawsvg('animate');
        $('.navto-two-li').addClass('effect');
    }
	else
	{
        $('svg').css('opacity','0');
		$('.navto-two-li').removeClass('effect');
	}
	if($(window).scrollTop() == ($(".page-one").height() + $(".page-two").height()))
	{
		$('.navto-three-li').addClass('effect');
	}
	else
		$('.navto-three-li').removeClass('effect');

	var PageOneTwoThree = $(".page-one").height() + $(".page-two").height() + $(".page-three").height();
	if($(window).scrollTop() == PageOneTwoThree)
		$('.navto-four-li').addClass('effect');
	else
		$('.navto-four-li').removeClass('effect');
	
	var PageOneTwoThreeFour = $(".page-one").height() + $(".page-two").height() + $(".page-three").height() + $(".page-four").height();
	if($(window).scrollTop() == PageOneTwoThreeFour)
		$('.navto-five-li').addClass('effect');
	else
		$('.navto-five-li').removeClass('effect');

	var PageOneTwoThreeFourFive = $(".page-one").height() + $(".page-two").height() + $(".page-three").height() + $(".page-four").height() + $(".page-five").height();
	if($(window).scrollTop() == PageOneTwoThreeFourFive)
		$('.navto-six-li').addClass('effect');
	else
		$('.navto-six-li').removeClass('effect');
});*/

$(".banner").mousemove(function(e){
	var moveX = (e.pageX * -1/15);
	var moveY = (e.pageY * -1/15);
	$(this).css("background-position", moveX + "px " + moveY + "px");
});

//SKILLS ANIMATION MOUSE MOVE 

canvas = document.getElementsByTagName('canvas')[0];
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext('2d');



/*Modify options here*/

//possible characters that will appear
var characterList = ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL', 'C Programming','Java', 'Bootstrap', 'jQuery', 'Ajax'];

//stocks possible character attributes
var layers = {
    n: 1, //number of layers
    letters: [150], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
    size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
    color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
    font: 'Courier' //font family (of every layer)
};

/*End of options*/



var characters = [];
var mouseX = document.body.clientWidth/2;
var mouseY = document.body.clientHeight/2;

var rnd = {
    btwn: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
        return list[rnd.btwn(0, list.length)];
    }
};



/*LETTER DRAWING*/

function drawLetter(char) {
    ctx.font = char.size + 'px ' + char.font;
    ctx.fillStyle = char.color;
    
    var x = char.posX + (mouseX-canvas.width/2)*char.coef;
    var y = char.posY + (mouseY-canvas.height/2)*char.coef;

    ctx.fillText(char.char, x, y);
}



/*ANIMATION*/

document.onmousemove = function(ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
        requestAnimationFrame(update);
    } else {
        update();
    }
};

function update() {
    clear();
    render();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    for (var i = 0; i < characters.length; i++) {
        drawLetter(characters[i]);
    }
}



/*INITIALIZE*/

function createLetters() {
    for (var i = 0; i < layers.n; i++) {
        for (var j = 0; j < layers.letters[i]; j++) {

            var character = rnd.choose(characterList);
            var x = rnd.btwn(0, canvas.width);
            var y = rnd.btwn(0, canvas.height);

            characters.push({
                char: character,
                font: layers.font,
                size: layers.size[i],
                color: layers.color[i],
                layer: i,
                coef: layers.coef[i],
                posX: x,
                posY: y
            });

        }
    }
}

createLetters();
update();



/*REAJUST CANVAS AFTER RESIZE*/

window.onresize = function() {
    location.reload();
};

document.getElementById('close').onclick = function() {
    this.parentElement.style.visibility = 'hidden';
    this.parentElement.style.opacity = '0';
};



