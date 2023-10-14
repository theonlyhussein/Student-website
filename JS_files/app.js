

import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(json()); // Parse JSON requests

// Define an API endpoint for updating user profiles
app.post('/api/update-profile', (req, res) => {
    const newProfileData = req.body;

    // Read the existing JSON file
    readFile('user_profiles.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading the JSON file' });
            return;
        }

        let userProfiles = JSON.parse(data);

        // Add the new profile data to the existing profiles
        userProfiles.push(newProfileData);

        // Write the updated profiles back to the JSON file
        writeFile('user_profiles.json', JSON.stringify(userProfiles, null, 2), (err) => {
            if (err) {
                res.status(500).json({ error: 'Error writing to the JSON file' });
                return;
            }

            res.json({ message: 'Profile updated successfully' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});