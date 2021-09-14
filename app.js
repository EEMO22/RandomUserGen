const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'http://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://cors-anywhere.herokuapp.com/http://randomuser.me/api/')
            //  프록시 서버 경유 우회 -> CORS
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app');
