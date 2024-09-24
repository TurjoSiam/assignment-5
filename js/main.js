
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
    document.getElementById('balance').innerText = remainingBalance(balance, inputNoakhali);

    let noakhaliBalance = getValueFromText('noakhali-balance');
    document.getElementById('noakhali-balance').innerText = updateFundBalance(noakhaliBalance, inputNoakhali);

    // history adding in history page
    let historyItem = document.createElement('historyItem');
    historyItem.classList.add(
        "rounded-md",
        "p-5",
        "bg-white",
    )
    historyItem.innerHTML = `
    <p class="text-black font-bold lg:text-xl text-lg">${inputNoakhali} taka is donated for flood relief in Noakhali, Bangladesh.</p>
    <p class="text-gray-500 text-sm">Date: ${new Date}</p>
    `
    let historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historyItem);

    my_modal_1.showModal();
})



// donate Feni button click-------------------------------------------------------
document.getElementById('donate-feni-btn').addEventListener('click', function () {
    let inputFeni = getValueFromInput('input-feni');
    let balance = getValueFromText('balance');

    // donate button validation
    if (isNaN(inputFeni) === true || inputFeni <= 0 || inputFeni === "" || parseInt(inputFeni) > parseInt(balance)) {
        alert('Invalid Input');
        return;
    }

    // donate button calculation
    document.getElementById('balance').innerText = remainingBalance(balance, inputFeni);

    let feniBalance = getValueFromText('feni-balance');
    document.getElementById('feni-balance').innerText = updateFundBalance(feniBalance, inputFeni);

    // history adding in history page
    let historyItem = document.createElement('historyItem');
    historyItem.classList.add(
        "rounded-md",
        "p-5",
        "bg-white",
    )
    historyItem.innerHTML = `
    <p class="text-black font-bold text-2xl">${inputFeni} taka is donated for flood relief in Feni, Bangladesh.</p>
    <p class="text-gray-500">Date: ${new Date}</p>
    `
    let historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historyItem);

    my_modal_1.showModal();
})



// donate quota movement button click-------------------------------------------------------
document.getElementById('donate-quota-btn').addEventListener('click', function () {
    let inputQuota = getValueFromInput('input-quota');
    let balance = getValueFromText('balance');

    // donate button validation
    if (isNaN(inputQuota) === true || inputQuota <= 0 || inputQuota === "" || parseInt(inputQuota) > parseInt(balance)) {
        alert('Invalid Input');
        return;
    }

    // donate button calculation
    document.getElementById('balance').innerText = remainingBalance(balance, inputQuota);

    let quotaBalance = getValueFromText('quota-balance');
    document.getElementById('quota-balance').innerText = updateFundBalance(quotaBalance, inputQuota);

    // history adding in history page
    let historyItem = document.createElement('historyItem');
    historyItem.classList.add(
        "rounded-md",
        "p-5",
        "bg-white",
    )
    historyItem.innerHTML = `
    <p class="text-black font-bold text-2xl">${inputQuota} taka is donated for aiding injured in quota movement, Bangladesh.</p>
    <p class="text-gray-500">Date: ${new Date}</p>
    `
    let historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historyItem);

    my_modal_1.showModal();
})
