const fs = require('fs')

fs.readFile("a.txt", "utf-8", function(err, data){
    if (err){
        console.error("Error reading file", err)
        return;
    }
    const trimmed_data = data.trim();
    fs.writeFile("a.txt", trimmed_data, function(err){
        if(err){
            console.error("Error writing file", err);
            return;
         }
         console.log("Trimmed the extra spaces")
    })
})