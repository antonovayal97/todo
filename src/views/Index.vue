<script setup>
import { useNoteStore } from '@/stores/notes'
import NoteOutside from '../components/NoteOutside.vue'
const note = useNoteStore()
let newTodoArr = [
  {
    name: 'asdasd',
    active: true,
    id: 1
  },
  {
    name: 'asasdaddasd',
    active: true,
    id: 2
  }
]
</script>

<script>
export default {
  components: {
    NoteOutside
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <main>
    <div class="main-wrap">
      <div class="todo">
        <div class="todo__header">
          <h1>Заметки</h1>
        </div>
        <div class="todo__wrap">
          <div class="todo__create">
            <input type="text" v-model="note.newNoteText" placeholder="Название заметки">
            <a href="#" class="todo__create-btn" :class="{'todo__create-btn_disable' : note.newNoteText == ''}" @click="note.addNote(note.newNoteText,newTodoArr)">
              <span>Создать заметку</span>
            </a>
          </div>
          <div class="todo__list">
            <NoteOutside v-for="n in note.notes" :id="n.id" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.todo
{
  margin-top: 160px;
}
.todo__header
{

}
.todo__wrap
{
  display: flex;
  flex-direction: row-reverse;
}
.todo__create
{
  display: flex;
  justify-content: flex-end;
  height: fit-content;
  margin-left: 30px;
}
.todo__create input
{
  margin-right: 15px;
  padding: 0 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #a2a2a2
}
.todo__create-btn
{
  padding: 10px 20px;
  background-color: #42b883;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
}
.todo__create-btn_disable
{
  background-color: #a2a2a2;
  cursor: not-allowed
}
.todo__list
{
  flex: 1;
}
.todo__item
{

}
</style>