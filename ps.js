var links = [
    'https://cutl.io/link1-22-07-25',
    'https://cutl.io/link2-22-07-25',
    'https://cutl.io/link3-22-07-25'
];
var randomIndex = Math.floor(Math.random() * links.length);
var selectedLink = links[randomIndex];
window.location.href = selectedLink;
