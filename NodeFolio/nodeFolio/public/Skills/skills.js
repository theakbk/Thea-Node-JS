

(async function getSkills() {
    console.log("Bliver getskills k'rt")
    try {
        const response = await fetch("/api/skills");
        const result = await response.json();

        const skillsDiv = document.getElementById("skills");

        result.skills.map(skill => {

            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("Skills-title");
            titleHeader.innerText = skill.title;
            skillsDiv.appendChild(titleHeader);

            //description
            const descriptionP = document.createElement("p");
            descriptionP.classList.add("skills-description");
            descriptionP.innerText = skill.description;
            skillsDiv.appendChild(descriptionP);

            //add progresbar
            const progressDiv = document.createElement("div");
            progressDiv.classList.add("progress");
            progressDiv.setAttribute("data-label", skill.percentage+"%");

            const progressSpan = document.createElement("span");
            progressSpan.classList.add("value");
            progressSpan.style.width=skill.percentage + "%";
            progressDiv.appendChild(progressSpan);
            skillsDiv.appendChild(progressDiv);

            //vspace
            const spaceP = document.createElement("p");
            spaceP.classList.add("vspace");
            skillsDiv.appendChild(spaceP);


        });
        

    } 
    
    catch (error) 
    {
        console.log(error);
    }
})();