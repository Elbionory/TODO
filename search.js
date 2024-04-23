export default function search(todostext, searchInput) {
    if (searchInput !== '') {
        const regex = new RegExp(searchInput, "gi");
        return todostext.filter(todotext => {
            return !todotext.match(regex); 
        });
    } else {
        alert('You should search about a task!');
        return todostext;
    }
}
