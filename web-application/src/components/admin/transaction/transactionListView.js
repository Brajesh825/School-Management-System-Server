import TransactionRow from "./transactionRow";

const TransactionListView = ({ filteredTransactions }) => {
  let no = 1;
  return (
    <>
      {filteredTransactions.map((transaction, index) => (
        <TransactionRow key={transaction._id} sno={no++} transaction={transaction} />
      ))}
    </>
  );
};

export default TransactionListView;
