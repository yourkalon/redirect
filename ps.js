var links = [
    "https://link1.com",
    "https://link2.com",
    "https://link3.com"
  ];
  var random = Math.floor(Math.random() * links.length);
  window.location.replace(links[random]);
