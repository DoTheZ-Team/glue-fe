'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import {
  Button,
  Dropdown,
  Input,
  NavigationIcons,
  Pencil,
  StickerClose,
  StickerStar,
  Switch,
} from '@/components/Common';
import { usePortal } from '@/hooks';
import { cn, generateId, safeSeesionStorage } from '@/utils';
import { EDITOR_KEY } from '@/components/Common/Editor/constants';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { Ghost, Github, Smile, Star } from './dummyIcons';
import { useRecoilStickerState } from './store';
import { ImageProps } from './components/Sticker/types';
import { usePost } from './api/queries';

const Konva = dynamic(() => import('./components/Konva'), { ssr: false });
const Editor = dynamic(() => import('@/components/Common/Editor'), {
  ssr: false,
});

// TODO: Icon이 선택되는 경우 색상이 변경되도록 attribute 설정
const stickerTabs = [
  { id: 0, Icon: Github },
  { id: 1, Icon: Ghost },
  { id: 2, Icon: Smile },
  { id: 3, Icon: Star },
] as const;

const dummyImages = Array.from({ length: 12 }).reduce(
  (arr: Array<{ id: number }>, _, idx) => [...arr, { id: idx + 1 }],
  [],
);

const CATEGORIES = [
  { title: '운동' },
  { title: '일상' },
  { title: '맛집' },
  { title: '여행' },
] as const;

export default function Page() {
  const [title, setTitle] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number>(0);
  const [editable, setEditable] = useState<boolean>(true);
  const [category, setCategory] = useState<string>('카테고리 선택');

  const port = usePortal({ id: 'write-portal-container' });
  const { setStickerStates } = useRecoilStickerState();
  const { handleError } = useToastContext()!;

  // TODO: blogId 사용
  const { mutate } = usePost(8);

  const addStickerToPanel = ({
    src,
    width,
    height,
    x,
    y,
  }: Omit<ImageProps, 'resetButtonRef' | 'id'>) => {
    setStickerStates((currentImages) => [
      ...currentImages,
      {
        id: generateId(),
        width,
        height,
        x,
        y,
        src,
      },
    ]);
  };

  // TODO: refactor
  const handleSubmitPost = (publishState: 'publish' | 'save' = 'save') => {
    const content = safeSeesionStorage.get(EDITOR_KEY) || '';

    if (!content) {
      handleError('내용을 입력해주세요', { duration: 2000 });
      return;
    }

    if (!title) {
      handleError('제목을 입력해주세요', { duration: 2000 });
      return;
    }

    // TODO: blogId
    mutate({
      blogId: 10,
      title,
      content,
      temporaryState: publishState === 'publish',
      categoryName: category,
    });
  };

  return (
    <section className="relative flex justify-center">
      {port?.(
        <div className="flex gap-20">
          <Switch
            checked={editable}
            handleChange={() => setEditable((prev) => !prev)}
            LeftIcon={
              <StickerStar className="w-13 h-13 absolute top-[4.5px] left-5 z-10" />
            }
            RightIcon={
              <Pencil
                color={editable ? '#F08D53' : '#999999'}
                className="w-13 h-13 absolute top-[4.5px] right-[5.5px] z-10"
              />
            }
          />

          <NavigationIcons />

          <div className="flex gap-12 font-pretendard font-medium">
            {/* TODO: 글 업로드 */}
            <Button
              className="bg-[#E3E3E3] w-60 h-30"
              onClick={() => handleSubmitPost()}
            >
              저장
            </Button>
            <Button
              className="bg-primary text-[white] w-60 h-30"
              onClick={() => handleSubmitPost('publish')}
            >
              발행
            </Button>
          </div>
        </div>,
      )}

      <aside
        className={cn(
          'w-300 h-[577px] rounded-16 px-23 py-20 absolute top-85 left-30 transition-all duration-200',
          !editable && 'z-[210000001] shadow-background',
        )}
      >
        <div className="flex justify-between">
          <Button
            onClick={() => {
              setEditable((prev) => !prev);
            }}
            className="select-none text-[26px] bg-transparent font-luckiest !text-primary text-shadow-primary transition-all duration-200"
          >
            stickers
          </Button>

          {!editable && (
            <Button
              onClick={() => setEditable(() => true)}
              className="bg-transparent"
            >
              <StickerClose />
            </Button>
          )}
        </div>

        {/* TODO: 검색 기능 구현 */}
        {!editable && (
          <Input
            wrapperClassName="w-full mt-17"
            className="rounded-12 border-1 border-[#D8D8D8] px-17 placeholder:text-[#999]"
            placeholder="검색어 입력"
          />
        )}

        {!editable && (
          <section className="mt-60">
            <div>
              <div className="flex gap-2 px-20 mb-6">
                {stickerTabs.map(({ id, Icon }) => (
                  <Icon
                    key={id}
                    className={cn(
                      'w-34 h-34 p-5 cursor-pointer',
                      id === selectedId && 'bg-[#FFEBDF] rounded-4',
                    )}
                    onClick={() => setSelectedId(id)}
                    selected={id === selectedId}
                  />
                ))}
              </div>

              <div className="w-full h-1 bg-[#D8D8D8]" />
            </div>

            <div className="grid grid-cols-3 justify-items-center items-center gap-20 mt-20">
              {dummyImages.map(({ id }) => (
                <Image
                  key={`/images/stickers/sticker-${id}.svg`}
                  src={`/images/stickers/sticker-${id}.svg`}
                  alt={`/images/stickers/sticker-${id}.svg image`}
                  width={60}
                  height={60}
                  className="cursor-pointer"
                  onClick={() => {
                    addStickerToPanel({
                      src: `/images/stickers/sticker-${id}.svg`,
                      width: 60,
                      height: 60,
                      x: 300,
                      y: 300,
                    });
                    setEditable(() => true);
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </aside>

      <Konva enable={!editable} />

      <section className="w-[620px]">
        <Input
          wrapperClassName="px-45"
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          value={title}
          onValueChange={setTitle}
        />

        <div className="h-1 bg-[#D8D8D8] mx-45" />

        <div className="flex justify-end">
          <Dropdown
            onChange={setCategory}
            classNames={{
              base: 'mt-10 mr-45',
              menu: 'top-60 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.10)] rounded-8',
            }}
          >
            <Dropdown.Trigger className="bg-white w-full rounded-8 h-50 border-1 border-[#EBEBEB]">
              {category}
            </Dropdown.Trigger>

            <Dropdown.Menu>
              {CATEGORIES.map(({ title: categoryTitle }, index) => (
                <>
                  <Dropdown.Item
                    key={categoryTitle}
                    value={categoryTitle}
                    className="h-44 bg-white"
                  >
                    {categoryTitle}
                  </Dropdown.Item>
                  {index < CATEGORIES.length - 1 && (
                    <div className="w-full h-1 bg-[#EBEBEB]" />
                  )}
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Editor className="w-full min-h-[500px] rounded-[4px] py-10 mt-10" />
      </section>
    </section>
  );
}
