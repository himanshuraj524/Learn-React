// This is our first custom component.
function ExpenseItem() {
    return(
        // In react function based components we cannot have multiple root elements, so for that we will create one element and inside that element we store all the other element. 
        <div>
            <div>March 28th 2021</div>
            <div>
                <h1>Car Insurance</h1>
                <div>$294.67</div>
            </div>
        </div>
    )
}

// here we will export this component by using default export`
export default ExpenseItem;