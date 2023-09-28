import {createApp} from 'vue'
import App from './components/App.vue'
import FoodItem from './components/FoodItem.vue'
import CarouselSlide from './components/CarouselSlide.vue'

const app = createApp(App)

app.component('carousel-slide',CarouselSlide)
app.component('food-item',FoodItem)
app.mount('#app')