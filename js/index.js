new Vue({
    
    el: '#app',

    data: {
        results: [],
        nameProduct: null,
        descriptionProduct: null,
        priceProduct: null,
    },

    methods: {
        sendForm() {

            let bodyForm = {
                name: this.nameProduct,
                desc: this.descriptionProduct,
                price: this.priceProduct
            }

            axios.post('send.php', bodyForm)
            .then (response =>{
                console.log(response);
                alert("send");
            })
            .then (error => {
                console.log(error);
            })

        },

        onlyNumber() {

            if (!/\d/.test(event.key) && event.key !== '.') return event.preventDefault();

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