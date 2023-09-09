export type Course = {
  id: number;
  name: string;
  description: string;
  points: number;
  lesson: [
    {
      id: number;
      points: number;
    }
  ];
};
