import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/gallery-photos/jack-hartmans.jpg", alt: "Hartmans Rocks - 2024" },
  { src: "/img/jack-cactus-cup-2024-drop.png", alt: "Cactus Cup 2024" },
  { src: "/img/gallery-photos/jack/rv-soccer-5-2020.jpg", alt: "RV Mustang Soccer - 2020" },
  { src: "/img/gallery-photos/jack-powderhorn-2024.jpg", alt: "Powderhorn MTB Race - 2020" },
  { src: "/img/mt-cb-jack.jpg", alt: "Jack at Mt Crested Butte" },
  { src: "/img/gallery-photos/jack/gunny-river-plunge-2025.jpg", alt: "Gunnison River Frozen Plunge - 2025" },
  { src: "/img/gallery-photos/jack/i-know-jack.jpg", alt: "With Wiley Cora at Jack's - 2022" },
  { src: "/img/gallery-photos/jack-blackhawk-2024.jpg", alt: "Racing at maryland Mountain - 2024" },
  { src: "/img/gallery-photos/jack/jack-stained-glass.jpg", alt: "Stained Glass" },
  { src: "/img/gallery-photos/jack/rv-soccer-3-2020.jpg", alt: "RV Mustang Soccer - 2020" },
  { src: "/img/gallery-photos/jack-cb-gravel-2024.jpg", alt: "Jack and Dad riding CB Gravel - 2024" },
  { src: "/img/gallery-photos/jack-nats-2022.jpg", alt: "MTB Collegiate Nationals - Durango - 2022" },
  { src: "/img/moose-with-jack.jpg", alt: "Crested Butte Moose, before it charged" },
  { src: "/img/gallery-photos/jack-gap-rd-jump.jpg", alt: "Gap Road Jumping - 2019" },
  { src: "/img/gallery-photos/jack-nats-2024.jpg", alt: "MTB Collegiate Nationals - Bentonville, AR - 2024" },
  { src: "/img/gallery-photos/jack-rv-soccer.1.JPG", alt: "RV Mustang Soccer" },
  { src: "/img/gallery-photos/jack-nats-.2-2024.jpg", alt: "MTB Collegiate Nationals - Bentonville, AR - 2024" },
  { src: "/img/gallery-photos/jack-taylor-cnyn-2024.jpg", alt: "Taylor Canyon Cows - 2020" },
  { src: "/img/gallery-photos/jack-west-mag-covid-jummp.JPG", alt: "West Mag Jumping during Covid - 2020" },
  { src: "/img/gallery-photos/jack-vail-2024.PNG", alt: "Vail MTB Race, 2024" },
  { src: "/img/gallery-photos/jack-signal-peak-2022.jpg", alt: "Signal Peak New Bike Day - 2022" },
  { src: "/img/gallery-photos/jack/denmark-1-2023.jpg", alt: "Denmark - 2023" },
  { src: "/img/gallery-photos/jack-ned-gravel-2024.JPG", alt: "Ned Gravel Ultra Race, 2024" },
  { src: "/img/gallery-photos/jack/rv-soccer-2-2019.jpg", alt: "RV Mustang Soccer - 2019" },
  { src: "/img/gallery-photos/jack-40-gates-jump.jpg", alt: "40 Gates Hut Jump - 2020" },
  { src: "/img/gallery-photos/jack/rv-soccer-4-2020.jpg", alt: "RV Mustang Soccer - 2020" },
];


function PhotosJack() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosJack