let ctr = 1;
        function deleteTodo(index){
            const del = document.getElementById("todo-" + index);
            del.parentNode.removeChild(del)
        }

        function addTodo() {
            const input = document.querySelector("input");
            value = input.value;

            const add = document.createElement("div");
            add.setAttribute("id", "todo-" + ctr)
            add.innerHTML = "<div>" + value + "</div> <button onClick = 'deleteTodo(" + ctr + ")'>Delete</button>";

            const parent = document.querySelector("body");
            parent.appendChild(add);
            ctr += 1;
        }