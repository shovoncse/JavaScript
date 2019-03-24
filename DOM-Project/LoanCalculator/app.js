// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    
    // Hide Results
    document.getElementById('results').style.display = 'none';
    
    // Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);
    e.preventDefault();
});

// Calculate Results
function calculateResult(){

    // UI Vars
    const  amount = document.getElementById('amount');
    const  interest = document.getElementById('interest');
    const  years = document.getElementById('years');
    const  monthlyPayment = document.getElementById('monthly-payment');
    const  totalPayment = document.getElementById('total-payment');
    const  totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal ).toFixed(2);

        // Hide Loader
        document.getElementById('loading').style.display = 'none';
        // Show Results
        document.getElementById('results').style.display = 'block';

    }else{
        // console.log('Please check your number');
        showError('Please Check The Numbers');
    }

    
}

// Show Error
function showError(error){

     // Hide Loader
     document.getElementById('loading').style.display = 'none';
     // Hide Results
     document.getElementById('results').style.display = 'none';


    // Create a Div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    // Add a Class
    errorDiv.className = 'alert alert-danger';

    // Create textnode and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error avobe heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}


// Clear Error
function clearError(){
    document.querySelector('.alert').remove();
}