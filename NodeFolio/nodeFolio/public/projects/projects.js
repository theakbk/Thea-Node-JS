// fetch("/api/projects").then(res => res.json()).then(console.log);

let index = 0;

(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById("projects");
        
        result.projects.map(project => {
            const projectDiv = document.createElement("div");

            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;

            const descriptionP = document.createElement("p");
            descriptionP.classList.add("project-description");
            descriptionP.innerText = project.description;

            projectDiv.appendChild(titleHeader);
            projectDiv.appendChild(descriptionP);
            projectsDiv.appendChild(projectDiv);
        });
        

        document.getElementById("carouselTitle").innerText = result.projects[0].title; 
        document.getElementById("carouselTitle").className = "carousel0";

        //document.getElementById("carouselDescription").innerText = result.projects[0].description;
        //document.getElementById("carouselDescription").className = "carousel0";

        //show next image
        const iIdx=result.projects[index % result.projects.length].iIdx % result.projects[index % result.projects.length].images.length;
        result.projects[index % result.projects.length].iIdx++;
        document.getElementById("carouselImage").src = result.projects[0].images[iIdx]; 


    setInterval(() => { 

        index++;
        
        const cls = ("carousel" + index % 2)
//        console.log(cls)
//        console.log("project idx ",index)
      
        document.getElementById("carouselTitle").innerText = result.projects[index % result.projects.length].title; 
        document.getElementById("carouselTitle").className = cls;

        //document.getElementById("carouselDescription").innerText = result.projects[index % result.projects.length].description;
        //document.getElementById("carouselDescription").className = cls;

        //show next image
        const iIdx=result.projects[index % result.projects.length].iIdx % result.projects[index % result.projects.length].images.length;
        //advance
        result.projects[index % result.projects.length].iIdx++;
        document.getElementById("carouselImage").src = result.projects[index % result.projects.length].images[iIdx];         
        
        }, 1000);


        /* 
        show the result on the page...  
        do it in a scalable way that works even if you add new projects 
        */


    } 
    
    catch (error) 
    {
        console.log(error);
    }
})();
