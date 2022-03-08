
    var displayBox = document.getElementById('display');

    function getValue(e){
        displayBox.value += e.target.innerText;
    }

    function calculate(){
        let cal = displayBox.value;
        displayBox.value = eval(cal);
    }

    function clearBox(){
        displayBox.value = '';
    }