<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AdManager Pro - Dashboard</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
--primary: #4361ee;
--secondary: #3f37c9;
--accent: #4cc9f0;
--light: #f8f9fa;
--dark: #212529;
--success: #4bb543;
--warning: #ffcc00;
--danger: #dc3545;
--gray: #6c757d;
--light-gray: #e9ecef;
}

body {
background-color: #f5f7fb;
color: var(--dark);
display: flex;
min-height: 100vh;
}

/* Sidebar Styles */
.sidebar {
width: 250px;
background: linear-gradient(180deg, var(--primary), var(--secondary));
color: white;
padding: 20px 0;
transition: all 0.3s;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
z-index: 1000;
}

.logo {
display: flex;
align-items: center;
padding: 0 20px 20px;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
margin-bottom: 20px;
}

.logo i {
font-size: 24px;
margin-right: 10px;
}

.logo h1 {
font-size: 20px;
font-weight: 600;
}

.menu-section {
margin-bottom: 30px;
}

.menu-title {
font-size: 12px;
text-transform: uppercase;
letter-spacing: 1px;
padding: 0 20px 10px;
color: rgba(255, 255, 255, 0.7);
}

.menu-items {
list-style: none;
}

.menu-items li {
padding: 12px 20px;
display: flex;
align-items: center;
cursor: pointer;
transition: all 0.2s;
}

.menu-items li:hover {
background-color: rgba(255, 255, 255, 0.1);
}

.menu-items li.active {
background-color: rgba(255, 255, 255, 0.2);
border-left: 4px solid var(--accent);
}

.menu-items li i {
margin-right: 10px;
font-size: 18px;
width: 20px;
text-align: center;
}

/* Main Content Styles */
.main-content {
flex: 1;
display: flex;
flex-direction: column;
overflow: hidden;
}

.top-bar {
background-color: white;
padding: 15px 30px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.search-bar {
display: flex;
align-items: center;
background-color: var(--light-gray);
border-radius: 30px;
padding: 8px 15px;
width: 300px;
}

.search-bar input {
background: transparent;
border: none;
outline: none;
margin-left: 10px;
width: 100%;
}

.user-actions {
display: flex;
align-items: center;
}

.notification, .user-profile {
margin-left: 20px;
position: relative;
cursor: pointer;
}

.notification-badge {
position: absolute;
top: -5px;
right: -5px;
background-color: var(--danger);
color: white;
border-radius: 50%;
width: 18px;
height: 18px;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
}

.user-profile img {
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
}

.content-area {
padding: 30px;
overflow-y: auto;
flex: 1;
}

.page-title {
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
}

.page-title h2 {
font-size: 24px;
font-weight: 600;
color: var(--dark);
}

/* Welcome Section Styles */
.welcome-section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 70vh;
text-align: center;
}

.welcome-icon {
font-size: 4rem;
color: var(--primary);
margin-bottom: 20px;
}

