document.getElementById("applyButton").addEventListener("click", function () {

    console.log("Button clicked");
    // Get input values
    const managerName = document.getElementById("managerName").value;
    const organizationName = document.getElementById("organizationName").value;

    console.log(managerName);
    console.log(organizationName);

    // Locate the paragraph content
    const paragraph = document.getElementById("applyParagraph");
    let content = paragraph.innerHTML;

    // Replace placeholders with input values
    content = content.replace("[...]", managerName);
    content = content.replace("[....]", organizationName);

    // Update the paragraph content
    paragraph.innerHTML = content;
});
    

