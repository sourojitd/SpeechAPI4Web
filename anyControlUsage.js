<script src="https://unpkg.com/anycontrol/dist/index.umd.min.js"></script>
<script>
  var ctrl = new anycontrol()
 
  ctrl.addCommand("previous page", function() {
    console.log('Go to previous page')
  });
 
  ctrl.addCommand("next page", function () {
    console.log('Go to next page')
  });
 
  ctrl.start();
</script> 