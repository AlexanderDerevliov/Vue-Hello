
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "Welcome to VueJS Framework!",
            imgSrc: "img/vue.jpeg"
        }
    },
    methods: {
        greeting: function() {
            alert("Stai per iniziare un'esperienza meravigliosa");
        }
    }
 
});

app.mount("#app");