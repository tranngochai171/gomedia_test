import Image from 'next/image';
import { useState, useEffect } from 'react';

type ImageWithFallbackProps = {
  src: string;
  isStatic?: boolean;
  [x: string]: any;
};

const defaultImageSrc = '/fallback-image.png';

const ImageWithFallback = (
  props: ImageWithFallbackProps & React.ComponentProps<typeof Image>,
) => {
  const { src, isStatic, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(defaultImageSrc);

  useEffect(() => {
    if (src !== imgSrc) {
      let tempSrc = src ?? defaultImageSrc;
      if (typeof src === 'string' && !isStatic) {
        tempSrc = src;
      }
      setImgSrc(tempSrc);
    }
  }, [isStatic, src]);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      src={imgSrc || defaultImageSrc}
      height={10}
      width={50}
      style={{ objectFit: 'contain' }}
      {...rest}
      onError={() => {
        setImgSrc(defaultImageSrc);
      }}
    />
  );
};

export default ImageWithFallback;
