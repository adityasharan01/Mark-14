var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var submitBtn = document.querySelector("#btn");
var outputBox = document.querySelector("#display-output");
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var cp = Number(currentPrice.value);
  var sq = Number(stocksQuantity.value);
  if (ip < 0 || cp < 0 || sq < 0) {
    outputBox.innerHTML = `Values below zero are not allowed`;
    return;
  }
  calculateProfitAndLoss(ip, sq, cp);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputBox.innerHTML = `You made a loss of: ₹${loss} <br> You lost: ${lossPercentage.toFixed(2)} % <br> 😕😕`;
    console.log(
      `Loss hai yeh ${loss} and the percentage is ${lossPercentage.toFixed(
        2
      )}% `
      
    );
    document.body.style.backgroundColor = 'red';
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputBox.innerHTML = `You made a profit of: ₹${profit} <br> You gained: ${profitPercentage.toFixed(2)} %  <br> 💸💸`;
    console.log(
      `Profit hai yeh ${profit} and the percentage is ${profitPercentage.toFixed(
        2
      )} %`

    )
    document.body.style.backgroundColor = '#2ecc71';
  } else {
    outputBox.innerHTML = "Atleast Fill Something DUDE What is this behaviour of clicking button ?";
  }
}

