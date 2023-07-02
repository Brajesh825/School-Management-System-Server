import TransactionRow from "./transactionRow";

const TransactionListView = ({ filteredTransactions }) => {
  let no = 1;
  return (
    <>
      {filteredTransactions.map((transaction, index) => (
        <TransactionRow key={no++} id={no++} transaction={transaction} />
      ))}
    </>
  );
};

export default TransactionListView;
