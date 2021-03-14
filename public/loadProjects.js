const path = require("path")
const fs = require("fs")
const mdjs = require("markdown-to-json");

const dirPath = path.join(__dirname, "../projects")


const loadProjects = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        const _files = files.map(f=>`${dirPath}/${f}`)
        const results = JSON.parse(mdjs.parse(_files, {}));
        let data = JSON.stringify(results)
        fs.writeFileSync("src/projects.json", data)
    })
    return 
}



loadProjects()