import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/cb_nordic.jpg", alt: "Nordic Trails under Mt. Crested Butte" },
  { src: "/img/mt-cb-jack.jpg", alt: "Jack at Mt Crested Butte" },
  { src: "/img/cb-nordic-sun.jpg", alt: "CB Nordic Sunshine" },
  { src: "/img/cb-moose.jpg", alt: "Crested Butte Moose" },
  { src: "/img/cb-nordic-crystals.jpg", alt: "CB Nordic Crystals" },
  { src: "/img/moose-with-jack.jpg", alt: "Crested Butte Moose" },
  { src: "/img/gallery-photos/ski/jack-n-jamie-eldora.jpg", alt: "Eldora Nordic" },
  { src: "/img/gallery-photos/ski/jack-face-plant.jpg", alt: "Eldora Nordic Face Plant" },
  { src: "/img/gallery-photos/ski/lions-den-1.jpg", alt: "Lion's Den, Winter Park - South Entrance" },
  { src: "/img/gallery-photos/ski/lions-den-2.jpg", alt: "Lion's Den, Winter Park - South Entrance" },
  { src: "/img/gallery-photos/ski/lions-den-3.jpg", alt: "Lion's Den, Winter Park - East Entrance" },
  { src: "/img/gallery-photos/ski/first-wp-hut.jpg", alt: "First Hut, Winter Park" },
  { src: "/img/gallery-photos/ski/first-wp-hut-winter.jpg", alt: "First Hut, Winter Park" },
  { src: "/img/gallery-photos/ski/40-shack-1.jpg", alt: "40 Shack, Winter Park" },
  { src: "/img/gallery-photos/ski/40-shack-2.jpg", alt: "40 Shack, Winter Park" },
  { src: "/img/gallery-photos/ski/40-shack-3.jpg", alt: "40 Shack, Winter Park" },
  { src: "/img/gallery-photos/ski/dtr-2025.jpg", alt: "Devils Thumb Ranch - 2025" },
  { src: "/img/gallery-photos/ski/abasin-steep-gullies-1.jpg", alt: "A-Basin Steep Gullies - 2018" },
  { src: "/img/gallery-photos/ski/abasin-steep-gullies-2.jpg", alt: "A-Basin Steep Gullies - 2018" },
];


function PhotosSki() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosSki