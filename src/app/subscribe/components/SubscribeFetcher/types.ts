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
export interface FollowerListResponse {
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
