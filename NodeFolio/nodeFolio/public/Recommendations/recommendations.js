(async function getSkills() {
    console.log("Bliver getskills k'rt")
    try {
        const response = await fetch("/api/recommendations");
        const result = await response.json();

        const recommendationsDiv = document.getElementById("Referencer");

        result.recommendations.map(reference => {

            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("Recommendations-title");
            titleHeader.innerText = reference.title;
            recommendationsDiv.appendChild(titleHeader);

            //description
            const descriptionP = document.createElement("p");
            descriptionP.classList.add("Recommendations-description");
            descriptionP.innerText = reference.description;
            recommendationsDiv.appendChild(descriptionP);

            //contact
            const contactP = document.createElement("p");
            contactP.classList.add("Recommendations-contact");
            contactP.innerText = reference.contact;
            recommendationsDiv.appendChild(contactP);
            //vspace
            const spaceP = document.createElement("p");
            spaceP.classList.add("vspace");
            recommendationsDiv.appendChild(spaceP);


        });
        

    } 
    
    catch (error) 
    {
        console.log(error);
    }
})();