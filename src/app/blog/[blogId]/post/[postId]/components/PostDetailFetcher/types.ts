import { PartialBlock } from '@blocknote/core';

interface Sticker {
  postStickerItem: {
    postId: number;
    stickerId: number;
    xLocation: number;
    yLocation: number;
    rotation: number;
    url: string;
    scaleX: number;
    scaleY: number;
  };
}

export interface PostDetailResponse {
  postDetail: {
    postId: number;
    title: string;
    content: PartialBlock[];

    likeCount: number;
    temporaryState: boolean;
    state: boolean;
    createdAt: string;
    updatedAt: string;
    memberId: number;
    blogId: number;
    isLike: boolean;
    isSubscribe: boolean;
    categoryName: string;
    hashtags: string[];

    photoUrls: string[];

    postStickerUrlItems: {
      postStickerId: Sticker[];
    };
  };

  loginMemberId: number;
}
