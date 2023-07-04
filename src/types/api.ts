export type QuestionProps = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  choices: {
    choice: string;
    votes: number;
  }[];
};

export type QuestionsType = QuestionProps[];
