'use client';

import React, { useState } from 'react';
import { NavigationIcons } from '@/components/Common';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/HeaderDrawer/drawer';

export function HeaderDrawer({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const name = 'dotheZ';

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-300 h-full fixed right-0">
        <div className="py-120 px-60">
          <div className="font-luckiest text-[20px] text-primary ">
            @ {name}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function BlogHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = ' do the best Zl금 ';

  return (
    <div className="relative">
      <header className="relative top-0 z-10 w-full">
        <nav className="flex flex-row h-60 items-center justify-between p-10 px-20 bg-opacity-60 bg-[#bebebe]">
          <div className="text-xl text-[#363636] px-10">{title}</div>
          <NavigationIcons />
        </nav>
      </header>
      <div className="absolute top-0">{children}</div>
    </div>
  );
}
