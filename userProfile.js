// Function to check login status and update UI
function checkAndDisplayUserProfile() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const userProfileHeader = document.getElementById('userProfileHeader');
    
    if (isAuthenticated === 'true' && userProfileHeader) {
        // Get user details from session storage
        const userName = sessionStorage.getItem('userName');
        const userRole = sessionStorage.getItem('userRole');
        const imageId = sessionStorage.getItem('imageId');
        
        // Update profile information
        document.getElementById('headerUserName').textContent = userName;
        document.getElementById('headerUserRole').textContent = userRole.toUpperCase();
        
        // Update profile image
        const profileImg = document.getElementById('headerProfileImg');
        if (profileImg) {
            profileImg.src = `images/members/member-${imageId}.jpeg`;
            // If image fails to load, show default icon
            profileImg.onerror = function() {
                this.style.display = 'none';
                const defaultIcon = this.nextElementSibling;
                if (defaultIcon) {
                    defaultIcon.style.display = 'block';
                }
            };
        }
        
        // Show the profile header
        userProfileHeader.classList.add('visible');
    }
}

// Handle logout
function handleLogout() {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to login page
    window.location.href = 'login.html';
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    checkAndDisplayUserProfile();
    
    // Add logout event listener
    const logoutBtn = document.getElementById('headerLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
