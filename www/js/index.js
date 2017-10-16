var paused_count =0;
var resumed_count = 0;
var launched_count = 0;






//event defined
document.addEventListener("deviceready", onDeviceReady, false);
		



function updateDisplay() {
    
    var key = "age";
    var value = "20";
    window.localStorage.setItem( key, value );
    key = "bradage";
    value = "21";
    window.localStorage.setItem( key, value );
    key = "zaibage";
    value = "19";
    window.localStorage.setItem( key, value );
    key = "kateage";
    value = "18";
    window.localStorage.setItem( key, value );
    key = "jasonage";
    value = "26";
    window.localStorage.setItem( key, value );
    
	$("#launched").text("Application Launched: " + launched_count);
	$("#resumed").text("Application Paused: " + paused_count);
	$("#paused").text("Application Resumed: " + resumed_count);
    
    key = "age";
    value = window.localStorage.getItem(key);
    $("#d1").text(key + "is: " + value);
    
    key = "bradage";
    value = window.localStorage.getItem(key);
    $("#d2").text(key + "is: " + value);
    
    key = "zaibage";
    value = window.localStorage.getItem(key);
    $("#d3").text(key + "is: " + value);
    
    key = "kateage";
    value = window.localStorage.getItem(key);
    $("#d4").text(key + "is: " + value);
    
    key = "jasonage";
    value = window.localStorage.getItem(key);
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
