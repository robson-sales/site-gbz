import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import laboratorio1 from '../../assets/images/laboratorio-01.jpg';
import laboratorio2 from '../../assets/images/laboratorio-02.jpg';
import laboratorio3 from '../../assets/images/laboratorio-03.jpg';
import laboratorio4 from '../../assets/images/laboratorio-04.jpg';
import laboratorio5 from '../../assets/images/laboratorio-05.jpg';
import laboratorio6 from '../../assets/images/laboratorio-06.jpg';
import laboratorio7 from '../../assets/images/laboratorio-07.jpg';
import laboratorio8 from '../../assets/images/laboratorio-08.jpg';

export default function CarrosselQualidade() {
  const altTxt = 'Fotos do nosso laboratório';
  const images = [
    { src: laboratorio1, alt: altTxt },
    { src: laboratorio2, alt: altTxt },
    { src: laboratorio3, alt: altTxt },
    { src: laboratorio4, alt: altTxt },
    { src: laboratorio5, alt: altTxt },
    { src: laboratorio6, alt: altTxt },
    { src: laboratorio7, alt: altTxt },
    { src: laboratorio8, alt: altTxt },
  ];

  return (
    <Carousel
      images={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      hasThumbnails={false}
      hasSizeButton={false}
      hasIndexBoard={false}
    />
  );
}
