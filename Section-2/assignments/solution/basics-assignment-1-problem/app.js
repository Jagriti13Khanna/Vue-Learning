const app = Vue.createApp({
    data() {
        return {
            userName: 'Jagriti Khanna',
            userAge: '22',
            onlineImage: 'https://www.juno.ca/wp-content/uploads/Juno-HeroContent-20221108-LR-15.jpg'
        };
    },
    methods: { 
        futureAge() {
            const futureAge = Number(this.userAge) + 5; //The Number(this.userAge) part converts the userAge variable to a number, ensuring that the addition operation is performed correctly.
            return futureAge;
        },
        randomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');