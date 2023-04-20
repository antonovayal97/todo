import { defineStore } from 'pinia'

let ids = 0
export const useNoteStore = defineStore('notes', {
  state: () => { return {notes: [],newNoteText: ''} },
  actions: {
    addNote(noteName,todos) {
      if(this.newNoteText != "")
      {
        this.notes.push({
          name: noteName,
          id: ids++,
          isFinished: false,
          todos: todos
        })
        this.newNoteText = ''
      }
    },
    changeCheckbox(noteId,todoId){

    }
  },
})