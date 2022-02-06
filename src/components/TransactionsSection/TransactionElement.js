import { TransactionContainer } from "./style";

export default function TransactionElement({ date, description, value, type }) {
  return (
    <TransactionContainer type={type}>
      <span className="date">{date} </span>
      <span className="description">{description}</span>
      <span className="value">{value.replace(".", ",")}</span>
    </TransactionContainer>
  )
}

