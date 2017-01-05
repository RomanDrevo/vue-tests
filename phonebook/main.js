

Vue.component('contact', {
    props:{
        name:{
            type: String
        },
        phone:{
            type:String
        }
    },
    template: '<li>{{ name }} - {{ phone }}</li>'
});









Vue.component('phonebook', {
    template: `
                <div>
                    
                    <h3>Add new contact:</h3>
                    <input type="text" v-model='newName' placeholder="Name">
                    <input type="text" v-model='newPhone' placeholder="Phone">
                    
                    <button @click="addNewContact" class="btn">ADD</button>
                    
                    
                    <ul>
                        <contact v-for="contact in contacts" :name="contact.name" :phone="contact.phone"></contact>
                    </ul>
                    
                    <!--<contact v-for="contact in contacts">{{ contact.name }} - {{ contact.phone }}</contact>-->
                    
                </div>
                `,
    data: function () {
        return {
            contacts: [
                {name: 'Ali', phone: '6545644564'},
                {name: 'Adolf', phone: '5555644564'},
                {name: 'Eryopg', phone: '444888555'},
                {name: 'Brew', phone: '15456445464'}
            ],
            newName: '',
            newPhone:''
        }
    },

    methods:{
        addNewContact(){
            this.contacts.push({
                name: this.newName,
                phone: this.newPhone
            });

            this.newName = '';
            this.newPhone = '';
        }
    }
});




new Vue({
    el:'#root'
});


