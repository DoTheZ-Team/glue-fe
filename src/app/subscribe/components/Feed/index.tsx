'use client';

import { useState } from 'react';
import { AsyncBoundaryWithQuery } from '@/react-utils';
import Pagination from '../Pagination';
import FeedBox from '../FeedBox';
import { FollowPostFetcher } from '../SubscribeFetcher';
import { useFollowPostContext } from '../SubscribeFetcher/SubscriptionContext';
import SubscriptionFallback from '../SubscriptionFallback';

interface FollowPostProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function FollowPostContent({ currentPage, onPageChange }: FollowPostProps) {
  const { blogItemList, postItemList } = useFollowPostContext()!;

  const { postItems, isFirst, isLast } = postItemList;
  const { blogItems } = blogItemList;
  return (
    <div>
      <div className="grid grid-cols-3 gap-40 py-50">
        {postItems?.map(({ postId, title, photo, preview }, index) => {
          const blogItem = blogItems[index];
          return (
            <FeedBox
              key={postId}
              title={title}
              preview={preview}
              photo={photo}
              blogItem={blogItem}
            />
          );
        })}
      </div>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default function Feed() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <section className="flex flex-col items-start ml-380">
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-4xl">Others&apos; Stories</div>
        <div className="w-260 h-2 bg-primary mb-2" />
        <div className="w-270 h-2 bg-primary mb-2" />
      </div>
      <article className="grid grid-cols-3 gap-40 py-50">
        <AsyncBoundaryWithQuery pendingFallback={<div>Loading...</div>}>
          <SubscriptionFallback>
            <FollowPostFetcher page={currentPage}>
              <FollowPostContent
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </FollowPostFetcher>
          </SubscriptionFallback>
        </AsyncBoundaryWithQuery>
      </article>
    </section>
  );
}
