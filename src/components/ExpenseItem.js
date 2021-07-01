import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2020</div>
            <div className="expense-item_description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">$250.23</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
