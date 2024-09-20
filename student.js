// script.js
document.getElementById('allocation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect form data
    const studentName = document.getElementById('studentName').value;
    const roomType = document.getElementById('roomType').value;
    const gender = document.getElementById('gender').value;
    const proximity = document.getElementById('proximity').value;
    const roommate = document.getElementById('roommate').value || 'No preferences';
    const specialReq = document.getElementById('specialReq').value || 'None';

    // Simulating Sa simple allocation decision
    let resultMessage = `Dear ${studentName}, you have been allocated a ${roomType} room in ${gender}s' hostel `;
    if (proximity === 'close') {
        resultMessage += 'close to the academic buildings.';
    } else if (proximity === 'medium') {
        resultMessage += 'at a medium distance from academic buildings.';
    } else {
        resultMessage += 'far from the academic buildings.';
    }

    // Display the result
    document.getElementById('allocationResult').classList.remove('hidden');
    document.getElementById('resultMessage').textContent = resultMessage;

    // Clear the form after submission
    document.getElementById('allocation-form').reset();
});
