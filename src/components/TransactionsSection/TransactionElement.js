import { Transaction } from "./style";

export default function TransactionElement({ date, description, value, type }) {
  return (
    <Transaction type={type}>
      <span className="date">{date}</span>
      <span className="description">{description}</span>
      <span className="value">{value}</span>
    </Transaction>
  )
}

