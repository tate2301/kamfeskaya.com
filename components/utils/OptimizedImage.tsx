import Image from 'next/image';

const gumletLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  return `https://pagka.gumlet.io/${src}?w=${width}&q=${quality || 75}`;
};

const OptimizedImage = (props: any) => {
  return (
    <Image loader={gumletLoader} {...props} alt={props.alt ? props.alt : ''} />
  );
};

export default OptimizedImage;
