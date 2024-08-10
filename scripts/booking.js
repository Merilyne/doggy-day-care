/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costPerDay = 35;
var daysSelected = [];
const daySelector = document.querySelectorAll('.day-selector li');
const totalCostText = document.getElementById('calculated-cost');
const halfDay = document.getElementById('half');
const fullDay = document.getElementById('full');
const clearButton = document.getElementById('clear-button');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function addDay(dayButton)
{
    if (!dayButton.classList.contains('clicked'))
    {
        daysSelected[daysSelected.length] = dayButton.innerText;
        dayButton.classList.add('clicked');
    }
    updateCost();
}

daySelector.forEach(addButton); 

function addButton(dayButton)
{
    dayButton.onclick = function() {
    addDay(dayButton);
    };
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



function clearDays() 
{
    daySelector.forEach(clearButton); 
    
    function clearButton(dayButton)
    { 
        dayButton.classList.remove('clicked');
    }
    daysSelected = [];
    updateCost();
}
clearButton.onclick = clearDays;

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function halfDayClick()
{
    costPerDay = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    updateCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayClick()
{
    costPerDay = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    updateCost();
}

halfDay.onclick = halfDayClick;
fullDay.onclick = fullDayClick;




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost()
{
    const totalCost = daysSelected.length * costPerDay;
    totalCostText.innerText = totalCost;
}
