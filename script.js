var DateTime = luxon.DateTime;

function worldTime() {
  var now = DateTime.local();
  var nowDate = now.setLocale("de").toLocaleString(DateTime.DATE_HUGE);

  var minute = now.toFormat("mm");
  var hoursMIA = now.setZone("America/New_York").toFormat("HH");
  var hoursBER = now.setZone("Europe/Berlin").toFormat("HH");
  var hoursLON = now.setZone("Europe/London").toFormat("HH");
  var hoursBKK = now.setZone("Asia/Bangkok").toFormat("HH");
  var hoursSHA = now.setZone("Asia/Shanghai").toFormat("HH");
  var hoursMEL = now.setZone("Australia/Melbourne").toFormat("HH");

  $("#cal h1").html(nowDate);

  $("#MIA h1").html("<span class='hour'>" + hoursMIA + "</span><br>" + minute);
  $("#LON h1").html("<span class='hour'>" + hoursLON + "</span><br>" + minute);
  $("#BER h1").html("<span class='hour'>" + hoursBER + "</span><br>" + minute);
  $("#BKK h1").html("<span class='hour'>" + hoursBKK + "</span><br>" + minute);
  $("#MEL h1").html("<span class='hour'>" + hoursMEL + "</span><br>" + minute);
  $("#SHA h1").html(
    "<span class='hour'>" + hoursSHA + "<br>" + minute + "</span>"
  );
  setTimeout(worldTime, 20000);
}
