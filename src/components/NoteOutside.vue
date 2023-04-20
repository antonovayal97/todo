<script>
import { useNoteStore } from '@/stores/notes'
import { computed } from "vue";
export default {
    data() {
    return {
    //  noteTodo: "",
    //  note: useNoteStore()
    }
  },
    created()
    {
        
    }
  }
</script>
<script setup>
let note = useNoteStore()
const id = defineProps({
  id: Number
})
console.log(id)
const noteTodo = computed(() => note.notes.find((n) => {
            if(n.id == id.id)
            {
                return n
            }
        }))
</script>
<template>
  <div class="note">
        <div class="note__top">
            <div class="note__name">
                <span>
                {{ noteTodo.name }}
                </span>
            </div>
            <div class="note__btns">
                <a href="#" class="btn btn-change">
                    <span>
                        изменить
                    </span>
                </a>
                <a href="#" class="btn btn-delete">
                    <span>
                    удалить
                    </span>
                </a>
            </div>
        </div>
        <div class="note__bot">
             <div class="todo__list">
                <div class="todo" v-for="td in noteTodo.todos">
                    <div class="todo__check">
                        <input type="checkbox" @click="note.changeCheckbox(noteTodo.id,td.id)">
                    </div>
                    <div class="todo__name" :class="{'todo__name_active' : td.active}">
                        {{ td.name }}
                    </div>
                </div>
             </div>
        </div>
  </div>
</template>

<style scoped>
.note
{
    border-bottom: 1px solid #a2a2a2;
}
.note__top
{
    display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 0;
}
.note__name
{
   
}
.note__btns
{
    display: flex;
}
.btn
{
    display: block;
    margin-left: 15px;
    text-decoration: none;
    padding: 10px 20px;
    background-color: ;
    color: #000;
    border-radius: 5px;
}
.btn-change:hover
{
    background-color: cadetblue;
    color: #fff;
}
.btn-delete:hover
{
    background-color:brown;
    color: #fff;
}
.todo
{
    display: flex;
    padding: 15px 0;
}
.todo__check
{
    margin-right: 15px;
}
.todo__name
{
 
}
.todo__name_active
{
    text-decoration: line-through
}
</style>