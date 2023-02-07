$(document).ready(function() {
  var hitData = false;
  var ref = new Firebase('https://mooplay-id-default-rtdb.firebaseio.com);

  var hitRef = new Firebase('https://mooplay-id-default-rtdb.firebaseio.com/total');
  hitRef.transaction(function(total) {
    return total + 1;
  });

  var redirectRef = new Firebase('https://mooplay-id-default-rtdb.firebaseio.com/redirected');

  ref.on("value", function(snapshot) {
    gotData = true;
    hitData = snapshot.val();
    updatePage();
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  function initPage() {
    if (hitData) {
      updatePage();
      var percent = (hitData.redirected / hitData.total * 100).toFixed(2);
      if (percent <= hitData.rule) redirectUser();

    } else {
      console.log("No data yet...")
      setTimeout(initPage, 300)
    }
  }

  function updatePage() {
    var $hits = $(".total");
    var $red = $(".redirections");
    var $perc = $(".percentage");
    var $aim = $(".aiming");
    var percent = (hitData.redirected / hitData.total * 100).toFixed(2);
    
    $hits.text(hitData.total);
    $red.text(hitData.redirected);
    $perc.text(percent);
    $aim.text(hitData.rule);
    updated();
  }

  function redirectUser() {
    redirectRef.transaction(function(redirected) {
      return redirected + 1;
    });
  }
  
  function updated() {
    $(".outputs").removeClass("updated");
    setTimeout( function  () {
      $(".outputs").addClass("updated");
    }, 50)
  }
  
  initPage();

})