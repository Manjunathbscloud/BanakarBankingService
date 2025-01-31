const fs = require('fs');
const path = require('path');

const userProfileHeader = `
    <!-- User Profile Header -->
    <div id="userProfileHeader" class="user-profile-header">
        <div class="member-avatar">
            <img id="headerProfileImg" alt="Profile" class="profile-image">
            <i class="fas fa-user-circle" style="display: none;"></i>
        </div>
        <div class="profile-info">
            <p id="headerUserName" class="user-name"></p>
            <p id="headerUserRole" class="user-role"></p>
        </div>
        <button id="headerLogoutBtn" class="logout-btn">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>
    </div>
`;

const scriptTag = '<script src="userProfile.js"></script>';

// Get all HTML files in the current directory
const files = fs.readdirSync('.')
    .filter(file => file.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add user profile header after <body> tag
    content = content.replace(/<body[^>]*>/, match => `${match}\n${userProfileHeader}`);
    
    // Add script before </body> tag if it doesn't exist
    if (!content.includes('userProfile.js')) {
        content = content.replace('</body>', `    ${scriptTag}\n</body>`);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
