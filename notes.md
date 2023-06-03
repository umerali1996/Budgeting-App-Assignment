-> Functionality:

    - Add a monthly budget
    - Record expenses (description, amount, date)
    - Display Data (expense description, amount, date)
    - Calculate remaining budget (subtract the total expenses from the monthly budget)
    - Edit or delete expenses, generate expense report

-> Logic Building and Implementation of the Project

    - Create an add budget button that pops up a small window
    - Take value of the budget and change the innerHtml value of budget amount
    - Create an add expense button that pops up a small window
    - Take expense description, amount and date and store it in an object
    - Push the data that is stored in object in a div

-> Help taken from different platforms:

    https://stackoverflow.com/questions/17730621/how-to-dynamically-add-options-to-an-existing-select-in-vanilla-javascript
    https://www.geeksforgeeks.org/how-to-display-error-without-alert-box-using-javascript/
    https://www.youtube.com/watch?v=Gzfa3Ms0hcg

    CHAT GPT help

    >> Create an empty array to store the budget objects:

        var budgets = [];
    
    >> Define a function pushData() to handle the form submission:

        function pushData() {

            <!-- Get the form elements -->

            var description = document.getElementsByName('description')[0].value;
            var amount = document.getElementsByName('amount')[0].value;
            var date = document.getElementsByName('date')[0].value;

            <!-- Create a budget object -->

            var budget = {
                description: description,
                amount: amount,
                date: date
            };

            <!-- Add the budget object to the budgets array -->

                budgets.push(budget);

            <!-- Optional: Display a success message or perform any other actions -->
  
                console.log('Budget added:', budget);

            <!-- Optional: Clear the form fields -->
  
                document.getElementById('addBudget').reset();

            <!-- Prevent form submission -->
                
                return false;
        }

    >> Add the pushData() function as the onclick handler for the form's submit button:

        <button type="submit" onclick="return pushData()">Submit</button>