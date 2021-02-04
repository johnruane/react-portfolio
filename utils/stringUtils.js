export const convertContentfulString = (text) => {
  return text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]);
};

export default convertContentfulString;
