import "../styles/Second.css"


export const Secondcarousel = ()=>{
    return (
<div id="2carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <h6 className="px-5">Чёрная дыра — область пространства-времени, гравитационное притяжение которой настолько велико, что покинуть её не могут даже объекты, движущиеся со скоростью света, в том числе кванты самого света. Граница этой области называется горизонтом событий.
        </h6>
    </div>
    <div class="carousel-item">
        <h6>Квазары — это ядра молодых галактик, которые находятся на огромном расстоянии от Земли. Они могут излучать энергию, в тысячу раз превышающую ту, которую вырабатывает Млечный Путь.
        </h6>
    </div>
    <div class="carousel-item">
        <h6>Туманность — это участок межзвёздной среды, который выделяется своим излучением или поглощением излучения на общем фоне неба. Состоит в основном из газа и отчасти из пыли. 
        </h6>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#2carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#2carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}