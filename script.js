document.getElementById("downloadCV").addEventListener("click", function () {

    const link = document.createElement("a");

    
    link.href = "Akash%20resume.pdf";

    link.download = "Akash resume.pdf";  

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.getElementById("difbutton2").addEventListener("click", function () {

    const section = document.getElementById("projectsSection");

   
    section.style.display = "block";

    
    section.scrollIntoView({ behavior: "smooth" });
});



document.getElementById("difbutton4").addEventListener("click", function() {
    document.getElementById("contact-section").style.display = "block";
    
   
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
});



document.getElementById("experienceBtn").addEventListener("click", function () {
    const exp = document.getElementById("experience-section");

    if (exp.style.display === "none" || exp.style.display === "") {
        exp.style.display = "block";   
    } else {
        exp.style.display = "none";   
    }
});



document.getElementById("aboutBtn").addEventListener("click", function () {
    const about = document.getElementById("about-section");

    if (about.style.display === "none" || about.style.display === "") {
        about.style.display = "block";   // SHOW
    } else {
        about.style.display = "none";    // HIDE
    }
});