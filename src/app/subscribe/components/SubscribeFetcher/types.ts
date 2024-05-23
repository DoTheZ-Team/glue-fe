export interface PaginationInfo {
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export interface SubscriptionList {
  blogId: number;
  nickname: string;
  title: string;
  profile: string;
}

export interface SubscriptionListResponse extends PaginationInfo {
  blogItems: SubscriptionList[];
}

export interface FollowPostResponse {
  blogItemList: {
    blogItems: SubscriptionList[];
  } & PaginationInfo;
  postItemList: {
    postItems: Array<{
      postId: number;
      title: string;
      preview: string;
      photo: string;
    }>;
  } & PaginationInfo;
}
