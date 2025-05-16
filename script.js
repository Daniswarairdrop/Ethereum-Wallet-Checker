async function getBalance(address) {
  const apiKey = "YOUR_ETHERSCAN_API_KEY";
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const eth = data.result / 1e18;
  document.getElementById("balance").innerText = `Balance: ${eth} ETH`;
}
