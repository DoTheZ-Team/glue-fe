'use client';

import React, { useEffect, useRef, useState } from 'react';
import { NavigationIcons } from '@/components/Common';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';

export function HeaderDrawer({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            {/* <Alaram
              isInDrawer
              onClickClose={() => {
                setIsOpen(false);
              }}
            /> */}
          </div>
          hi
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function BlogHeader2({ children }) {
  const title = ' do the best Zl금 ';

  return (
    <div>
      <header className="w-full">
        <nav className="flex flex-row h-60 items-center justify-between p-10 px-20 bg-opacity-50 bg-[#c5c5c0]">
          <div className="text-xl px-10">{title}</div>
          <HeaderDrawer>
            <NavigationIcons />
          </HeaderDrawer>
        </nav>
      </header>
      {children}
    </div>
  );
}
