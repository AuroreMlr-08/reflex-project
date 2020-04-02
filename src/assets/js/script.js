
let ApparitionFirstInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex1'),
    handler: function() {
        var fall = document.getElementById('FirstBlocInfo');
        fall.classList.add('apparition-right');
    }
});

let ApparitionSecondInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex2'),
    handler: function() {
        var fall = document.getElementById('SecondBlocInfo');
        fall.classList.add('apparition-left');
    }
});

let ApparitionThirdInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex3'),
    handler: function() {
        var fall = document.getElementById('ThirdBlocInfo');
        fall.classList.add('apparition-right');
    }
});

let ApparitionFourthInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex4'),
    handler: function() {
        var fall = document.getElementById('FourthBlocInfo');
        fall.classList.add('apparition-left');
    }
});


window.onscroll = function() {myFunction()};

function myFunction() {
    var nb = screen.height/2;
    var mt;
    if (nb >450){
        mt = 20}
    else {
        mt=10;
    }
    var sizeBar = document.getElementById('scroll-bar').offsetHeight;
    var test = sizeBar/10 ;
    for (var i = 0; i < test ; i++) {
        if (document.body.scrollTop > nb * i || document.documentElement.scrollTop > nb * i ) {
            document.getElementById("scroll").style.marginTop = mt * i + 'px';
        }


    }

}

/*var nb = screen.height;
    var sizeBar = document.getElementById('scroll-bar').offsetHeight;
    var test = sizeBar/10;
    for (var i = 0;  i<90 ; i++) {
        if (document.body.scrollTop > 100  || document.documentElement.scrollTop >100 ) {
            document.getElementById("scroll").style.marginTop =  10*i + 'px';
        }


    }

}*/

