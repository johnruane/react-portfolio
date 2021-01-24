const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

async function fetchByContentType(name) {
  const response = await client.getEntries({
    content_type: name,
  });

  const content = await response.items.map((p) => {
    return p.fields;
  });

  return content;
}

async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// function fetchHeader() {
//   return {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
//     },
//   };
// }

export { fetchEntries, fetchByContentType };
