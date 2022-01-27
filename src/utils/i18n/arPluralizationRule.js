const arPluralizationRule = (choice) => {
  if ([0, 1, 2].includes(choice)) {
    return choice;
  }

  if (3 <= choice && choice <= 10) {
    return 3;
  }

  if (11 <= choice && choice <= 99) {
    return 4;
  }
  return 5;
};

export default arPluralizationRule;
