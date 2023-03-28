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
  const images = [
    { src: laboratorio1 },
    { src: laboratorio2 },
    { src: laboratorio3 },
    { src: laboratorio4 },
    { src: laboratorio5 },
    { src: laboratorio6 },
    { src: laboratorio7 },
    { src: laboratorio8 },
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
