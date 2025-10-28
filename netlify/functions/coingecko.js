exports.handler = async function(event) {
  const vs_currency = (event.queryStringParameters || {}).vs_currency || 'usd';
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`;
  const res = await fetch(url);
  const data = await res.json();
  return { statusCode: 200, headers: {"Content-Type":"application/json"}, body: JSON.stringify(data) };
};
