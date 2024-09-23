// history button click color change------------------------------------------
document.getElementById('history-btn').addEventListener('click', function () {
    let historyBtn = document.getElementById('history-btn');
    let donationBtn = document.getElementById('donation-btn');
    historyBtn.classList.add(
        "bg-lime-400",
        "font-semibold",
        "border-none",
        "text-black"
    )
    historyBtn.classList.remove(
        "border",
        "border-gray-300"
    )
    donationBtn.classList.add(
        "border",
        "border-gray-300"
    )
    donationBtn.classList.remove(
        "bg-lime-400",
        "font-semibold",
        "border-none",
        "text-black"
    )
    // history button click window change
    let donationWindow = document.getElementById('donation-window');
    donationWindow.classList.add("hidden");
    let historyWindow = document.getElementById('history-window');
    historyWindow.classList.remove("hidden");
})



// donation button click color change----------------------------------------
document.getElementById('donation-btn').addEventListener('click', function(){
    let historyBtn = document.getElementById('history-btn');
    let donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.add(
        "bg-lime-400",
        "font-semibold",
        "border-none",
        "text-black"
    )
    donationBtn.classList.remove(
        "border",
        "border-gray-300"
    )
    historyBtn.classList.remove(
        "bg-lime-400",
        "font-semibold",
        "border-none",
        "text-black"
    )
    historyBtn.classList.add(
        "border",
        "border-gray-300"
    )
    // donation button click window change
    let historyWindow = document.getElementById('history-window');
    historyWindow.classList.add('hidden');
    let donationWindow = document.getElementById('donation-window');
    donationWindow.classList.remove("hidden");
})



// donate noakhali button click-------------------------------------------------------
document.getElementById('donate-noakhali-btn').addEventListener('click', function () {
    let inputNoakhali = getValueFromInput('input-noakhali');
    let balance = getValueFromText('balance');

    // donate button validation
    if (isNaN(inputNoakhali) === true || inputNoakhali <= 0 || inputNoakhali === "" || parseInt(inputNoakhali) > parseInt(balance)) {
        alert('Invalid Input');
        return;
    }

    // donate button calculation
    let remainingBalance = parseInt(balance) - parseInt(inputNoakhali);
    document.getElementById('balance').innerText = remainingBalance;

    let noakhaliBalance = getValueFromText('noakhali-balance');
    let updatedNoakhaliBalance = parseInt(noakhaliBalance) + parseInt(inputNoakhali);
    document.getElementById('noakhali-balance').innerText = updatedNoakhaliBalance;

    my_modal_1.showModal();

    
})