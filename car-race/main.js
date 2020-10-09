canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var car1_height = 120;

var car1_width = 70;

var car1_image = "racecar.jpg"

var car1_x = 10;

var car1_y = 10;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var car2_height = 120;

var car2_width = 70;

var car2_image = "racecar2.png"

var car2_x = 10;

var car2_y = 100;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

background_image = "racingimage.jpg"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add(){
    background_imgtag = new image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_Y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_Y,car2_width,car2_height);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
window.addEventListener("keydown",my_keydown);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function my_keydown(e){


    keypressed = e.keyCode; 
    
    
    console.log(keypressed)


    if (keypressed=='38'){
        console.log("car 1 up");
        car1_up();
    }
    if (keypressed=='40'){
        console.log("car 1 down");
        car1_down();
    }
    if (keypressed=='37'){
        console.log("car 1 left");
        car1_left();
    }
    if (keypressed=='39'){
        console.log("car 1 right");
        car1_right();
    }
    ////////////////////////


    if (keypressed=='87'){
    console.log("car 2 up");
    car2_up();
    }
    if (keypressed=='83'){
    console.log("car 2 down");
    car2_down();
    }
    if (keypressed=='65'){
    console.log("car 2 left");
    car2_left();
    }
    if (keypressed=='68'){
    console.log("car 2 right");
    car2_right();
    }

}

