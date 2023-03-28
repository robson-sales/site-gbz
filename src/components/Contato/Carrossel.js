import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import escritorio1 from '../../assets/images/escritorio-01.jpeg';
import escritorio2 from '../../assets/images/escritorio-02.jpeg';
import escritorio3 from '../../assets/images/escritorio-03.jpeg';
import escritorio4 from '../../assets/images/escritorio-04.jpeg';

export default function CarrosselContato() {
  const images = [
    { src: escritorio1 },
    { src: escritorio2 },
    { src: escritorio3 },
    { src: escritorio4 },
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
