<template>
    <div class="card-container m-5">
        <div class="card" style="width: 18rem;" v-for="(card, index) in cards" :key="index">
            <img :src="card.imageUrl" class="card-img-top" alt="Card Image">
            <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <a :href="card.link" class="btn btn-primary" @click="toggleVisible">{{ isVisible? "Hide" : "Show" }}</a>
            </div>
        </div>
    </div>
    <div class="card-container m-5">
        <div class="card" style="width: 18rem;" v-for="(card, index) in cards2" :key="index">
          <img :src="card.imageUrl" class="card-img-top" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <a :href="card.link" class="btn btn-primary" @click="toggleVisible">{{ isVisible? "Hide" : "Show" }}</a>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            imageUrl: 'path/to/image1.jpg',
            title: 'Card Title 1',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image2.jpg',
            title: 'Card Title 2',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image3.jpg',
            title: 'Card Title 3',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image4.jpg',
            title: 'Card Title 4',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image5.jpg',
            title: 'Card Title 5',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image6.jpg',
            title: 'Card Title 6',
            link: '#',
            buttonText: 'Detail'
          },
        ],
        cards2: [
          {
            imageUrl: 'path/to/image1.jpg',
            title: 'Card Title 1',
            link: '#news2',
            buttonText: 'Detail',
          },
          {
            imageUrl: 'path/to/image2.jpg',
            title: 'Card Title 2',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image3.jpg',
            title: 'Card Title 3',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image4.jpg',
            title: 'Card Title 4',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image5.jpg',
            title: 'Card Title 5',
            link: '#',
            buttonText: 'Detail'
          },
          {
            imageUrl: 'path/to/image6.jpg',
            title: 'Card Title 6',
            link: '#',
            buttonText: 'Detail'
          },
        ],
        isVisible: false,
      };
    
    },
    methods:{
        
                toggleVisible(){
                    this.isVisible = !this.isVisible
                }
    }
  };
  </script>
  
  <style>
  .card-container {
    display: flex;
 
  }
  </style>
  