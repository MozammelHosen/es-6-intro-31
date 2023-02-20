document
  .getElementById("background-color")
  .addEventListener("click", function () {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
      friend.style.backgroundColor = "lightblue";
      friend.style.margin = "10px";
      friend.style.padding = "10px 20px";
      friend.style.borderRadius = "20px";
      friend.style.fontSize = "20px";
    }
  });

document
  .getElementById("background-third")
  .addEventListener("click", function () {
    const friend = document.getElementById("friend-third");
    friend.style.backgroundColor = "#ff600e";
    friend.style.textAlign = "center";
    friend.style.margin = "10px";
    friend.style.padding = "10px 20px";
    friend.style.borderRadius = "20px";
    friend.style.fontSize = "20px";
    friend.style.color = "#ffffff";
  });

//  addded Friends list
document.getElementById("add-friend").addEventListener("click", function () {
  const section = document.getElementById("sectionn");
  const newDiv = document.createElement("div");
//   added this className
  newDiv.classList.add("friend");
  newDiv.innerHTML = `
    <h3 class="friend-name">friend-${section.children.length + 1}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</p>
    `;
  section.appendChild(newDiv);
});
