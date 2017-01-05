Vue.component('modal',{
    template: `
         <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid cupiditate deleniti
                    doloremque ea ex, facilis ipsa laboriosam nisi nobis numquam obcaecati omnis porro reiciendis,
                    repellendus, soluta vel veritatis?
                </p>
            </div>
            <button class="modal-close" @click="$emit('closexxx')"></button>
        </div>
                `,
    data(){
        return{

        }
    },

    methods:{

    }
});








new Vue({
    el:'#root',
    data:{
        showModal: false
    },
    methods:{
        showModalWindow(){
            this.showModal = true
        }
    }
});