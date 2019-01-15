# SpeechAPI4Web
This is a sample project which demonstrates the usage of webkit speech API for commands in any web page. 
Also, I have added the source of AnyControl command api for specch. Using this, we can add commands to a webpage as follows:
 
  var ctrl = new anycontrol();
		
  ctrl.addCommand("previous page", function() {
    console.log('Go to previous page')
  });
		
  ctrl.addCommand("next page", function () {
    console.log('Go to next page')
  });
		
  ctrl.start();

