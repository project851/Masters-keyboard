const utils = {
  getRandomInteger: number => {
    return Math.floor(Math.random() * number);
  },
  getWordScore: word => {
    if (word.length <= 5) {
      return 50;
    } else if (word.length <= 8) {
      return 100;
    } else if (word.length <= 12) {
      return 150;
    } else if (word.length > 12) {
      return 200;
    }
  },
};
