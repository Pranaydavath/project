// Mentor data
var mentors = {
  plumbing: {
    name: "John Doe",
    contactNumber: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, City, State",
    location: "City, State",
    cost: "$100 per hour"
  },
  carpentry: {
    name: "Jane Smith",
    contactNumber: "987-654-3210",
    email: "jane.smith@example.com",
    address: "456 Elm St, City, State",
    location: "City, State",
    cost: "$80 per hour"
  },
  electrical: {
    name: "David Johnson",
    contactNumber: "555-555-5555",
    email: "david.johnson@example.com",
    address: "789 Oak St, City, State",
    location: "City, State",
    cost: "$120 per hour"
  },
  welding: {
    name: "Michael Anderson",
    contactNumber: "555-555-5555",
    email: "michael.anderson@example.com",
    address: "789 Oak St, City, State",
    location: "City, State",
    cost: "$120 per hour"
  },
  painting: {
    name: "Sarah Wilson",
    contactNumber: "555-555-5555",
    email: "sarah.wilson@example.com",
    address: "789 Oak St, City, State",
    location: "City, State",
    cost: "$120 per hour"
  },
  tailoring: {
    name: "Emily Thompson",
    contactNumber: "555-555-5555",
    email: "emily.thompson@example.com",
    address: "789 Oak St, City, State",
    location: "City, State",
    cost: "$120 per hour"
  }
};


// Function to display mentor details
function displayMentorDetails(course) {
  var mentor = mentors[course];
  var mentorDetails = document.getElementById("mentor-details");
  mentorDetails.innerHTML = `
    <p><strong>Name:</strong> ${mentor.name}</p>
    <p><strong>Contact Number:</strong> ${mentor.contactNumber}</p>
    <p><strong>Email:</strong> ${mentor.email}</p>
    <p><strong>Address:</strong> ${mentor.address}</p>
    <p><strong>Location:</strong> ${mentor.location}</p>
    <p><strong>Cost:</strong> ${mentor.cost}</p>
  `;

  var mentorModal = document.getElementById("mentor-details-modal");
  mentorModal.style.display = "block";
}

// Close the mentor details modal
function closeMentorModal() {
  var mentorModal = document.getElementById("mentor-details-modal");
  mentorModal.style.display = "none";
}

// Attach event listeners to "Contact Mentor" buttons and close button
document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("button[data-course]");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var course = button.dataset.course;
      displayMentorDetails(course);
    });
  });

  var closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function() {
    closeMentorModal();
  });
});

