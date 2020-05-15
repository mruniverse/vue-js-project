new Vue({
    el: '#app',
    data: {
        example: 'Using Vue js!'
    },
    methods: {
        changeExample(event){
            this.example = event.target.value
        }
    }
})