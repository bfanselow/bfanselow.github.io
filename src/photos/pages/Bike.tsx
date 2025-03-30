import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/bill-ned-gravel-2024.jpg", alt: "Ned Gravel Ultra 2024" },
  { src: "/img/boulder-bike-shadow.jpg", alt: "Boulder Morning Ride" },
  { src: "/img/gallery-photos/bill-lre-2022.jpeg", alt: "Laramie Range Epic - 2023" },
  { src: "/img/gallery-photos/sign-not-likely.jpg", alt: "Logan Mill Road" },
  { src: "/img/gallery-photos/bill-ng-mammoth-2024.jpg", alt: "Ned Gravel Ultra - 2024" },
  { src: "/img/gallery-photos/cb-cycling.2-2023.jpeg", alt: "Crested Butte MTB - 2023" },
  { src: "/img/gallery-photos/salida-76-2022.jpeg", alt: "Salida 76 - 2022" },
  { src: "/img/gallery-photos/LHC-no-dumping.jpg", alt: "Left Hand Canyon" },
  { src: "/img/gallery-photos/bill-grassroots-grvl-2023.jpg", alt: "Grassroots Gravel - 2023" },
  { src: "/img/gallery-photos/cb-cycling.1-2023.jpeg", alt: "Crested Butte MTB - 2023" },
  { src: "/img/gallery-photos/old-stage-mailbox.jpg", alt: "Olde Stage Road" },
  { src: "/img/gallery-photos/cb-cycling.3-2023.jpeg", alt: "Crested Butte MTB - 2023" },
  { src: "/img/gallery-photos/copper-2-aspen-2022.jpg", alt: "Copper to Aspen - 2022" },
  { src: "/img/gallery-photos/cb-cycling.4-2023.jpeg", alt: "Crested Butte MTB - 2023" },
  { src: "/img/gallery-photos/jamestown-stfd.jpg", alt: "Jamestown" },
  { src: "/img/gallery-photos/bike/rollins-pass-trellis.jpg", alt: "Rollins Pass Trellis" },
];


function PhotosBike() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosBike