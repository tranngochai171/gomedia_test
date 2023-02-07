import ImageWithFallback from '../common/image-with-fallback';
import { Box, styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

type MyCarouselProps = {
  images: string[];
};

function MyCarousel({ images }: MyCarouselProps) {
  return (
    <Carousel
      autoPlay
      swipe
      navButtonsAlwaysVisible
      animation='fade'
      duration={500}
    >
      {images.map((item, i) => (
        <Item key={i} imageSrc={item} />
      ))}
    </Carousel>
  );
}

type ItemProps = {
  imageSrc: string;
};

const CarouselBox = styled(Box)(({ theme }) => ({
  height: 700,
  [theme.breakpoints.down('xl')]: {
    height: 500,
  },
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
}));

function Item({ imageSrc }: ItemProps) {
  return (
    <CarouselBox>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <ImageWithFallback src={imageSrc} alt='carousel image' />
      </div>
    </CarouselBox>
  );
}

export default MyCarousel;
