var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = “age”;
var value = “20”;
window.localStorage.setItem( key, value );
var key = “bradage”;
var value = “21”;
window.localStorage.setItem( key, value );
var key = “zaibage”;
var value = “19”;
window.localStorage.setItem( key, value );
var key = “kateage”;
var value = “18”;
window.localStorage.setItem( key, value );
var key = “jasonage”;
var value = “26”;
window.localStorage.setItem( key, value );




//event defined
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application Launched: " + launched_count);
	$("#resumed").text("Application Paused: " + paused_count);
	$("#paused").text("Application Resumed: " + resumed_count);
    
    var key = “age”;
    var value = window.localStorage.getItem(key);
    $("#d1").text(key + "is: " + value);
    
    var key = “bradage”;
    var value = window.localStorage.getItem(key);
    $("#d2").text(key + "is: " + value);
    
    var key = “zaibage”;
    var value = window.localStorage.getItem(key);
    $("#d3").text(key + "is: " + value);
    
    var key = “kateage”;
    var value = window.localStorage.getItem(key);
    $("#d4").text(key + "is: " + value);
    
    var key = “jasonage”;
    var value = window.localStorage.getItem(key);
    $("#d5").text(key + "is: " + value);
    
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
