function calculateImpermanentLoss(initialPrice, currentPrice, tickLower, tickUpper) {
  const X96 = BigInt(2) ** BigInt(96);
  const sqrtPriceLower = BigInt(Math.round((1 / tickLower) * X96));
  const sqrtPriceUpper = BigInt(Math.round((1 / tickUpper) * X96));
  const sqrtPriceCurrent = BigInt(Math.round(initialPrice * currentPrice * X96));

  const lowerThreshold = sqrtPriceCurrent >= sqrtPriceLower;
  const upperThreshold = sqrtPriceCurrent <= sqrtPriceUpper;

  if (lowerThreshold && upperThreshold) {
    return 0; // No impermanent loss
  }

  const amount0 = Number(sqrtPriceUpper - sqrtPriceLower) / X96;
  const amount1 = Number((sqrtPriceLower * sqrtPriceUpper) / X96);

  const liquidityRatio = lowerThreshold ? amount1 / (currentPrice * amount0) : amount0 / (amount1 * currentPrice);
  const impermanentLoss = 1 - liquidityRatio;

  return impermanentLoss;
}

const calculatorForm = document.getElementById("calculator");
const resultDiv = document.getElementById("result");

calculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const initialPrice = parseFloat(document.getElementById("initialPrice").value);
  const currentPrice = parseFloat(document.getElementById("currentPrice").value);
  const tickLower = parseFloat(document.getElementById("tickLower").value);
  const tickUpper = parseFloat(document.getElementById("tickUpper").value);

  const impermanentLoss = calculateImpermanentLoss(initialPrice, currentPrice, tickLower, tickUpper);

  resultDiv.innerHTML = `Impermanent Loss: ${(im


