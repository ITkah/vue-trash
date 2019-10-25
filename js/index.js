new Vue({
    el: '#app',
    data: {
        results: [],
        nameProduct: null,
        descriptionProduct: null,
        priceProduct: null,
    },
    methods: {
        sendForm(e) {
            e.preventDefault();

            axios.post('send.php',{
                name: this.nameProduct,
                desc: this.descriptionProduct,
                price: this.priceProduct
            })

            .then (response =>{
                console.log(response);
                alert("ok");
            })
            .then (error => {
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