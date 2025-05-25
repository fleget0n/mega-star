import ton from '../assets/4418.jpg';
import cat from '../assets/catt.jpg'
import hole from '../assets/blackhole.jpg';

export const Carousel = ()=>{
    return (
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ton} class="d-block w-100" alt="это квазар"/>
    </div>
    <div class="carousel-item">
      <img src={cat} class="d-block w-100" alt="это туманность"/>
    </div>
    <div class="carousel-item">
      <img src={hole} class="d-block w-100" alt="это чёрная дыра"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}