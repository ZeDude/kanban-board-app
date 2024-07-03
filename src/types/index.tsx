export type TaskT = {
  id: string;
  title: string;
  description: string;
  priority: string;
  deadline: number;
  image?: string;
  alt?: string;
  tags: { title: string; bg: string; text: string }[];
};

export type UserT = {
  name: string;
  email: string;
  superApp: string;
};

type Column = {
  name: string;
  items: TaskT[];
};

export type Columns = {
  [key: string]: Column;
};
