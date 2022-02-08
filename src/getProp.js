const reqUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'

const rates = {}

async function makingMoney( url = reqUrl) {
  const response = await fetch(url);

  const data = await response.json();

  const result = await data;
  
  rates.usd = result[0].buy
  rates.eur = result[1].buy


}

makingMoney()


export default rates
