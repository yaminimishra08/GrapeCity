// Run script after the page loads
document.addEventListener("DOMContentLoaded", function ()
{
    const benefitInput = document.getElementById("hobbyInput");
    const addButton = document.getElementById("addBtn");
    const benefitsList = document.getElementById("benefitsList");
    const contactForm = document.querySelector("form");
    const dateTime = document.getElementById("datetime");

    // Add a new benefit to the list
    addButton.addEventListener("click", function ()
    {
        const benefitText = benefitInput.value.trim();
        if (benefitText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = benefitText;

        // Create a delete button for the list item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function ()
        {
            listItem.remove();
        };

        listItem.appendChild(deleteBtn);
        benefitsList.appendChild(listItem);

        // Clear the input field after adding
        benefitInput.value = "";
    });

    // Show confirmation when the contact form is submitted
    contactForm.addEventListener("submit", function ()
    {
        alert("Form Submitted Successfully !");
    });

    // Display current date and time in the footer
    function updateTime()
    {
        const now = new Date();
        dateTime.textContent = now.toLocaleString();
    }

    updateTime();
    setInterval(updateTime, 1000);

});