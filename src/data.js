import { colors } from "@atlaskit/theme";
import AssignedImg from "./assets/jake.png";

const Assigned = {
  id: "1",
  name: "Assigned",
  url: "http://adventuretime.wikia.com/wiki/Assigned",
  avatarUrl: AssignedImg,
  colors: {
    soft: colors.Y50,
    hard: colors.Y200
  }
};

const InProgress = {
  id: "2",
  name: "InProgress",
  url: "http://adventuretime.wikia.com/wiki/InProgress",
  avatarUrl: AssignedImg,
  colors: {
    soft: colors.G50,
    hard: colors.G200
  }
};

const Review = {
  id: "3",
  name: "Review",
  url: "http://adventuretime.wikia.com/wiki/review",
  avatarUrl: AssignedImg,
  colors: {
    soft: colors.B50,
    hard: colors.B200
  }
};

const Done = {
  id: "4",
  name: "Done",
  url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  avatarUrl: AssignedImg,
  colors: {
    soft: colors.P50,
    hard: colors.P200
  }
};

export const authors = [Assigned, InProgress, Review, Done];

export const quotes = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: InProgress
  },
  {
    id: "2",
    content:
    "Sucking at something is the first step towards being sorta good at something.",
    author: Assigned
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: Assigned
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: Review
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: Review
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: Done
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: Done
  },
  {
    id: "8",
    content: "People make mistakes. It’s a part of growing up",
    author: Review
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' assigned?",
    author: Review
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: Done
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: Done
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: Done
  }
];

const getByAuthor = (author, items) =>
  items.filter(quote => quote.author === author);

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes)
  }),
  {}
);
