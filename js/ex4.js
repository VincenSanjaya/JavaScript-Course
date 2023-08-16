// 1
var shipments =
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

document.getElementById("shipments").onchange = function () {
    var selectedOption = document.getElementById("shipments").value;
    var leadTime = shipments[selectedOption].leadTime;
    var fee = shipments[selectedOption].fee;
    console.log(leadTime);
    console.log(fee);

    var orderDate = new Date();
    var deliveryDte = new Date(orderDate.getTime() + (86400000 * leadTime));

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0, 10);
    document.getElementById("delivery_date").innerHTML = deliveryDte.toISOString().slice(0, 10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);

    console.log(orderDate.toISOString().slice(0, 10));
    console.log(deliveryDte.toISOString().slice(0, 10));

}

//2

var phones =
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://unsplash.com/photos/_-V1uKUiu0M"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
    }
};

var radioItems = document.getElementsByName("product");

for (var a = 0; a < radioItems.length; a++) {
    radioItems[a].onchange = function () {
        for (var b = 0; b < radioItems.length; b++) {
            if (radioItems[b].checked) {
                var selectedRadio = radioItems[b].value;

                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + (phones[selectedRadio].price.toFixed(2)).toString();
                document.getElementById("phone_image").src = phones[selectedRadio].imageUrl;
            }
        }
    }
}

//3

var isRunning = false, startTime, currentTime, elapsedTime = 0, clockInterval, hours, minutes, seconds, remainder, formattedTime;

function addLeadZero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}
document.getElementById("start_stop").onclick = function () {
    if (!isRunning) {
        isRunning = true;

        if (elapsedTime == 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }

        clockInterval = window.setInterval(function () {
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);

            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);

            formattedTime = addLeadZero(hours) + ":" + addLeadZero(minutes) + ":" + addLeadZero(seconds) + ":" + addLeadZero(remainder);

            document.getElementById("stopwatch").innerHTML = formattedTime;
        }, 10);
    } else {
        window.clearInterval(clockInterval);
        isRunning = false;
    }
}

document.getElementById("reset").onclick = function () {
    startTime = new Date().getTime();

    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00:000";
    }
}
