import { http } from '@/api';

export interface StickerItem {
  stickerId: number;
  url: string;
}

interface StickerPaginationResponse {
  content: { stickerItems: StickerItem[] }[];
  totalPage: number;
  totalElements: number;
  size: number;
  // FIXME: current page
  number: number;
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export const getSticker = (page: number) =>
  http.get<StickerPaginationResponse>({
    url: '/stickers/basics',
    params: { page, size: 10 },
  });
