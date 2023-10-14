
const course_options = JSON.parse(courses);
console.log(course_options);

function printCourseOptions(){
    for(let op of course_options ){
        document.write(`<option value="${op.id}"> ${op.name} </option>`);
      }  
}


document.addEventListener('DOMContentLoaded', function () {
    // Fetch course data from your JSON file and populate the 'courses' dropdown
    // ... (Your existing code for populating course options)

    // Handle form submission
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect user input and create a JSON object
        const profileData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            courses: Array.from(document.getElementById('courses_options').selectedOptions).map(option => option.value),
            availability: {
                sunday: {
                    from: document.getElementById('sunday-from').value,
                    to: document.getElementById('sunday-to').value,
                },
                monday: {
                    from: document.getElementById('monday-from').value,
                    to: document.getElementById('monday-to').value,
                },
                tuesday: {
                    from: document.getElementById('tuesday-from').value,
                    to: document.getElementById('tuesday-to').value,
                },
                wednesday: {
                    from: document.getElementById('wednesday-from').value,
                    to: document.getElementById('wednesday-to').value,
                },
                thursday: {
                    from: document.getElementById('thursday-from').value,
                    to: document.getElementById('thursday-to').value,
                },
                friday: {
                    from: document.getElementById('friday-from').value,
                    to: document.getElementById('friday-to').value,
                },
                saturday: {
                    from: document.getElementById('saturday-from').value,
                    to: document.getElementById('saturday-to').value,
                }
            }
        };

        // Read any existing user profiles from localStorage (if any)
        let userProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];

        // Add the new user profile to the existing profiles
        userProfiles.push(profileData);

        // Store the updated profiles in localStorage
        localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

        // Optional: You can send a success message to the user
        console.log('Profile saved:', profileData);

        // Optionally, you can trigger a download link to allow users to save the data as a JSON file
        const jsonData = JSON.stringify(userProfiles, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'user_profiles.json';
        downloadLink.click();
    });
});