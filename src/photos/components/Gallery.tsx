import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

import "./stylesGallery.css"

interface Photo {
    src: string,
    alt: string
}

type GalleryProps = {
    photos: Array<Photo>;
};

export function Gallery({ photos }: GalleryProps) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div >
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {photos.map((photo: Photo, idx) => {
                    return (
                        <a href={photo.src} key={idx} data-lg-size="800-1200">
                            <img alt={photo.alt} src={photo.src} />
                        </a>
                    )
                })}

            </LightGallery>
        </div>
    );
}