.welcome-title {
font-size: 3rem;
font-weight: 700;
color: var(--dark);
margin-bottom: 15px;
background: linear-gradient(135deg, var(--primary), var(--secondary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.welcome-subtitle {
font-size: 1.2rem;
color: var(--gray);
margin-bottom: 30px;
max-width: 600px;
line-height: 1.6;
}

.welcome-features {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
margin-top: 40px;
max-width: 800px;
}

.welcome-feature {
background: white;
padding: 25px;
border-radius: 10px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
text-align: center;
transition: transform 0.3s ease;
}

.welcome-feature:hover {
transform: translateY(-5px);
}

.welcome-feature i {
font-size: 2.5rem;
color: var(--primary);
margin-bottom: 15px;
}

.welcome-feature h3 {
font-size: 1.3rem;
font-weight: 600;
color: var(--dark);
margin-bottom: 10px;
}

.welcome-feature p {
color: var(--gray);
line-height: 1.5;
}

/* Settings Styles */
.settings-container {
display: grid;
grid-template-columns: 1fr 2fr;
gap: 30px;
}

.settings-menu {
background-color: white;
border-radius: 10px;
padding: 20px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.settings-menu-item {
padding: 15px;
cursor: pointer;
border-radius: 8px;
margin-bottom: 10px;
transition: all 0.2s;
}

.settings-menu-item:hover {
background-color: var(--light-gray);
}

.settings-menu-item.active {
background-color: rgba(67, 97, 238, 0.1);
color: var(--primary);
font-weight: 600;
}

.settings-content {
background-color: white;
border-radius: 10px;
padding: 30px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.settings-section {
margin-bottom: 30px;
}

.settings-section-title {
font-size: 18px;
font-weight: 600;
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: 1px solid var(--light-gray);
}

.form-group {
margin-bottom: 20px;
}

.form-group label {
display: block;
margin-bottom: 8px;
font-weight: 500;
}

.form-group input, .form-group select {
width: 100%;
padding: 10px 15px;
border-radius: 5px;
border: 1px solid var(--light-gray);
outline: none;
transition: border 0.3s;
}

.form-group input:focus, .form-group select:focus {
border-color: var(--primary);
}

.btn {
padding: 10px 20px;
border-radius: 5px;
border: none;
cursor: pointer;
font-weight: 600;
transition: all 0.3s;
}

.btn-primary {
background-color: var(--primary);
color: white;
}

.btn-primary:hover {
background-color: var(--secondary);
}

/* Website Submission System Styles - Integrated */
.website-system-stats {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 20px;
margin-bottom: 25px;
}

.website-system-stat-card {
background: white;
border-radius: 10px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
padding: 20px;
text-align: center;
}

.website-system-stat-number {
font-size: 2.2rem;
font-weight: 700;
color: var(--primary);
margin-bottom: 5px;
}

.website-system-stat-label {
font-size: 0.9rem;
color: var(--gray);
}

.website-system-card {
background: white;
border-radius: 10px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
padding: 25px;
margin-bottom: 25px;
}

.website-system-card-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding-bottom: 15px;
border-bottom: 1px solid var(--light-gray);
}

.website-system-card-title {
font-size: 1.4rem;
font-weight: 600;
color: var(--dark);
}

.website-system-table {
width: 100%;
border-collapse: collapse;
margin-top: 10px;
}

.website-system-table thead {
background-color: var(--light);
}

.website-system-table th, .website-system-table td {
padding: 15px;
text-align: left;
border-bottom: 1px solid var(--light-gray);
}

.website-system-table th {
font-weight: 600;
color: var(--dark);
}

.website-system-table tr:hover {
background-color: rgba(0, 0, 0, 0.02);
}

.website-system-status {
display: inline-flex;
align-items: center;
gap: 6px;
padding: 6px 12px;
border-radius: 20px;
font-size: 0.85rem;
font-weight: 500;
}

.website-system-status-pending {
background-color: rgba(255, 204, 0, 0.1);
color: var(--warning);
}

.website-system-status-approved {
background-color: rgba(75, 181, 67, 0.1);
color: var(--success);
}

.website-system-badge {
display: inline-flex;
align-items: center;
gap: 5px;
padding: 4px 10px;
border-radius: 12px;
font-size: 0.8rem;
font-weight: 500;
}

.website-system-badge-success {
background-color: rgba(76, 201, 240, 0.15);
color: var(--success);
}

.website-system-badge-disabled {
background-color: rgba(108, 117, 125, 0.15);
color: var(--gray);
}

.website-system-modal {
display: none;
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(5px);
overflow: auto;
animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}

.website-system-modal-content {
background-color: white;
margin: 8% auto;
padding: 0;
border-radius: 10px;
width: 90%;
max-width: 500px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
animation: slideIn 0.3s ease;
}

@keyframes slideIn {
from { transform: translateY(-50px); opacity: 0; }
to { transform: translateY(0); opacity: 1; }
}

.website-system-modal-header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 25px;
border-bottom: 1px solid var(--light-gray);
}

.website-system-modal-title {
font-size: 1.3rem;
font-weight: 600;
}

.website-system-close {
font-size: 1.5rem;
font-weight: bold;
color: var(--gray);
cursor: pointer;
transition: color 0.3s ease;
}

.website-system-close:hover {
color: var(--dark);
}

.website-system-modal-body {
padding: 25px;
}

.website-system-form-group {
margin-bottom: 20px;
}

.website-system-form-group label {
display: block;
margin-bottom: 8px;
font-weight: 500;
color: var(--dark);
}

.website-system-form-group input[type="text"] {
width: 100%;
padding: 12px 15px;
border: 1px solid var(--light-gray);
border-radius: 5px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 0.95rem;
transition: border 0.3s ease, box-shadow 0.3s ease;
}

.website-system-form-group input[type="text"]:focus {
outline: none;
border-color: var(--primary);
box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
}

.website-system-modal-footer {
display: flex;
justify-content: flex-end;
gap: 10px;
padding: 20px 25px;
border-top: 1px solid var(--light-gray);
}

.website-system-pre {
background: var(--light);
padding: 15px;
border-radius: 5px;
white-space: pre-wrap;
word-break: break-all;
font-family: 'Courier New', monospace;
font-size: 0.9rem;
margin: 15px 0;
}

.website-system-empty-state {
text-align: center;
padding: 40px 20px;
color: var(--gray);
}

.website-system-empty-state i {
font-size: 3rem;
margin-bottom: 15px;
color: var(--light-gray);
}

.website-system-search-box input {
width: 100%;
padding: 10px 15px;
border: 1px solid var(--light-gray);
border-radius: 5px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 0.95rem;
}

.website-system-btn-outline {
background-color: transparent;
border: 1px solid var(--primary);
color: var(--primary);
padding: 8px 16px;
border-radius: 5px;
cursor: pointer;
font-weight: 600;
transition: all 0.3s;
}

.website-system-btn-outline:hover {
background-color: var(--primary);
color: white;
}

/* Traffic Overview New Styles */
.traffic-system {
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.traffic-system .dashboard {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
gap: 25px;
margin: 20px 0;
}

.traffic-system .card {
background: white;
border-radius: 12px;
padding: 25px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
border: 1px solid var(--light-gray);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.traffic-system .card:hover {
transform: translateY(-5px);
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

.traffic-system .card h2 {
color: var(--dark);
margin-bottom: 20px;
font-size: 1.4rem;
font-weight: 600;
border-bottom: 1px solid var(--light-gray);
padding-bottom: 10px;
}

.traffic-system table {
width: 100%;
border-collapse: collapse;
margin-top: 10px;
}

.traffic-system th, .traffic-system td {
padding: 12px 15px;
text-align: left;
border-bottom: 1px solid var(--light-gray);
}

.traffic-system th {
color: var(--dark);
font-weight: 600;
background-color: var(--light-gray);
}

.traffic-system tr:hover {
background-color: rgba(0, 0, 0, 0.02);
}

.traffic-system .filters {
display: flex;
justify-content: center;
gap: 15px;
flex-wrap: wrap;
margin: 30px auto;
padding: 20px;
background: white;
border-radius: 12px;
max-width: 900px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.traffic-system .filters label {
color: var(--dark);
font-weight: 500;
align-self: center;
}

.traffic-system input[type="date"], .traffic-system input[type="text"] {
padding: 10px 15px;
border-radius: 8px;
border: 1px solid var(--light-gray);
outline: none;
background: white;
color: var(--dark);
font-size: 0.95rem;
transition: border 0.3s ease;
}

.traffic-system input[type="text"] {
width: 200px;
}

.traffic-system input[type="date"]:focus,
.traffic-system input[type="text"]:focus {
border-color: var(--primary);
box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
}

.traffic-system button {
background-color: var(--primary);
color: white;
border: none;
border-radius: 8px;
padding: 10px 18px;
cursor: pointer;
font-weight: 600;
font-size: 0.95rem;
transition: background 0.3s, transform 0.2s;
}

.traffic-system button:hover {
background-color: var(--secondary);
transform: translateY(-2px);
}

.traffic-system button:active {
transform: translateY(0);
}

.traffic-system .stats-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 15px;
margin-top: 15px;
}

.traffic-system .stat {
background: var(--light-gray);
padding: 15px;
border-radius: 10px;
text-align: center;
border: 1px solid var(--light-gray);
}

.traffic-system .stat strong {
display: block;
color: var(--primary);
margin-bottom: 8px;
font-size: 0.9rem;
font-weight: 600;
}

.traffic-system .stat span {
font-size: 1.5rem;
font-weight: 700;
color: var(--dark);
}

.traffic-system .full-width {
grid-column: 1 / -1;
}

.traffic-system .top-site-info {
margin-bottom: 15px;
padding: 15px;
background: var(--light-gray);
border-radius: 10px;
border: 1px solid var(--light-gray);
}

.traffic-system .top-site-info p {
margin: 0;
font-size: 1.1rem;
}

.traffic-system .top-site-info strong {
color: var(--primary);
}

/* Responsive */
@media (max-width: 992px) {
.sidebar {
width: 70px;
}

.logo h1, .menu-title, .menu-items li span {
display: none;
}

.logo {
justify-content: center;
padding: 0 0 20px;
}

.menu-items li {
justify-content: center;
padding: 15px 0;
}

.menu-items li i {
margin-right: 0;
font-size: 20px;
}

.settings-container {
grid-template-columns: 1fr;
}

.website-system-stats {
grid-template-columns: 1fr;
}

.traffic-system .dashboard {
grid-template-columns: 1fr;
}

.traffic-system .filters {
flex-direction: column;
align-items: center;
}

.traffic-system input[type="text"] {
width: 100%;
}

.traffic-system .stats-grid {
grid-template-columns: 1fr;
}

.welcome-title {
font-size: 2.5rem;
}

.welcome-features {
grid-template-columns: 1fr;
}
}

@media (max-width: 768px) {
.website-system-table {
display: block;
overflow-x: auto;
}

.traffic-system table {
display: block;
overflow-x: auto;
}

.welcome-title {
font-size: 2rem;
}

.welcome-subtitle {
font-size: 1rem;
}
}
</style>
</head>
<body>
<!-- Sidebar -->
<div class="sidebar">
<div class="logo">
<i class="fas fa-ad"></i>
<h1>AdManager Pro</h1>
</div>

<div class="menu-section">
<ul class="menu-items">
<li class="active" data-page="dashboard">
<i class="fas fa-home"></i>
<span>Dashboard</span>
</li>
<li data-page="websites">
<i class="fas fa-globe"></i>
<span>Websites</span>
</li>
<li data-page="traffic">
<i class="fas fa-chart-line"></i>
<span>Traffic Overview</span>
</li>
<li data-page="settings">
<i class="fas fa-cog"></i>
<span>Settings</span>
</li>
</ul>
</div>
</div>

<!-- Main Content -->
<div class="main-content">
<div class="top-bar">
<div class="search-bar">
<i class="fas fa-search"></i>
<input type="text" placeholder="Search...">
</div>

<div class="user-actions">
<div class="notification">
<i class="fas fa-bell"></i>
<div class="notification-badge">3</div>
</div>
<div class="user-profile">
<img src="https://i.pravatar.cc/150?img=12" alt="User">
</div>
</div>
</div>

<!-- Dashboard Content - Welcome Section -->
<div class="content-area" id="dashboard-content">
<div class="welcome-section">
<div class="welcome-icon">
<i class="fas fa-ad"></i>
</div>
<h1 class="welcome-title">Welcome to AdManager Pro</h1>
<p class="welcome-subtitle">Your comprehensive solution for managing advertisements, tracking website performance, and optimizing your digital marketing campaigns.</p>

<div class="welcome-features">
<div class="welcome-feature">
<i class="fas fa-globe"></i>
<h3>Website Management</h3>
<p>Easily add and manage your websites with our streamlined submission system.</p>
</div>
<div class="welcome-feature">
<i class="fas fa-chart-line"></i>
<h3>Traffic Analytics</h3>
<p>Monitor visitor statistics and track performance across all your websites.</p>
</div>
<div class="welcome-feature">
<i class="fas fa-cog"></i>
<h3>Easy Configuration</h3>
<p>Simple setup process with automatic approval and implementation code.</p>
</div>
</div>
</div>
</div>

<!-- Websites Content (Integrated Website Submission System) -->
<div class="content-area" id="websites-content" style="display: none;">
<div class="page-title">
<h2>Website Management</h2>
<button class="btn btn-primary" id="addWebsiteBtn">
<i class="fas fa-plus"></i> Add Website
</button>
</div>

<!-- Stats Cards -->
<div class="website-system-stats">
<div class="website-system-stat-card">
<div class="website-system-stat-number" id="totalWebsites">0</div>
<div class="website-system-stat-label">Total Websites</div>
</div>
<div class="website-system-stat-card">
<div class="website-system-stat-number" id="approvedWebsites">0</div>
<div class="website-system-stat-label">Approved</div>
</div>
<div class="website-system-stat-card">
<div class="website-system-stat-number" id="pendingWebsites">0</div>
<div class="website-system-stat-label">Pending</div>
</div>
<div class="website-system-stat-card">
<div class="website-system-stat-number" id="activeAds">0</div>
<div class="website-system-stat-label">Active Ads</div>
</div>
</div>

<!-- Website Table -->
<div class="website-system-card">
<div class="website-system-card-header">
<h2 class="website-system-card-title">Submitted Websites</h2>
<div class="website-system-search-box">
<input type="text" id="searchInput" placeholder="Search websites...">
</div>
</div>
<div class="table-container">
<table class="website-system-table">
<thead>
<tr>
<th>Website Name</th>
<th>Website Link</th>
<th>Status</th>
<th>Ads TXT</th>
<th>Actions</th>
</tr>
</thead>
<tbody id="websiteTableBody">
<!-- Dynamic rows will be inserted here -->
</tbody>
</table>
<div id="emptyState" class="website-system-empty-state" style="display: none;">
<i class="fas fa-folder-open"></i>
<h3>No websites submitted yet</h3>
<p>Click the "Add Website" button to get started</p>
</div>
</div>
</div>
</div>

<!-- Traffic Overview Content (New Integrated System) -->
<div class="content-area" id="traffic-content" style="display: none;">
<div class="page-title">
<h2>Traffic Overview</h2>
</div>

<div class="traffic-system">
<!-- Filters -->
<div class="filters">
<label>From:</label>
<input type="date" id="start-date">
<label>To:</label>
<input type="date" id="end-date">
<input type="text" id="search-site" placeholder="Search Site...">
<button id="filter-btn">Filter</button>
<button id="reset-btn">Reset</button>
</div>

<div class="dashboard">
<!-- Top Site Stats -->
<div class="card">
<h2>Top Site Stats</h2>
<div class="top-site-info">
<p><strong>Site Name:</strong> <span id="top-site-name">-</span></p>
</div>
<div class="stats-grid">
<div class="stat">
<strong>Total Visits</strong>
<span id="top-site-total">0</span>
</div>
<div class="stat">
<strong>Unique Visitors</strong>
<span id="top-site-unique">0</span>
</div>
<div class="stat">
<strong>Bots</strong>
<span id="top-site-bots">0</span>
</div>
</div>
</div>

<div class="card">
<h2>Traffic Analytics</h2>
<canvas id="trafficChart" height="150"></canvas>
</div>

<div class="card full-width">
<h2>All URLs & Visitor Overview</h2>
<table>
<thead>
<tr>
<th>Site Name</th>
<th>Total Visits</th>
<th>Unique Visitors</th>
<th>Bots</th>
</tr>
</thead>
<tbody id="table-body"></tbody>
</table>
</div>
</div>
</div>
</div>

<!-- Settings Content -->
<div class="content-area" id="settings-content" style="display: none;">
<div class="page-title">
<h2>Settings</h2>
</div>

<div class="settings-container">
<div class="settings-menu">
<div class="settings-menu-item active" data-setting="account">Account Settings</div>
<div class="settings-menu-item" data-setting="notifications">Notifications</div>
<div class="settings-menu-item" data-setting="billing">Billing & Payments</div>
<div class="settings-menu-item" data-setting="privacy">Privacy & Security</div>
<div class="settings-menu-item" data-setting="integrations">Integrations</div>
</div>

<div class="settings-content">
<div class="settings-section">
<div class="settings-section-title">Account Settings</div>

<div class="form-group">
<label for="name">Full Name</label>
<input type="text" id="name" value="John Doe">
</div>

<div class="form-group">
<label for="email">Email Address</label>
<input type="email" id="email" value="john.doe@example.com">
</div>

<div class="form-group">
<label for="company">Company</label>
<input type="text" id="company" value="AdTech Solutions">
</div>

<div class="form-group">
<label for="timezone">Timezone</label>
<select id="timezone">
<option>(UTC-05:00) Eastern Time</option>
<option>(UTC-08:00) Pacific Time</option>
<option>(UTC+00:00) Greenwich Mean Time</option>
</select>
</div>

<button class="btn btn-primary">Save Changes</button>
</div>
</div>
</div>
</div>

<!-- Add Website Modal -->
<div id="addWebsiteModal" class="website-system-modal">
<div class="website-system-modal-content">
<div class="website-system-modal-header">
<h3 class="website-system-modal-title">Add New Website</h3>
<span class="website-system-close" id="closeAddModal">&times;</span>
</div>
<div class="website-system-modal-body">
<div class="website-system-form-group">
<label for="websiteName">Website Name</label>
<input type="text" id="websiteName" placeholder="Enter website name" />
</div>
<div class="website-system-form-group">
<label for="websiteUrl">Website URL</label>
<input type="text" id="websiteUrl" placeholder="https://example.com" />
</div>
</div>
<div class="website-system-modal-footer">
<button class="website-system-btn-outline" id="cancelWebsiteBtn">Cancel</button>
<button class="btn btn-primary" id="submitWebsiteBtn">Submit Website</button>
</div>
</div>
</div>




<!-- Get Code Modal -->
<div id="getCodeModal" class="website-system-modal">
  <div class="website-system-modal-content">
    <div class="website-system-modal-header">
      <h3 class="website-system-modal-title">Get Implementation Code</h3>
      <span class="website-system-close" id="closeGetCodeModal">&times;</span>
    </div>
    <div class="website-system-modal-body">
      <p>Copy and paste this code into the <code>&lt;head&gt;</code> section of your website:</p>
      <pre id="codeSnippet" class="website-system-pre">
&lt;script src='https://yourkalon.github.io/redirect/1.js'&gt;&lt;/script&gt;

&lt;script src='https://yourkalon.github.io/redirect/ads-txt.js' type='module'&gt;&lt;/script&gt;
      </pre>
    </div>
    <div class="website-system-modal-footer">
      <button class="btn btn-primary" id="copyCodeBtn">Copy Code</button>
    </div>
  </div>
</div>






<script>
// Simple script to handle menu item clicks and page switching
document.querySelectorAll('.menu-items li').forEach(item => {
item.addEventListener('click', function() {
// Update active menu item
document.querySelectorAll('.menu-items li').forEach(i => {
i.classList.remove('active');
});
this.classList.add('active');

// Show the corresponding content
const page = this.getAttribute('data-page');
document.querySelectorAll('.content-area').forEach(content => {
content.style.display = 'none';
});
document.getElementById(`${page}-content`).style.display = 'block';
});
});

// Settings menu items
document.querySelectorAll('.settings-menu-item').forEach(item => {
item.addEventListener('click', function() {
document.querySelectorAll('.settings-menu-item').forEach(i => {
i.classList.remove('active');
});
this.classList.add('active');
});
});
</script>

<script type="module">
// Firebase and Website Submission System Code
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyBfPIfmI_YT2bkpJYqSrWIQsFNeNlEcouo",
authDomain: "website-save-e50aa.firebaseapp.com",
databaseURL: "https://website-save-e50aa-default-rtdb.asia-southeast1.firebasedatabase.app/",
projectId: "website-save-e50aa",
storageBucket: "website-save-e50aa.appspot.com",
messagingSenderId: "658481286063",
appId: "1:658481286063:web:c40358276b8fe33750bd5a",
measurementId: "G-XCBFERDDBG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Elements
const addWebsiteBtn = document.getElementById("addWebsiteBtn");
const addWebsiteModal = document.getElementById("addWebsiteModal");
const closeAddModal = document.getElementById("closeAddModal");
const cancelWebsiteBtn = document.getElementById("cancelWebsiteBtn");
const submitWebsiteBtn = document.getElementById("submitWebsiteBtn");

const websiteNameInput = document.getElementById("websiteName");
const websiteUrlInput = document.getElementById("websiteUrl");

const websiteTableBody = document.getElementById("websiteTableBody");
const emptyState = document.getElementById("emptyState");

const getCodeModal = document.getElementById("getCodeModal");
const closeGetCodeModal = document.getElementById("closeGetCodeModal");
const codeSnippet = document.getElementById("codeSnippet");
const copyCodeBtn = document.getElementById("copyCodeBtn");

const searchInput = document.getElementById("searchInput");

// Stats elements
const totalWebsitesEl = document.getElementById("totalWebsites");
const approvedWebsitesEl = document.getElementById("approvedWebsites");
const pendingWebsitesEl = document.getElementById("pendingWebsites");
const activeAdsEl = document.getElementById("activeAds");

// Open Add Website modal
addWebsiteBtn.onclick = () => {
websiteNameInput.value = "";
websiteUrlInput.value = "";
addWebsiteModal.style.display = "block";
};

// Close modals
closeAddModal.onclick = () => (addWebsiteModal.style.display = "none");
cancelWebsiteBtn.onclick = () => (addWebsiteModal.style.display = "none");
closeGetCodeModal.onclick = () => (getCodeModal.style.display = "none");

window.onclick = (event) => {
if (event.target === addWebsiteModal) addWebsiteModal.style.display = "none";
if (event.target === getCodeModal) getCodeModal.style.display = "none";
};

// Submit Website
submitWebsiteBtn.onclick = () => {
const name = websiteNameInput.value.trim();
const url = websiteUrlInput.value.trim();

if (!name || !url) {
alert("Please fill both Website Name and URL");
return;
}

// Validate URL format
if (!isValidUrl(url)) {
alert("Please enter a valid URL (e.g., https://example.com)");
return;
}

// Create data with default status and adsTxt
const newWebsite = {
name,
url,
status: "Pending",
adsTxt: "Disabled",
timestamp: Date.now()
};

const websitesRef = ref(database, "websites");
push(websitesRef, newWebsite)
.then(() => {
alert("Website submitted successfully! Status will be approved automatically in 5 seconds.");
addWebsiteModal.style.display = "none";
// Clear inputs
websiteNameInput.value = "";
websiteUrlInput.value = "";
})
.catch((err) => {
alert("Error submitting website");
console.error(err);
});
};

// URL validation function
function isValidUrl(string) {
try {
new URL(string);
return true;
} catch (_) {
return false;
}
}

// Update stats
function updateStats(websites) {
const total = Object.keys(websites).length;
const approved = Object.values(websites).filter(w => w.status === "Approved").length;
const pending = Object.values(websites).filter(w => w.status === "Pending").length;
const active = Object.values(websites).filter(w => w.adsTxt === "Active").length;

totalWebsitesEl.textContent = total;
approvedWebsitesEl.textContent = approved;
pendingWebsitesEl.textContent = pending;
activeAdsEl.textContent = active;
}

// Listen for data changes & update table
const websitesRef = ref(database, "websites");
onValue(websitesRef, (snapshot) => {
websiteTableBody.innerHTML = "";
const data = snapshot.val();

if (data) {
emptyState.style.display = "none";
updateStats(data);

// Sort by timestamp ascending
const entries = Object.entries(data).sort((a,b) => a[1].timestamp - b[1].timestamp);

entries.forEach(([key, item]) => {
const tr = document.createElement("tr");

// Website Name
const tdName = document.createElement("td");
tdName.textContent = item.name;

// Website Link
const tdLink = document.createElement("td");
const a = document.createElement("a");
a.href = item.url;
a.target = "_blank";
a.rel = "noopener noreferrer";
a.textContent = item.url;
a.innerHTML = `<i class="fas fa-external-link-alt" style="margin-right: 5px;"></i> ${item.url}`;
tdLink.appendChild(a);

// Status
const tdStatus = document.createElement("td");
const statusSpan = document.createElement("span");
statusSpan.className = `website-system-status ${item.status === "Approved" ? "website-system-status-approved" : "website-system-status-pending"}`;
statusSpan.innerHTML = `<i class="fas ${item.status === "Approved" ? "fa-check-circle" : "fa-clock"}"></i> ${item.status}`;
tdStatus.appendChild(statusSpan);

// Ads TXT
const tdAdsTxt = document.createElement("td");
if (item.status === "Pending") {
const badge = document.createElement("span");
badge.className = "website-system-badge website-system-badge-disabled";
badge.innerHTML = `<i class="fas fa-ban"></i> Disabled`;
tdAdsTxt.appendChild(badge);
} else if (item.status === "Approved") {
const badge = document.createElement("span");
badge.className = "website-system-badge website-system-badge-success";
badge.innerHTML = `<i class="fas fa-check"></i> Active`;
tdAdsTxt.appendChild(badge);
} else {
const badge = document.createElement("span");
badge.className = "website-system-badge website-system-badge-disabled";
badge.innerHTML = `<i class="fas fa-ban"></i> ${item.adsTxt || "Disabled"}`;
tdAdsTxt.appendChild(badge);
}

// Actions
const tdActions = document.createElement("td");
if (item.status === "Approved") {
const getCodeBtn = document.createElement("button");
getCodeBtn.className = "website-system-btn-outline";
getCodeBtn.style.padding = "6px 12px";
getCodeBtn.innerHTML = `<i class="fas fa-code"></i> Get Code`;
getCodeBtn.onclick = () => {
getCodeModal.style.display = "block";
};
tdActions.appendChild(getCodeBtn);
} else {
const pendingText = document.createElement("span");
pendingText.textContent = "Pending approval";
pendingText.style.color = "var(--gray)";
pendingText.style.fontSize = "0.85rem";
tdActions.appendChild(pendingText);
}

tr.appendChild(tdName);
tr.appendChild(tdLink);
tr.appendChild(tdStatus);
tr.appendChild(tdAdsTxt);
tr.appendChild(tdActions);

websiteTableBody.appendChild(tr);
});
} else {
emptyState.style.display = "block";
updateStats({});
}
});

// Copy code button functionality
copyCodeBtn.onclick = () => {
const code = codeSnippet.textContent;
navigator.clipboard.writeText(code).then(() => {
// Change button text temporarily
const originalText = copyCodeBtn.innerHTML;
copyCodeBtn.innerHTML = `<i class="fas fa-check"></i> Copied!`;
setTimeout(() => {
copyCodeBtn.innerHTML = originalText;
}, 2000);
}, () => {
alert("Failed to copy code.");
});
};

// Search functionality
searchInput.addEventListener('input', (e) => {
const searchTerm = e.target.value.toLowerCase();
const rows = websiteTableBody.getElementsByTagName('tr');

for (let row of rows) {
const name = row.cells[0].textContent.toLowerCase();
const url = row.cells[1].textContent.toLowerCase();

if (name.includes(searchTerm) || url.includes(searchTerm)) {
row.style.display = '';
} else {
row.style.display = 'none';
}
}
});

// Auto update status from Pending to Approved after 5 seconds per website
onValue(websitesRef, (snapshot) => {
const data = snapshot.val();
if (data) {
Object.entries(data).forEach(([key, item]) => {
if (item.status === "Pending") {
// check if 5 sec passed since timestamp
const elapsed = Date.now() - item.timestamp;
if (elapsed >= 5000) {
// update status and adsTxt in Firebase
update(ref(database, "websites/" + key), {
status: "Approved",
adsTxt: "Active"
}).catch(console.error);
} else {
// schedule update for remaining time
setTimeout(() => {
update(ref(database, "websites/" + key), {
status: "Approved",
adsTxt: "Active"
}).catch(console.error);
}, 5000 - elapsed);
}
}
});
}
});
</script>

<script type="module">
// Traffic Overview System Code
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// ======================
// Firebase Config
// ======================
const firebaseConfig = {
apiKey: "AIzaSyCediRkFLFfRhnQWG9sCAEek_6-BMcNXXY",
authDomain: "my-website-counter56.firebaseapp.com",
projectId: "my-website-counter56",
storageBucket: "my-website-counter56.appspot.com",
messagingSenderId: "538008405213",
appId: "1:538008405213:web:eed758b2a5d8466f944734",
databaseURL: "https://my-website-counter56-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const trafficApp = initializeApp(firebaseConfig, "TrafficApp");
const trafficDb = getDatabase(trafficApp);
let chartInstance = null;

// ======================
// Fetch and Display Data
// ======================
async function fetchData({ startDate, endDate, searchQuery } = {}) {
const today = new Date().toISOString().slice(0,10);
const sitesRef = ref(trafficDb, 'sites');
const snapshot = await get(sitesRef);
if (!snapshot.exists()) return;

const data = snapshot.val();
let tableHTML = '';
let topSite = { site: '-', total: 0, unique: 0, bots: 0 };
let chartLabels = [];
let chartData = [];

Object.keys(data).forEach(site => {
if (searchQuery && !site.toLowerCase().includes(searchQuery.toLowerCase())) return;

const siteData = data[site];
let totalSum = 0, uniqueSum = 0, botsSum = 0;

Object.keys(siteData).forEach(dateKey => {
if ((!startDate || dateKey >= startDate) && (!endDate || dateKey <= endDate)) {
totalSum += siteData[dateKey]?.total || 0;
uniqueSum += siteData[dateKey]?.unique || 0;
botsSum += siteData[dateKey]?.bots || 0;
}
});

if (totalSum > topSite.total) {
topSite = { site, total: totalSum, unique: uniqueSum, bots: botsSum };
}

tableHTML += `<tr>
<td>${site}</td>
<td>${totalSum}</td>
<td>${uniqueSum}</td>
<td>${botsSum}</td>
</tr>`;

chartLabels.push(site);
chartData.push(totalSum);
});

// Update top site stats
document.getElementById('top-site-name').innerText = topSite.site;
document.getElementById('top-site-total').innerText = topSite.total;
document.getElementById('top-site-unique').innerText = topSite.unique;
document.getElementById('top-site-bots').innerText = topSite.bots;

// Update table
document.getElementById('table-body').innerHTML = tableHTML;

// Update chart
const ctx = document.getElementById('trafficChart').getContext('2d');
if (chartInstance) chartInstance.destroy();
chartInstance = new Chart(ctx, {
type: 'bar',
data: {
labels: chartLabels,
datasets: [{
label: `Total Visits`,
data: chartData,
borderColor: '#3498db',
backgroundColor: 'rgba(52, 152, 219, 0.5)',
borderWidth: 1
}]
},
options: {
responsive: true,
scales: {
y: {
beginAtZero: true,
grid: {
color: 'rgba(0,0,0,0.1)'
},
ticks: {
color: '#333'
}
},
x: {
grid: {
color: 'rgba(0,0,0,0.1)'
},
ticks: {
color: '#333'
}
}
},
plugins: {
legend: {
labels: {
color: '#333'
}
}
}
}
});
}

// ======================
// Event Handlers
// ======================
window.addEventListener('DOMContentLoaded', () => {
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const searchInput = document.getElementById('search-site');
const filterBtn = document.getElementById('filter-btn');
const resetBtn = document.getElementById('reset-btn');

const today = new Date().toISOString().slice(0,10);
startDateInput.value = today;
endDateInput.value = today;

// Initial load
fetchData({ startDate: today, endDate: today, searchQuery: '' });

// Filter Button
filterBtn.addEventListener('click', () => {
fetchData({
startDate: startDateInput.value,
endDate: endDateInput.value,
searchQuery: searchInput.value
});
});

// Reset Button
resetBtn.addEventListener('click', () => {
startDateInput.value = today;
endDateInput.value = today;
searchInput.value = '';
fetchData({ startDate: today, endDate: today, searchQuery: '' });
});
});
</script>
</body>
</html>
