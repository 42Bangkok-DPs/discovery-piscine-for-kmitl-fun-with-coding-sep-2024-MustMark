$(document).ready(function() {
    const $ft_list = $("#ft_list");
    const $NewButton = $("#NewButton");

    LoadTodo();

    $NewButton.on("click", function() {
        const todoText = prompt("Enter a new TO-DO:");
        if (todoText) {
            AddTodo(todoText);
        }
    });

    function AddTodo(text) {
        const $todoDiv = $("<div></div>").text(text).addClass("todo-item");
        $todoDiv.on("click", function() {
            if (confirm("Are you sure to remove this TO-DO?")) {
                $todoDiv.remove();
                SaveTodo();
            }
        });
        $ft_list.prepend($todoDiv);
        SaveTodo();
    }

    function SaveTodo() {
        const todo = $ft_list.children().map(function() {
            return $(this).text();
        }).get();
        document.cookie = `todo=${encodeURIComponent(JSON.stringify(todo))}; path=/;`;
    }

    function LoadTodo() {
        const cookies = document.cookie.split("; ").find(row => row.startsWith("todo="));
        if (cookies) {
            const todo = JSON.parse((decodeURIComponent(cookies).split("=")[1]));
            $.each(todo.reverse(), function(index, value) {
                AddTodo(value);
            });
        }
    }
});
