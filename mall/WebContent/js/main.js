//Event Handlers
$('#payment-view a[href="#simple-pay"]').on('show.bs.tab', function (e) {
  $('#simple-pay').load('sub/simplepay.html',function(e){
      initPaymenModal();
  });
})

$('#payment-view a[href="#secure-pay"]').on('show.bs.tab', function (e) {
  $('#secure-pay').load('sub/securepay.html',function(e){

  });
})


$('#payment-view a[href="#app-pay"]').on('show.bs.tab', function (e) {
  $('#app-pay').load('sub/apppay.html',function(e){

  });
})


$('#vertical-layout').on('show.bs.modal',function(e){
    $('#simple-pay').load('sub/simplepay.html',function(e){
      initPaymenModal();
  });
})

$('#getcard').click(function(e){
    //view
    $('#simple-basic-data').hide();
    $('#simple-reqPayment').show();
    $('#simple-smsauthcounter').hide();

    //button
    $('#getcard').hide();
    $('#reqSMSAuth').show();
    $('#payment').hide();
})

//reqSMSAuth
$('#reqSMSAuth').click(function(e){
    //view
    $('#simple-basic-data').hide();
    $('#simple-reqPayment').hide();
    $('#simple-smsauthcounter').show();
    //button
    $('#getcard').hide();
    $('#reqSMSAuth').hide();
    $('#payment').show();

    startCountDown(120);
})

function initPaymenModal(){
    //process view init
    $('#simple-basic-data').show();
    $('#simple-reqPayment').hide();
    $('#simple-smsauthcounter').hide();

    //button init
    $('#getcard').show();
    $('#reqSMSAuth').hide();
    $('#payment').hide();
}

var timerID;
function startCountDown(duration){
    var ending = new Date();
    clearInterval(timerID);
    $('#counter').text("02:00");
    timerID = window.setInterval(function(){
        duration --;
        var sec="";
        var msg = "";
        if(0>= duration){
            clearInterval(timerID);
            $('#counter').text("00:00");
            return;
        }else if(60 <= duration){
            sec=(duration - 60).toString();
            msg = "01:"+(sec[1]?sec:"0"+sec[0]);
        }else {
            sec=duration.toString();
            msg = "00:"+(sec[1]?sec:"0"+sec[0]);
        }
        $('#counter').text(msg);
    },1000);
}
