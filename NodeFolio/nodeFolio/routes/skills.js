const router = require("express").Router();

const skills = [
    {
        title: "NodeJs",
        description: "Blandt andet arbejdet med Rest API, Jquery, Dom API, Promisses, Async await og fetch",
        percentage: 67
    }, 
    
    {
        title: "Swift",
        description: "CRUD API og Firebase database",
        percentage: 55
    },
    
    {
        title: "Java",
        description: "Java EE 8, Java 13",
        percentage: 70
    },
    
    {
        title: "MySQL",
        description: null,
        percentage: 70
    },
    
    {
        title: "Spring Framework/Spring Boot",
        description: null,
        percentage: 60
    },
    
    {
        title: "WebSocket",
        description: null,
        percentage: 35
    },

    {
        title: "Heroku PaaS Cloud",
        description: null,
        percentage: 60
    },

    {
        title: "Amazon AWS Cloud",
        description: null,
        percentage: 72
    },

    {
        title: "Jenkins CI/CD",
        description: null,
        percentage: 82
    },

    {
        title: "Github",
        description: null,
        percentage: 25
    },

    {
        title: "HTML/CSS",
        description: null,
        percentage: 71
    },

    {
        title: "JavaScript ES6",
        description: null,
        percentage: 50
    },

    {
        title: "Firebase + Firestore",
        description: null,
        percentage: 59
    },

    {
        title: "IntelliJ + Android studio",
        description: null,
        percentage: 58
    },

    {
        title: "Wireshark",
        description: null,
        percentage: 50
    },

    {
        title: "OOD og OOP",
        description: null,
        percentage: 83
    }
        
    ];
    
    
    router.get("/api/skills", (req, res) => {
        res.send({ skills });
    });
    
    module.exports = {
        router
    };