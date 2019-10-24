new Vue({
    el: '#app',
    data: {
        results: [],
        postBody: '',
    },
    methods: {
        sendPost() {
            axios.post('mail.php', {
                body: this.postBody
            })
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        axios.get('js/data.json')
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
            console.log(error);
        })
    }
});