const list = [];

const showMenu = () => console.log(`
            TO-DO LIST
1. Type an item to add
2. Type 'list' to show all items
3. Type 'delete' to remove an item
4. Type 'q' to quit
5. Type 'help' to show this menu again
`);

console.clear();
showMenu();

while (true) {
    let action = prompt("What would you like to do?").toLowerCase();
    console.clear();

    if (action === 'q') {
        console.log("You exited the To-Do List.");
        break;
    }

    if (action === 'help') {
        showMenu();
        continue;
    }

    if (action === 'list') {
        if (list.length === 0) {
            console.log("The list is empty.");
        } else {
            console.log("Current List:");
            list.forEach((item, index) => console.log(`${index + 1}: ${item}`));
        }
    }
    else if (action === 'delete') {
        if (list.length === 0) {
            console.log("Nothing to delete, the list is empty.");
        } else {
            let index = Number(prompt("Enter the index to remove:") - 1);
            if (!isNaN(index) && index >= 0 && index < list.length) {
                console.log(`Deleted: ${list.splice(index, 1)[0]}`);
            } else {
                console.log("Invalid index.");
            }
        }
    }
    else {
        list.push(action);
        console.log(`Added: ${action}`);
    }
}
