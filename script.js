// Set the current date in the hidden date field
document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = currentDate;
});

//  JOBS FORM

document
  .getElementById("uniq-jobscontactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let jobsformResponse = document.getElementById("uniq-jobsformResponse");
    jobsformResponse.innerText = "Submitting your response, please wait...";
    jobsformResponse.style.color = "green"; // Set color to blue for processing

    let formData = new FormData(this);
    let file = document.getElementById("file").files[0];

    // Convert file to Base64
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async function () {
      let base64String = reader.result.split(",")[1];

      formData.append("file", base64String);
      formData.append("fileName", file.name);

      let response = await fetch(
        "https://script.google.com/macros/s/AKfycbwX5Dps_K6jDzMTz7k2RwNOfgegOtHOjsQQ34uRDKv_JZKa0i2c34f7Ka7kMvSAK6MQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      let result = await response.json();

      if (result.result === "success") {
        jobsformResponse.innerText =
          "Thank you! Your submission has been received.";
        jobsformResponse.style.color = "green"; // Set color to green for success

        // Reset form fields
        document.getElementById("uniq-jobscontactForm").reset();

        // Remove success message after 2 seconds
        setTimeout(() => {
          jobsformResponse.innerText = "";
        }, 2000);
      } else {
        jobsformResponse.innerText = "Error: " + result.message;
        jobsformResponse.style.color = "red"; // Set color to red for error
      }
    };
  });

  document.getElementById("file").addEventListener("change", function () {
    const file = this.files[0]; // Get the selected file
    const errorDiv = document.getElementById("file-error"); // Get the error message div
  
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  
      if (file.size > maxSize) {
        errorDiv.textContent = "File size should not exceed 5MB. Please select a smaller file.";
        errorDiv.style.color = "red"; // Style the error message
        this.value = ""; // Clear the file input

        setTimeout(() => {
          errorDiv.textContent = "";
        }, 3000);
      } else {
        errorDiv.textContent = ""; // Clear error message if file is valid
      }
    }
  });
  
  

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("Job1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("Job2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("Job3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Get all "Apply" buttons
document.querySelectorAll(".uniq-job-apply-btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents jumping due to anchor link

    // Find the closest job container
    let jobContainer = this.closest(".uniq-job");

    // Get the job title
    let jobTitle = jobContainer
      .querySelector(".uniq-job-title")
      .textContent.trim();

    // Find the select dropdown
    let jobSelect = document.getElementById("jobname");

    // Find the matching option and select it
    for (let option of jobSelect.options) {
      if (option.textContent.trim() === jobTitle) {
        option.selected = true;
        break;
      }
    }

    // Scroll to the form
    document
      .getElementById("Uniq-Form-Section")
      .scrollIntoView({ behavior: "smooth" });
    jobSelect.style.border = "3px solid #007bff"; // Highlights the dropdown
    setTimeout(() => (jobSelect.style.border = ""), 2000); // Removes highlight after 2s
  });
});
