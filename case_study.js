// Dummy data
const appointment = {
    patientName: "John Doe",
    age: 30,
    date: "2025-04-26",
    time: "10:00 AM"
};

const labRequests = [
    { id: 1, testName: "Blood Test", patient: "John Doe" },
    { id: 2, testName: "X-Ray", patient: "Jane Smith" }
];

// Load Appointment Details
function loadAppointmentDetails() {
    const detailsDiv = document.getElementById('appointmentDetails');
    detailsDiv.innerHTML = `
        <p><strong>Patient:</strong> ${appointment.patientName}</p>
        <p><strong>Age:</strong> ${appointment.age}</p>
        <p><strong>Date:</strong> ${appointment.date}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
    `;
}

// Handle Diagnosis Form
document.getElementById('diagnosisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const diagnosis = document.getElementById('diagnosis').value;
    const prescription = document.getElementById('prescription').value;
    alert(`Diagnosis: ${diagnosis}\nPrescription: ${prescription}`);
    this.reset();
});

// Handle History Form
document.getElementById('historyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const history = document.getElementById('medicalHistory').value;
    alert(`Medical History Updated:\n${history}`);
    this.reset();
});

// Show Lab Test Requests
const labTestRequestsDiv = document.getElementById('labTestRequests');
labRequests.forEach(request => {
    const div = document.createElement('div');
    div.classList.add('request');
    div.innerHTML = `
        <p><strong>Test:</strong> ${request.testName} - <strong>Patient:</strong> ${request.patient}</p>
        <button onclick="approveLabTest(${request.id})">Approve</button>
    `;
    labTestRequestsDiv.appendChild(div);
});

// Approve Lab Test
function approveLabTest(id) {
    alert(`Lab Test ID ${id} Approved!`);
}
