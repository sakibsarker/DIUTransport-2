export const NameFormat = (name) => {
  if (!name) return name;
  const str = name.split(" ");
  //   console.log(str);
  return str[1];
};
