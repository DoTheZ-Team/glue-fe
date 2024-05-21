export interface SubscriptionResponse {
  blogItemList: {
    blogItems: Array<{
      blogId: number;
      nickname: string;
      title: string;
      profile: string;
    }>;
    hasNext: boolean;
    hasFirst: boolean;
    hasLast: boolean;
  };
  postItemList: {
    postItems: Array<{
      postId: number;
      title: string;
      preview: string;
      photo: string;
    }>;
    hasNext: boolean;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface FollowListResponse {
  blogItems: Array<{
    blogId: number;
    nickname: string;
    title: string;
    profile: string;
  }>;
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export interface FollowPostResponse {
  postItems: Array<{
    postId: number;
    title: string;
    preview: string;
    photo: string;
  }>;
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}
