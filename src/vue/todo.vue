<template>
  <div>
    <form action="#" @submit.prevent="add">
      <input type="text" v-model="tasktobeadded" v-on:input="show1" />
      <input type="submit" value="add" />
    </form>
    <table>
      <thead>
        <th>Done</th>
        <th>Task</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tasks">
          <td><input type="checkbox" v-model="item.done" :id="'chk_' + index" /></td>
          <td>
            <label :for="'chk_' + index" :class="{ done: item.done }">{{ item.name }}</label>
          </td>
          <td><a href="#" @click="delete1(index)">Del</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "todo",
  data() {
    return {
      tasks: [
        {
          name: "吃饭",
          done: 0,
        },
        {
          name: "洗脚",
          done: 0,
        },
        {
          name: "整理房间",
          done: 1,
        },
      ],
      tasktobeadded: "",
    };
  },
  methods: {
    add() {
      if (this.tasktobeadded.length == 0) {
        return;
      }
      this.tasks.push({ name: this.tasktobeadded, done: 0 });
      this.tasktobeadded = "";
    },
    delete1(index) {
      this.tasks.splice(index, 1);
    },
    show1() {
      console.log(this.tasks);
      console.log(this.tasktobeadded);
    },
  },
};
</script>
<style scope>
body{
    font-size: 14px;
    padding: 15px 25px;
    margin: 0 auto;
}
table,form{
    width:100%;
    margin: 10px auto;;

}
form{
    display: flex;
}
form input{flex:auto;}
form input[type='submit']{margin-left: 5px;max-width: 100px;}
td ,th{
  background-color: #f3f3f3;
  padding: 5px 10px;
  font-size: 14px;
}
th{
    background-color:rgb(172, 169, 169)
}
.done {
  position: relative;
  display: inline-block;
}
.done:after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #0dbd5c8f;
  top: 0;
  left: 0;
  display: block;
  position: absolute;
}
</style>
