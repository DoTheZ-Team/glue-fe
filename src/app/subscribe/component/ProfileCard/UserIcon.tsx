import React from 'react';
import { cn } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface UserIconProps {
  size?: 'sm' | 'lg';
  src?: string;
}

export default function UserIcon({
  size = 'sm',
  src = 'https://i.ibb.co/gjzHDN2/Cute-Yawning-Cat.jpg',
}: UserIconProps) {
  return (
    <Avatar
      className={cn('w-[33px] h-[33px]', size === 'lg' && 'w-[56px] h-[56px]')}
    >
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
