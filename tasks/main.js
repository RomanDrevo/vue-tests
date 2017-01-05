
Vue.component('task', {
    template: `
             <li><slot></slot></li>  
            `
});






Vue.component('task-list', {
   template: `
             <div>
                
                <h1>Completed Tasks</h1>
                <task v-for="task in tasks">{{ task.description }}</task>
                
                
                <h1>Incomplete Tasks:</h1>
                <task v-for="task in incompleteTasks">{{ task.description }}</task>
                
                
             </div>   
            `,
    data(){
        return{
            tasks:[
                {description: 'Go to the store', completed: true},
                {description: 'Finish screencast', completed: false},
                {description: 'Make donation', completed: false},
                {description: 'Make dinner', completed: false},
                {description: 'Clean room', completed: true}
            ]
        }
    },

    computed:{
        incompleteTasks(){
            return this.tasks.filter(task => ! task.completed)
        }
    }
});








new Vue({
    el: "#root",



});