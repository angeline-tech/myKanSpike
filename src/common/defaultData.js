const card1 = {
    id: "1",
    title: "Card 1",
    description: "This is my first card",
  };
  const card2 = {
    id: "2",
    title: "Card 2",
    description: "This is my second card",
  };
  const card3 = {
    id: "3",
    title: "Card 3",
    description: "This is my third card",
  };
  const card4 = {
    id: "4",
    title: "Card 4",
    description: "This is my fourth card",
  };
  const card5 = {
    id: "5",
    title: "Card 5",
    description: "This is my fifth card",
  };
  
  export const initalBoardState = {
    Backlog: { status: "Backlog", cards: [card1, card2, card3, card4, card5] },
    Today: { status: "Today", cards: [] },
    Complete: { status: "Complete", cards: [] },
    Archive: { status: "Archive", cards: [] },
  };