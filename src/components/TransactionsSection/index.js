import { Section } from "./style";
import TransactionElement from "./TransactionElement";

export default function TransactionsSection({ transactions }) {
  const transactionsList = transactions?.map(t => <TransactionElement {...t}/>);
  const defaultElement = <p>Não há registros de<br/>entrada ou saída</p>;

  return (
    <Section>
      {transactions?.length > 0 ? transactionsList : defaultElement}
    </Section>
  )
}

