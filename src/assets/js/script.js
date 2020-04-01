
var ApparitionFirstInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex1'),
    handler: function() {
        var fall = document.getElementById('FirstBlocInfo');
        fall.classList.add('apparition-right');
    }
});

var ApparitionSecondInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex2'),
    handler: function() {
        var fall = document.getElementById('SecondBlocInfo');
        fall.classList.add('apparition-left');
    }
});

var ApparitionThirdInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex3'),
    handler: function() {
        var fall = document.getElementById('ThirdBlocInfo');
        fall.classList.add('apparition-right');
    }
});

var ApparitionFourthInfo = new Waypoint({
    element: ele = document.getElementById('photoReflex4'),
    handler: function() {
        var fall = document.getElementById('FourthBlocInfo');
        fall.classList.add('apparition-left');
    }
});
