function goToPage(url) {
    window.location.href = url;
  }
  document.addEventListener("DOMContentLoaded", function() {
    var dashboard = document.querySelector(".learner-roles ul li:first-child");
    dashboard.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // 13 is the enter key code
        event.preventDefault(); // Prevent form submission
        // Perform search here, for example:
        var searchInput = document.getElementById("searchInput").value;
        window.location.href = "/search?searchInput=" + searchInput;
    }
});

// Define an array of courses



// Function to generate HTML for a single course
function createCourseHTML(course) {
    return `
        <div class="course">
            <h3>${course.title}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <div class="description">
                <p>${course.description}</p>
            </div>
        </div>
    `;
}

// Function to display courses on the webpage
function displayCourses() {
    const coursesContainer = document.getElementById('coursesContainer');
    let coursesHTML = '';
    courses.forEach(course => {
        coursesHTML += createCourseHTML(course);
    });
    coursesContainer.innerHTML = coursesHTML;
}

// Call the displayCourses function when the page loads
window.onload = displayCourses;