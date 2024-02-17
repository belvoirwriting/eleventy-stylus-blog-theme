module.exports = {
  meta: {
    title: "Vale of Belvoir Writing Group",
    description: "A group for writers meeting in Bottesford every month.",
    lang: "en",
    siteUrl: "https://belvoirwriting.co.uk/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "a writers group for Bottesford and the whole Vale of Belvoir",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Vale of Belvoir Writring Group",
    authorEmail: "words@belvoirwriting.co.uk"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to the Vale of Belvoir Writing Group",
    description: "Meeting in Bottesford every second Tuesday of the month at 8pm in the Old School next to the library. Find your voice as a writer, feel confident and encouraged, and enjoy a supportive space to try out new ideas."
  }
}
