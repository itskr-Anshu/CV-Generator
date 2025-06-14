function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "eqField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSkillField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "skillField", "mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter a skill");

  let skillOb = document.getElementById("skills");
  let skillAddButtonOb = document.getElementById("skillAddButton");

  skillOb.insertBefore(newNode, skillAddButtonOb);
}

function generateCV() {
  // Personal Info
  document.getElementById("nameT1").innerText = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerText = document.getElementById("nameField").value;
  document.getElementById("contactT").innerText = document.getElementById("contactField").value;
  document.getElementById("emailT").innerText = document.getElementById("emailField").value;
  document.getElementById("addressT").innerText = document.getElementById("addressField").value;

  // Links
  document.getElementById("linkedT").innerHTML = `<a href="${document.getElementById("linkedField").value}" target="_blank">LinkedIn</a>`;
  document.getElementById("leetT").innerHTML = `<a href="${document.getElementById("LeetField").value}" target="_blank">LeetCode</a>`;
  document.getElementById("gitT").innerHTML = `<a href="${document.getElementById("gitField").value}" target="_blank">GitHub</a>`;

  // Objective
  document.getElementById("objectiveT").innerText = document.getElementById("objectiveField").value;

  // Work Experience
  let weFields = document.getElementsByClassName("weField");
  let weList = "";
  for (let field of weFields) {
    if (field.value.trim() !== "") {
      weList += `<li>${field.value}</li>`;
    }
  }
  document.getElementById("weT").innerHTML = weList;

  // Academic Qualification
  let aqFields = document.getElementsByClassName("eqField");
  let aqList = "";
  for (let field of aqFields) {
    if (field.value.trim() !== "") {
      aqList += `<li>${field.value}</li>`;
    }
  }
  document.getElementById("aqT").innerHTML = aqList;

  // Skills
  let skillFields = document.getElementsByClassName("skillField");
  let skillList = "";
  for (let field of skillFields) {
    if (field.value.trim() !== "") {
      skillList += `<li>${field.value}</li>`;
    }
  }
  document.getElementById("skillsT").innerHTML = skillList;

  //code for selecting image
   let file=document.getElementById("imgField").files[0];
   console.log(file);

   let reader=new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   //set img to template

    reader.onload= function()
    {
       document.getElementById("imgTemplate").src=reader.result;

    };
  // Show template
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}
