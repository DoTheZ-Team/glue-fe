'use client';

import { useState } from 'react';
import { Button } from '@/components/Common';
import { cn } from '@/utils';
import { usePostSubscribe } from './api/queries';

interface SubscriptionButtonProps {
  initialSubscribeStatus: boolean;
  blogId: number;
}

export default function SubscriptionButton({
  initialSubscribeStatus,
  blogId,
}: SubscriptionButtonProps) {
  const [isSubscribe, setIsSubscribe] = useState<boolean>(
    initialSubscribeStatus,
  );
  const { mutate } = usePostSubscribe(blogId, isSubscribe);

  const handleClick = () => {
    mutate();
    setIsSubscribe((prev) => !prev);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={cn(
          'font-semibold w-120 h-30 m-25',
          isSubscribe ? 'bg-white text-primary' : 'bg-primary text-white',
        )}
      >
        {isSubscribe ? 'Unsubscribe' : 'Subscribe'}
      </Button>
    </div>
  );
}
