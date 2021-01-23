export const convertContentfulString = (text) => {
  console.log(text);
  return text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]);
};

export default convertContentfulString;
