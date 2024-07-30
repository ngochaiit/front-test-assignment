import { CircularProgress } from '@mui/material';
import React, {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  useState,
} from 'react';
import { ImageLoaderContainer } from './imageLoader.styled';

interface ImageLoaderProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  height: number;
  width: number;
}

const ImageLoader: FC<ImageLoaderProps> = ({
  src,
  height,
  width,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const placeholderErrorImage: string = `https://dummyimage.com/${height}x${width}`;

  return (
    <ImageLoaderContainer height={height} width={width}>
      {isLoaded || <CircularProgress />}
      <img
        {...props}
        style={isLoaded ? {} : { display: 'none' }}
        src={hasError ? placeholderErrorImage : src}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
        }}
      />
    </ImageLoaderContainer>
  );
};

export default ImageLoader;
