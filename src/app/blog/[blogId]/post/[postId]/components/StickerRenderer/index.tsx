import Image from 'next/image';
import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';

export default function StickerRenderer() {
  const {
    postDetail: {
      postStickerUrlItems: { postStickerId },
    },
  } = usePostDetailContext();

  return postStickerId.map(({ postStickerItem }) => {
    const { xLocation, yLocation, rotation, url, scaleX, scaleY, stickerId } =
      postStickerItem;
    return (
      <Image
        key={stickerId}
        src={url}
        width={60}
        height={60}
        alt={`${postStickerId} alt`}
        className="absolute"
        style={{
          transform: `translate(${xLocation}px, ${yLocation}px) rotate(${rotation}deg) scaleX(${scaleX}) scaleY(${scaleY})`,
        }}
      />
    );
  });
}
