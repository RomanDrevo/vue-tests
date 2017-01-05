

Vue.component('task-list', {
    template: `
                <div>
                    <task v-for="task in tasks">{{ task.task }} - {{ task.complete }}</task>
                </div>
                `,
    data: function () {
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to  the dawerg', complete: true},
                {task: 'Go to the farm', complete: false},
                {task: 'Go to work', complete: true}
            ]
        }
    }
});







Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el:'#root'
});