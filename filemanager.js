const fs = require("fs");

let file = "test.txt";

// Create file
fs.writeFile(file, "Hello Node.js", (err) => {

    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File Created");

    // Read file
    fs.readFile(file, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:", data);

        // Update file
        fs.appendFile(file, "\nLearning FS Module", (err) => {

            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File Updated");

            // Read updated file
            fs.readFile(file, "utf8", (err, data) => {

                if (err) {
                    console.log("Error reading updated file");
                    return;
                }

                console.log(data);

                // Delete file
                fs.unlink(file, (err) => {

                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});