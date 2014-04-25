//Event Handlers

$('#reqSMS').click(function (e) {
    e.preventDefault();
    $('#simple-pay-view').hide();
    $('#sms-authentic-view').show();
    startcountdown();
    console.log('test');
})




//Utility function
function startcountdown(){
     $('#countdown-ctrl').countdown({
          image: 'img/digits.png',
          startTime: '02:00',
          timerEnd: function(){  },
          format: 'mm:ss'
        });
}
