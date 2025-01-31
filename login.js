// Member database with credentials
const memberDatabase = {
    'MB001': {  // Manjunath Banakar
        id: 'MB001',
        password: 'mb001',  // You should use more secure passwords
        name: 'Manjunath Banakar',
        role: 'president',
        email: 'manjunath.banakar@gmail.com',
        phone: '+919591382942',
        imageId: '001'
    },
    'PB002': {  // Pratap Banakar
        id: 'PB002',
        password: 'pb002',
        name: 'Pratap Banakar',
        role: 'vice-president',
        email: 'pratap.banakar@gmail.com',
        phone: '+917259907409',
        imageId: '002'
    },
    'SB003': {  // Sarpabhushana Banakar
        id: 'SB003',
        password: 'sb003',
        name: 'Sarpabhushana Banakar',
        role: 'member',
        email: 'sarpabhushana.banakar@gmail.com',
        phone: '+919740373454',
        imageId: '003'
    },
    'MB004': {  // Mukkanna Banakar
        id: 'MB004',
        password: 'mb004',
        name: 'Mukkanna Banakar',
        role: 'member',
        email: 'mukkanna.banakar@gmail.com',
        phone: '+918618600807',
        imageId: '004'
    },
    'SB005': {  // Santosh Banakar
        id: 'SB005',
        password: 'sb005',
        name: 'Santosh Banakar',
        role: 'member',
        email: 'santosh.banakar@gmail.com',
        phone: '+919739678816',
        imageId: '005'
    },
    'PB006': {  // Pradeep Banakar
        id: 'PB006',
        password: 'pb006',
        name: 'Pradeep Banakar',
        role: 'member',
        email: 'pradeep.banakar@gmail.com',
        phone: '+919663644751',
        imageId: '006'
    },
    'PB007': {  // Praveen Banakar
        id: 'PB007',
        password: 'pb007',
        name: 'Praveen Banakar',
        role: 'member',
        email: 'praveen.banakar@gmail.com',
        phone: '+919538913204',
        imageId: '007'
    }
};

// Check if user is already logged in when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// Function to check login status
function checkLoginStatus() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
        showUserDashboard();
    } else {
        showLoginForm();
    }
}

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if user exists
    const member = memberDatabase[username];
    
    if (member && member.password === password) {
        // Store user info in session
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('userEmail', member.email);
        sessionStorage.setItem('userName', member.name);
        sessionStorage.setItem('memberId', member.id);
        sessionStorage.setItem('userRole', member.role);
        sessionStorage.setItem('userPhone', member.phone);
        sessionStorage.setItem('imageId', member.imageId);
        
        showUserDashboard();
    } else {
        errorMessage.textContent = 'Invalid Member ID or password';
        errorMessage.style.display = 'block';
    }
});

// Show login form
function showLoginForm() {
    const loginSection = document.getElementById('loginSection');
    const userDashboard = document.getElementById('userDashboard');
    
    if (loginSection) loginSection.style.display = 'block';
    if (userDashboard) userDashboard.style.display = 'none';
}

// Show user dashboard
function showUserDashboard() {
    const loginSection = document.getElementById('loginSection');
    const userDashboard = document.getElementById('userDashboard');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userRole = document.getElementById('userRole');
    const userEmail = document.getElementById('userEmail');
    const userPhone = document.getElementById('userPhone');
    const memberId = document.getElementById('memberId');

    // Hide login form and show dashboard
    if (loginSection) loginSection.style.display = 'none';
    if (userDashboard) userDashboard.style.display = 'block';

    // Update user information
    if (welcomeMessage) welcomeMessage.textContent = `Welcome, ${sessionStorage.getItem('userName')}`;
    if (userRole) userRole.textContent = sessionStorage.getItem('userRole').toUpperCase();
    if (userEmail) userEmail.textContent = sessionStorage.getItem('userEmail');
    if (userPhone) userPhone.textContent = sessionStorage.getItem('userPhone');
    if (memberId) memberId.textContent = sessionStorage.getItem('memberId');
}

// Handle logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    // Clear session storage
    sessionStorage.clear();
    // Show login form
    showLoginForm();
});

// Clear error message when typing
function clearError() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
}

// Add event listeners for clearing error message
document.getElementById('username')?.addEventListener('input', clearError);
document.getElementById('password')?.addEventListener('input', clearError);
