import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/jamie-alley-loop-2024-start.jpg", alt: "Alley Loop 2024 Start" },
  { src: "/img/gallery-photos/jamie/denmark-3-2023.jpg", alt: "Denmark - 2023" },
  { src: "/img/gallery-photos/jamie/night-hawks.jpg", alt: "Eldora Night Hawks Nordic Racing" },
  { src: "/img/gallery-photos/jamie/night-hawks-prize.jpg", alt: "Eldora Night Hawks First Prize!" },
  { src: "/img/gallery-photos/jamie/cc-health-n-wellness.jpg", alt: "Coal Creek K8, Health & Wellness" },
  { src: "/img/gallery-photos/bill-jamie-dtr-2022.jpg", alt: "Devils Thumb Ranch - 2022" },
  { src: "/img/gallery-photos/jamie/jamie-breckenridge-2004.jpg", alt: "Jamie, Breckenridge - 2004" },
  { src: "/img/gallery-photos/jamie/denmark-2-2023.jpg", alt: "Denmark - 2023" },
  { src: "/img/gallery-photos/jamie/turks-n-caicos-beach.jpg", alt: "Turks & Caicos" },
  { src: "/img/gallery-photos/jamie/russell-park-nordic.jpg", alt: "Russell Park Nordic" },
  { src: "/img/gallery-photos/jamie/iceland-1.jpg", alt: "Iceland - 2023" },
  { src: "/img/gallery-photos/jamie/candellas-roller-ski.jpg", alt: "Roller Skiing at Candella's Parkway" },
  { src: "/img/gallery-photos/jamie-jack-cb-nordic-2023.jpg", alt: "Crested Butte" },
  { src: "/img/gallery-photos/jamie-dtr-2024.jpg", alt: "Devils Thumb Ranch - 2024" },
  { src: "/img/gallery-photos/jamie/denmark-1.jpg", alt: "Denmark - 2023" },
  { src: "/img/gallery-photos/jamie/sedona.jpg", alt: "Mia Amo - Sedona, AZ" },
  { src: "/img/gallery-photos/jamie/turks-n-caicos-boat.jpg", alt: "Turks & Caicos" },
  { src: "/img/gallery-photos/jamie/dtr-favorite-spot.jpg", alt: "Turks & Caicos" },
  { src: "/img/gallery-photos/jamie-alley-loop-finish-2024.jpeg", alt: "Alley Loop Finish - 2024" },
  { src: "/img/gallery-photos/jamie/jack-the-stylist.jpg", alt: "" },
  { src: "/img/gallery-photos/jamie/moab.jpg", alt: "Arches National Park" },
];


function PhotosJamie() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosJamie