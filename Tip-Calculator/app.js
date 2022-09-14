//Get access to all the inputs
//bill input, tip input, number of people div, Per person total div 

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

//get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    //get bill amout from user input and convert it into a number
    const bill = Number(billInput.value)

    //get tip percent from user and convert it into Percentage (divide by 100)
    const tipPercentage = Number(tipInput.value) / 100;

    //get total tip amount i.e. bill multiplied by tipPercentage
    const tipAmount = bill * tipPercentage;


    //calculate total tip amount
    const total = tipAmount + bill

    //update total bill amount on DOM
    // totalBillDiv.innerText = `Rs. ${total}`

    //calculate per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople;

    totalBill.innerText = `Rs. ${total.toFixed(2)}`

    //update per person toal on DOM and display it to user
    perPersonTotalDiv.innerText = `Rs. ${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    //increment the number of people
    numberOfPeople += 1;

    //update on the DOM
    numberOfPeopleDiv.innerText = numberOfPeople

    //recalulate bill on the basis of new number of people
    calculateBill();
}

const decreasePeople = () => {
    if (numberOfPeople > 0) {
        numberOfPeople -= 1;
        numberOfPeopleDiv.innerText = numberOfPeople
    } else {
        numberOfPeopleDiv.innerText = 0
    }
    calculateBill();
}