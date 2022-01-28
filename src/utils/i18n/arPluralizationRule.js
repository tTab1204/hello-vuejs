const arPluralizationRule = (choice) => {
  if ([0, 1, 2].includes(choice)) return choice;

  const remain = choice % 100;
  const few = remain >= 3 && remain <= 10;
  const many = remain >= 11 && remain <= 99;

  if (few) return 3;
  if (many) return 4;

  return 5;
};

export default arPluralizationRule;
