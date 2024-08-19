function createList() {
  const ul = document.createElement("ul");
  ul.id = "list";

  const Test = ["Test 1", "Test 2", "Test 3"];
  Test.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  return ul;
}
const result = createList();
console.log(result);
