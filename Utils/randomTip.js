export const randomTip = () => {
  const tips = [
    "Students studying here get 50% Waiver if they get married!!!",
    "AB4 has a large library at floor 3!",
    "Daffodil University was founded in 2002.",
    "Daffodil Provides free Laptop for every students!!",
    "Engineering complex is right behind YKSG-2.",
    "There are 60+ Bus available for transporation!",
    "Daffodil Has Anisul Haque Bhaban for our hounarable Anisuqul Haque Sir!",
  ];
  const rand = tips[(Math.random() * tips.length) | 0];
  console.log(rand);
  return rand;
};
