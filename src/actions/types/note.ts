const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const CHANGE_VIEW = 'CHANGE_VIEW';

export {ADD_TODO, DEL_TODO, UPDATE_TODO, CHANGE_VIEW};

let nextID = 0;

const addNote = () => ({
    type: ADD_TODO,
    id: nextID++,
    date: new Date()
});

const delNote = id => ({
    type: DEL_TODO,
    id: id
});

const updateNote = (id) => ({
    type: UPDATE_TODO,
    id: id  // TODO
});

const changeNoteView = id => ({
    type: CHANGE_VIEW,
    id: id
});