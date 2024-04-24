export const users = [
  {
    id: 1,
    name: 'John Doe',
    title: 'zuae blog',
    background: '/tempImage/bg.jpeg',
    profile: '/tempImage/2.jpg',
    subscription: [2, 3],
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'dotheZ',
    background: '/tempImage/1.jpg',
    profile: '/images/2.png',
    subscription: [1],
  },
  {
    id: 3,
    name: 'Michael Jo',
    title: 'az azaaa fighting',
    background: '/tempImage/2.jpg',
    profile: '/images/3.png',
    subscription: [1, 3],
  },
  {
    id: 4,
    name: 'Emily Davi',
    title: 'cheer up!',
    background: '/tempImage/bg.jpeg',
    profile: '/images/4.png',
    subscription: [2],
  },
  {
    id: 5,
    name: 'ahha happiness',
    title: 'zuae blog',
    background: '/tempImage/bg.jpeg',
    profile: '/images/5.png',
    subscription: [1, 2, 3],
  },
  {
    id: 6,
    name: 'ahha happiness',
    title: 'zuae blog',
    background: '/tempImage/bg.jpeg',
    profile: '/images/5.png',
    subscription: [1, 2, 3],
  },
];

export const posts = [
  {
    id: 1,
    title: '달리랑 집콕생활',
    content:
      '오늘은 달리랑 하루종일 집에서 뒹굴뒹굴 놀았다. 오랜만에 과제도 없고 약속도 없는 평화로운 하루였다. 아무 일도 없는 게 소소하지만 확실한 행복임이 요즈음 더 확실히 느껴진다. 달리랑 하루종일 집에서 뒹굴뒹굴 놀았다. 오랜만에 과제도 없고 약속도 없는 평화로운 하루였다. 아무 일도 없는 게 소소하지만 확실한 행복임이 요즈음 더 확실히 느껴진다. 달리랑 하루종일 집에서 뒹굴뒹굴 놀았다. 오랜만에 과제도 없고 약속도 없는 평화로운 하루였다. 아무 일도 없는 게 소소하지만 확실한 행복임이 요즈음 더 확실히 느껴진다.',
    tags: ['technology', 'coding'],
    src: '/tempImage/1.jpg',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    tags: ['design', 'web development'],
    src: '/images/bg-temp.jpeg',
  },
  {
    id: 3,
    title: 'Third Post',
    content: 'This is the content of the third post.',
    tags: ['data science', 'machine learning'],
    src: '/tempImage/3.jpg',
  },
  {
    id: 4,
    title: 'Fourth Post',
    content: 'This is the content of the fourth post.',
    tags: ['marketing', 'branding'],
    src: '/tempImage/4.jpg',
  },
  {
    id: 5,
    title: 'Fifth Post',
    content: 'This is the content of the fifth post.',
    tags: ['UI/UX', 'frontend development'],
    src: '/tempImage/5.jpg',
  },
  {
    id: 3,
    title: '달리랑 집콕생활',
    content:
      '오늘은 달리랑 하루종일 집에서 뒹굴뒹굴 놀았다. 오랜만에 과제도 없고 약속도 없는 평화로운 하루였다. 아무 일도 없는 게 소소하지만 확실한 행복임이 요즈음 더 확실히 느껴',
    tags: ['technology', 'coding'],
    src: '/tempImage/1.jpg',
  },
];

export const subscriptions = [
  { id: 1, subscriptor: [1, 2, 3] },
  { id: 2, subscriptor: [2, 3, 5] },
  { id: 3, subscriptor: [3] },
  { id: 4, subscriptor: [4] },
  { id: 5, subscriptor: [5] },
];

export function getProfileImageById(userId) {
  const user = users.find((mem) => mem.id === userId);
  return user ? user.profile : null;
}

export function getBackgroundImageById(userId) {
  const user = users.find((mem) => mem.id === userId);
  return user ? user.background : null;
}

export function getTitleById(userId) {
  const user = users.find((mem) => mem.id === userId);
  return user ? user.title : null;
}
