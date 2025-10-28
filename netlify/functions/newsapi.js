exports.handler = async function(event) {
  const API_KEY = process.env.NEWSAPI_KEY;
  if (!API_KEY) return { statusCode: 500, body: JSON.stringify({ error: "Missing NEWSAPI_KEY" }) };
  const url = `https://newsapi.org/v2/everything?q=crypto&language=en&pageSize=5&apiKey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const simplified = data.articles.map(a => ({ title: a.title, source: a.source.name, url: a.url }));
  return { statusCode: 200, headers: {"Content-Type":"application/json"}, body: JSON.stringify(simplified) };
};
