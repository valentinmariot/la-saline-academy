export type Lesson = {
  id: number;
  content: string;
  point: number;
  order: number;
  createdAt: Date | undefined;
  video: {
    link: string;
  };
  course: {
    id: number;
    name: string;
  };
};
