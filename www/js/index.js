var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = “age”;
var value = “20”;
var key2 = “bradage”;
var value2 = “21”;
var key3 = “zaibage”;
var value3 = “19”;
var key4 = “kateage”;
var value4 = “18”;
var key5 = “jasonage”;
var value5 = “26”;

window.localStorage.setItem( key, value );


window.localStorage.setItem( key2, value2 );


window.localStorage.setItem( key3, value3 );


window.localStorage.setItem( key4, value4 );


window.localStorage.setItem( key5, value5 );

//event defined
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application Launched: " + launched_count);
	$("#resumed").text("Application Paused: " + paused_count);
	$("#paused").text("Application Resumed: " + resumed_count);
    
    var key = “age”;
    var value = window.localStorage.getItem(key);
    $("#launched").text(key + "is: " + value);
    
    var key2 = “bradage”;
    var value2 = window.localStorage.getItem(key2);
    $("#launched").text(key2 + "is: " + value2);
    
    var key3 = “zaibage”;
    var value3 = window.localStorage.getItem(key3);
    $("#launched").text(key3 + "is: " + value3);
    
    var key4 = “kateage”;
    var value4 = window.localStorage.getItem(key4);
    $("#launched").text(key4 + "is: " + value4);
    
    var key5 = “jasonage”;
    var value5 = window.localStorage.getItem(key5);
    $("#launched").text(key5 + "is: " + value5);
    
    //var key = “pen”;
    //var value = window.localStorage.getItem(key);

}


// device APIs are available
//
    function onDeviceReady() {
	//event defined
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();

    }

    // pause lifecycle event triggered
    function onPause() {
	
	paused_count++;
	updateDisplay();

    }
	
    // resume lifecycle event triggered
    function onResume() {
		
	resumed_count++;
	updateDisplay();

    }
