module.exports = {
  meta: {
    title: "Vale of Blevoir Writing Group",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "John Doe",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to the Vale of Belvoir Writing Group",
    description: "meeting on the second Tuesday of every month."
  }
}