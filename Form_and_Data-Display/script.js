const enroll = document.getElementById("submit");
const studentList = document.querySelector("#detailsBody");

let stName = "";
let stGender = "";
let stEmail = "";
let stPhone = "";
let stUrl = "No website";
let stSkills = "";
let stImage = "images\\download.jpg";

// const candidate = ;

enroll.addEventListener("click", function () {
  stName = $("#NAME").val();
  stGender = $('input[name="gender"]:checked').val();
  stPhone = $("#PHONE").val();
  stEmail = $("#EMAIL").val();
  $("input:checkbox[name='skills']:checked").each(function () {
    stSkills = stSkills + " " + $(this).val() + ", ";
  });
  stSkills = stSkills.substring(0, stSkills.length-1);
  stUrl = $("#WEBSITE").val();
  stImage = $("#IMAGE").val();

  switch (true) {
    case stName == null:
      alert("Name field cant be empty !!!");
      break;
    case stName.length <= 3:
      alert("Please enter your full name...");
      break;
    case stGender == null:
      alert("Gender field cant be empty !!!");
      break;
    case stPhone == null:
      alert("contact field cant be empty !!!");
      break;
    case stPhone.length != 10:
      alert("Invalid number. Kindly enter a valid number.");
      break;
    case stEmail == null:
      alert("Email field cant be empty !!!");
      break;
    case stEmail.indexOf("@") == -1:
      alert("Invalid Email. Kindly enter a valid Email.");
      break;
    case stSkills == null:
      alert("Skills field cant be empty !!!");
      break;
    case stUrl == null:
      alert("Please give a valid website URL.");
      break;
    case stImage == null:
      alert("Please give a valid image URL.");
      break;
    default: {
      $(studentList).append(
        `
            <div class="candidate">
              <div class="desc">
                <p>${stName}</p>
                <p>${stGender}</p>
                <p>${stEmail}</p>
                <p>${stPhone}</p>
                <p>${stUrl}</p>
                <p>${stSkills}</p>
              </div>
              <div class="stimage" style="background-image:url('${stImage}')"></div>
            </div>
        `
      );
      stName = "";
      stGender = "";
      stPhone = "";
      stEmail = "";
      stSkills = [];
      stUrl = "";
    }
  }
});
