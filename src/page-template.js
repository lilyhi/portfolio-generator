// from the code snapshot line 2 is correct?
module.exports = (name, github) => {
    // const generatePage = (name, github) => {
        // line 3 is now gone in the snapshot
        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
        </head>
    
        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
        </html>
        `;
    };
    
    // line 24 has been removed from the codesnapshot
    // module.exports = generatePage;