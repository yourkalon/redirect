var links = [
    'https://link1.com',
    'https://link2.com',
    'https://link3.com'
];
var randomIndex = Math.floor(Math.random() * links.length);
var selectedLink = links[randomIndex];
window.location.href = selectedLink;
