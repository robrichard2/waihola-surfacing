const path = require("path")
const fs = require("fs")

const projectsFilesPath = path.join(__dirname, "../projects")


const loadProjects = () => {
    fs.readdir(projectsFilesPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        const contents = files.map(file => {
            return JSON.parse(fs.readFileSync(`${projectsFilesPath}/${file}`));
        });
        fs.writeFileSync("src/projects.json",JSON.stringify(contents) )
    })
    return 
}

loadProjects()