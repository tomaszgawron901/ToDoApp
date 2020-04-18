# ToDo Mobile App

## **Folders Structure**

- **actions** (actions for redux)
- **assets** (img, fonts etc.)
- **components** (components used to build specific screens)
    - **ToDoAppComponents** (Components used to build ToDoApp screen)
    - **ToDoEditComponents** (Components used to build ToDoEdit screen)
- **constans** (only const variable ie. Colors, window dimentions e.t.c)
- **reducers** (all reducers for redux)
- **screens** (all apps screens (pages))
    - **[FOLDER]** (all you need to single screen)
- **tools** (just store)

## **Usage**

At the bottom of the screen you have 3 buttons (Home, Screen2, Todo App), these buttons are used to moving between screens.
On Home and Screen2 screen is nothing interesting.
Todo App screen allows you to add, remove, edit notes.
In the bottom-right corner of the Todo App screen you have button which after is pressed adds new note and moves you to ToDoEdit screen.
On the ToDoEdit screen you can edit your note (you can change color, title, text of the note).
At the top of the ToDoEdit screen you can see 3 buttons:
    - **BACK** - cancel all changes and navigates you to Todo App screen.
    - **SAVE & BACK** - saves changes and moves you back.
    - **DELETE** - delete the note and moves yot back.
After the note is added you can see it on the Todo App screen.
After clicking button with 'X' sign the note is deleted.
After long press on the note you will be moved to ToDoEdit screen again.
