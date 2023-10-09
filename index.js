const fse = require("fs-extra");
const fs = require("fs");

const rootFolder = "C:/Users/Erick/Desktop/fake-projects";

async function main() {
    try {
        const projectsNames = getAllProjectsName(rootFolder);

        projectsNames.forEach(async (projectName) => {
            const currentProjectPath = `${rootFolder}/${projectName}`;
            await removeNodeModules(currentProjectPath).then(console.log);
        });
    } catch (err) {
        console.log(err);
    }
}

main();

function getAllProjectsName(projectRootPath) {
    const projectsNames = fs.readdirSync(projectRootPath);

    return projectsNames;
}

async function removeNodeModules(projectPath) {
    const nodeModulesPath = `${projectPath}/node_modules`;

    try {
        await fse.remove(nodeModulesPath);
        console.log(`node_modules directory ${nodeModulesPath} deleted.`);
    } catch (err) {
        console.error(
            `Error deleting node_modules directory ${nodeModulesPath}: ${err}`
        );
    }
}
