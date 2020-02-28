const DateTime = luxon.DateTime;  
const now = DateTime.local();

function worldTime() {

  const myDate = now.setLocale("de").toLocaleString(DateTime.DATE_HUGE);

  const minute = now.toFormat("mm");
  const hoursMIA = now.setZone("America/New_York").toFormat("HH");
  const hoursBER = now.setZone("Europe/Berlin").toFormat("HH");
  const hoursLON = now.setZone("Europe/London").toFormat("HH");
  const hoursBKK = now.setZone("Asia/Bangkok").toFormat("HH");
  const hoursSHA = now.setZone("Asia/Shanghai").toFormat("HH");
  const hoursMEL = now.setZone("Australia/Melbourne").toFormat("HH");

  $("#cal h1").html(myDate);

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
