
const course_options = JSON.parse(courses);
console.log(course_options);

function printCourseOptions(){
    for(let op of course_options ){
        document.write(`<option value="${op.id}"> ${op.name} </option>`);
      }  
}


document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profile-form');

    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect user input
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const courses = Array.from(document.getElementById('courses').selectedOptions).map(option => option.value);
        const availability = {
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
            },
           
        };

        // Create a JSON object with the user's profile data
        const profileData = {
            firstName,
            lastName,
            email,
            courses,
            availability,
        };

        // Send the data to your Node.js backend for storage
        fetch('/api/save-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Profile saved:', data);
                // You can provide feedback to the user here, e.g., display a success message
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors, e.g., display an error message to the user
            });
    });
});