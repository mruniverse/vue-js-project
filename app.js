new Vue({
    el: '#app',
    data: {
        example: 'Using Vue js!',
        link: 'https://google.com.br'
    },
    methods: {
        changeExample(event){
            this.example = event.target.value
        },
        saudacao(){
            return 'Boa semaninhaaaa :3'
        }
    }
})