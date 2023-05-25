import { LightningElement, track } from 'lwc';

export default class Slideshow extends LightningElement {
  @track currentImage;

  images = [
    'newAgainimg/1.jpg',
    'newAgainimg/2.jpg',
    'newAgainimg/3.jpg',
    'newAgainimg/4.jpg',
    'newAgainimg/5.jpg',
    'newAgainimg/6.jpg',
    'newAgainimg/7.jpg',
    'newAgainimg/8.jpg',
    'newAgainimg/9.jpg'
    // Diğer fotoğrafların dosya adlarını buraya ekleyin
  ];

  connectedCallback() {
    // Slayt gösterisini başlatmak için bileşen yüklendiğinde çağrılır
    this.startSlideshow();
  }

  startSlideshow() {
    let index = 0;
    setInterval(() => {
      this.currentImage = this.images[index];
      index = (index + 1) % this.images.length;
    }, 3000); // Her 3 saniyede bir fotoğraf değiştirme
  }
}
