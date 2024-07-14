document.getElementById('convertBtn').addEventListener('click', function() {
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const temperature = parseFloat(document.getElementById('celsius').value);

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature');
        return;
    }

    let result;

    switch (unitFrom) {
        case 'celsius':
            result = temperature;
            break;
        case 'fahrenheit':
            result = (temperature - 32) * (5 / 9);
            break;
        case 'kelvin':
            result = temperature - 273.15;
            break;
    }

    switch (unitTo) {
        case 'celsius':
            result = result;
            break;
        case 'fahrenheit':
            result = (result * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = result + 273.15;
            break;
    }

    document.getElementById('temperature').value = result.toFixed(2);
});
