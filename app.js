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

            this.firstName = 'Sam',
            this.lastName = 'Smith',
            this.email = 'Sam@gmail.com',
            this.gender = 'female',
            this.picture = 'http://randomuser.me/api/portraits/women/10.jpg'
        },
    },
})

app.mount('#app');
