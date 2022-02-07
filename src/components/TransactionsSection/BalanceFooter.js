import { Footer } from "./style";

export default function BalanceFooter({transactions}) {
  const total = handleTotalCalculate(); 

  function handleTotalCalculate() {
    if (transactions.length === 1) { 
      const isEntry = transactions[0].type === "entry";

      if (isEntry) {
        return Number(transactions[0].value);
      } else {
        return Number(transactions[0].value)*-1;
      }
    };
    
    let total = 0;

    transactions.forEach(t => {
      if (t.type === "entry") {
        total += Number(t.value);
      } else {
        total -= Number(t.value)
      }
    });
    console.log(total)

    return total;
  }

  function handleFormatValue(value) {
    let validValue = value < 0 ? (
      (value*-1).toString().replace(".", ",")
      ) : value.toString().replace(".", ",");
    
    if (validValue % 1 === 0 && !validValue.includes(",")) {
      validValue = `${validValue},00`;
    }

    return validValue;
  }

  return (
    <Footer total={total}>
      <span className="text">SALDO</span>
      <span className="total">{handleFormatValue(total)}</span>
    </Footer>
  )
}

