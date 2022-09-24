export const NameFormat = (name) => {
  if (!name) return name;
  const str = name.split(" ");
  //   console.log(str);
  return str[str.length - 1];
};
