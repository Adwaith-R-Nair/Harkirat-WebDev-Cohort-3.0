function deleteTodo(index){
    const del = document.getElementById("todo-"+index);
    del.parentNode.removeChild(del)
    // const del2 = document.getElementById("parent")
    // del2.removeChild(del)
}