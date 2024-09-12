document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById("ft_list");
    const NewButton = document.getElementById("NewButton");

    LoadTodo();

    NewButton.addEventListener("click", () => {
        const todoText = prompt("Enter a new TO-DO:");
        if (todoText) {
            addTodo(todoText);
        }
    });

    function addTodo(text) {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = text;
        todoDiv.className = "todo-item";
        todoDiv.addEventListener("click", () => {
            if (confirm("Are you sure to remove this TO-DO?")) {
                todoDiv.remove();
                SaveTodo();
            }
        });
        ftList.insertBefore(todoDiv, ftList.firstChild);
        SaveTodo();
    }

    function SaveTodo() {

        const todo = Array.from(ftList.children).map(item => item.textContent);
        document.cookie = `todo=${JSON.stringify(todo)}; path=/;`;
    }

    function LoadTodo() {

        const cookies = document.cookie.split("; ").find(row => row.startsWith("todo="));

        if (cookies) {
            const todo = JSON.parse(cookies.split("=")[1]);
            todo.reverse().forEach(todo => addTodo(todo));
        }
    }
});
