const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// Using regex to determine the correct requirements for a validated password
const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2}, 
    {regex: /[^A-Za-z0-9]/, index: 3}, 
    {regex: /[A-Z]/, index: 4}, 

]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check is the password inputted matches the requirements set by the regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating the icon of the requirement if it has been matched or not
        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});