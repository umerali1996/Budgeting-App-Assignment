let totalBudget = 0;
let totalExpense = 0;
let remainingBudget = 0;

function budgetAmount() {
    // Get budget input value
    let inputBudgetValue = parseFloat(document.getElementsByName('budget')[0].value);

    if (isNaN(inputBudgetValue)) {
        // Show error message
        document.getElementById('errorMessage').textContent = "Please enter a valid number";
        return false;
    }

    // Add current budget to total budget
    totalBudget += inputBudgetValue;
    remainingBudget = totalBudget;

    // Show amount in budgetAmount
    document.getElementById('budgetAmount').textContent = totalBudget.toFixed(2);

    // Also display budget amount in remaining budget
    document.getElementById('remainingBudget').textContent = remainingBudget.toFixed(2);


    // Clear budget input field
    document.getElementsByName('budget')[0].value = "";

    // Hide error message if previously shown
    document.getElementById('errorMessage').textContent = "";

    // Prevent form submission
    return false;
}

function showUpdateField() {
    document.getElementById('updateField').style.display = "block";
}

function updateBudgetAmount() {
    let newBudgetAmount = parseFloat(document.getElementById('newBudgetAmount').value);
    let budgetAmountElement = document.getElementById('budgetAmount');

    if (!isNaN(newBudgetAmount)) {
        budgetAmountElement.textContent = newBudgetAmount.toFixed(2);
    }

    document.getElementById('newBudgetAmount').value = "";
    document.getElementById('updateField').style.display = "none";

    totalBudget = newBudgetAmount;
    remainingBudget = totalBudget - totalExpense;

    document.getElementById('remainingBudget').textContent = remainingBudget.toFixed(2);
}


const expenses = [];

// Push array data into Div



function pushData() {
    // Get the form elements
    let description = document.getElementsByName('description')[0].value;
    let amount = parseFloat(document.getElementsByName('expense')[0].value);
    let date = document.getElementsByName('date')[0].value;
    let category = document.getElementsByName('category')[0].value;
    
    if (isNaN(amount)) {
        // Show error message
        document.getElementById('errorMessageTwo').textContent = "Please enter a valid number";
        return false;
    }
  
    // Hide error message if previously shown
    document.getElementById('errorMessageTwo').textContent = "";
  
    // Create a budget object
    const expense = {
        category: category,
        description: description,
        amount: amount,
        date: date
    };
  
    // Add the budget object to the expenses array
    expenses.push(expense);
  
    // Create the expense display HTML
    const expenseHTML = `
        <div class="expense-item">
            <div>${expense.category}</div>
            <div>${expense.description}</div>
            <div>$${expense.amount.toFixed(2)}</div>
            <div>${expense.date}</div>
        </div>
        <hr class="hr">
    `;
  
    // Append the expense HTML to the expense display
    document.getElementById('expenseDisplay').innerHTML += expenseHTML;
  
    // Calculate the updated total expenses
    totalExpense += amount;
  
    // Show amount in expenseAmount
    document.getElementById('expenseAmount').textContent = totalExpense.toFixed(2);
  
    remainingBudget = totalBudget - totalExpense;
  
    document.getElementById('remainingBudget').textContent = remainingBudget.toFixed(2);
  
    // Clear the form fields
    document.getElementById('addExpense').reset();
  
    // Prevent form submission
    return false;
}

// const categories = ["Home", "Health", "Groceries", "Shopping"];

function showAddCategory() {
    document.getElementById('addCategory').style.display = "block";
}

function addCategory() {
    let addCategory = document.getElementsByName('addNewCategory')[0].value;
    let prevCategory = document.getElementsByName('category')[0];
    let option = document.createElement('option');

    option.value = addCategory;
    option.textContent = addCategory;

    prevCategory.appendChild(option);

        // Clear the input field
        document.getElementsByName('addNewCategory')[0].value = "";
  
        // Hide the addCategory div
        document.getElementById('addCategory').style.display = "none";
      
        // Prevent form submission
        return false;
}
