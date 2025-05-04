// mission.js
// mission.js
document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('themeSelector');
    const logo = document.getElementById('logo');
    
    function changeTheme() {
        // Check the current value of the select element
        if (themeSelector.value === 'dark') {
            // Add dark class to body and change logo to white version
            document.body.classList.add('dark');
            logo.src = 'whitemission.webp';
        } else {
            // Remove dark class and change logo to blue version
            document.body.classList.remove('dark');
            logo.src = 'mission.webp';
        }
    }
    
    // Add event listener for theme changes
    themeSelector.addEventListener('change', changeTheme);
});