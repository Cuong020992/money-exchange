

function moneyExchange()
{
    //var vn = fromOption.options[fromOption.selectedIndex].value
    //var usd = +document.getSelection(value="usd").value;
    var result;
    var money = +document.getElementById('inputMoney').value;
    var fromOption = document.getElementById("from").value;
    var toOption = document.getElementById("to").value;

    if (fromOption == "vn" && toOption =="usd")
  {
    result = money / 25;
      document.getElementById("result").innerHTML = "Result: "+result+"USD";
  }
    if(fromOption=="vn" && toOption== "vn")
    {
        result = money/1;
        document.getElementById("result").innerHTML = "Result: "+result+"VND";

    }
    if(fromOption=="usd" && toOption =="vn")
    {
        result = money * 25;
        document.getElementById("result").innerHTML = "Result: "+result+"VND";

    }
    if(fromOption == "usd" && toOption =="usd" )
    {
        result = money * 1;
        document.getElementById("result").innerHTML = "Result: "+result+"USD";
    }


}
