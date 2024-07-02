/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(`${p}${a}${n}.com`);
      }
    }
  }

  console.log(domains);

  const domainList = document.createElement("ul");

  domains.forEach(domain => {
    const listItem = document.createElement("li");
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });

  document.body.appendChild(domainList);
};
