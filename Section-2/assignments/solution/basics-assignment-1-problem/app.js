const app = Vue.createApp({
    data() {
        return {
            name: 'Jagriti Khanna',
            age: '22',
            imageURL: 'https://www.juno.ca/wp-content/uploads/Juno-HeroContent-20221108-LR-15.jpg'
        };
    },
    methods: { 
        // futureAge() {
        //     const futureAge = Number(this.userAge) + 5; //The Number(this.userAge) part converts the userAge variable to a number, ensuring that the addition operation is performed correctly.
        //     return futureAge;
        // },
        // OR
        calculateAge() {
            const futureAge = this.age + 5;
            return futureAge;
        },
        favNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');