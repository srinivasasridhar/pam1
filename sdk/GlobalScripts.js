var greenHeader = 'background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ffffff), color-stop(100%, #81BF00)); background-image: -webkit-linear-gradient(left, #ffffff, #81BF00); background-image: -moz-linear-gradient(left, #ffffff, #81BF00); background-image: -o-linear-gradient(left, #ffffff, #81BF00); background-image: -ms-linear-gradient(left, #ffffff,#81BF00);  background-image: linear-gradient(left, #ffffff, #81BF00);';
var blueHeader = 'background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ffffff), color-stop(100%, #5CABFF)); background-image: -webkit-linear-gradient(left, #ffffff, #5CABFF); background-image: -moz-linear-gradient(left, #ffffff, #5CABFF); background-image: -o-linear-gradient(left, #ffffff, #5CABFF); background-image: -ms-linear-gradient(left, #ffffff,#5CABFF);  background-image: linear-gradient(left, #ffffff, #5CABFF);';
var orangeHeader = 'background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ffffff), color-stop(100%, #E59015)); background-image: -webkit-linear-gradient(left, #ffffff, #E59015); background-image: -moz-linear-gradient(left, #ffffff, #E59015); background-image: -o-linear-gradient(left, #ffffff, #E59015); background-image: -ms-linear-gradient(left, #ffffff,#E59015);  background-image: linear-gradient(left, #ffffff, #E59015);';

Ext.Ajax.request({
    url: '/Pam/res/IsSessionAvailable.aspx', method: 'post',
    success: function(response) {
        if (response.responseText != '')
            location.href = "../login.html";
    }
});