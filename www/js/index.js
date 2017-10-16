var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//event defined
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application Launched: " + launched_count);
	$("#resumed").text("Application Paused: " + paused_count);
	$("#paused").text("Application Resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	//event defined
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }

    // pause lifecycle event triggered
    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	
    // resume lifecycle event triggered
    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
