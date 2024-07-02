/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "raccoon"];

  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(p + a + n + ".com");
      }
    }
  }

  for (let domain of domains) {
    console.log(domain);
  }

  // Display the generated domain names on the web page
  const container = document.createElement("div");
  domains.forEach(domain => {
    const domainElement = document.createElement("p");
    domainElement.textContent = domain;
    container.appendChild(domainElement);
  });
  document.body.appendChild(container);
};
