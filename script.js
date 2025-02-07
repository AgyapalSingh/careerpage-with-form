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

