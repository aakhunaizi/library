const books = [
  {
    id: 1,
    author: "Jordan Peterson",
    title: "12 Rules for Life: An Antidote to Chaos",
    slug: "12-rules-for-life:-an-antidote-to-chaos",
    genre: ["Self-Help"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [3],
  },
  {
    id: 2,
    author: "Blake Crouch",
    title: "Dark Matter",
    slug: "dark-matter",
    genre: ["Sci-Fi", "Thriller"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [3],
  },
  {
    id: 3,
    author: "Robin Sloan",
    title: "Mr. Penumbra's 24-Hour Bookstore",
    slug: "mr.-penumbra's-24-hour-bookstore",
    genre: ["Suspense", "Fantasy"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [1, 3, 5, 1],
  },
  {
    id: 4,
    author: "Paul Kalanithi",
    title: "When Breath Becomes Air",
    slug: "when-breath-becomes-air",
    genre: ["Biography"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: true,
    borrowedBy: [2, 5],
  },
  {
    id: 5,
    author: "Eric Ries",
    title: "The Lean Startup",
    slug: "the-lean-startup",
    genre: ["Business", "Entrepreneurship"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [4, 1, 2],
  },
  {
    id: 6,
    author: "George R.R. Martin",
    title: "A Storm of Swords",
    slug: "a-storm-of-swords",
    genre: ["Fantasy"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: true,
    borrowedBy: [],
  },
  {
    id: 7,
    author: "Leigh Bardugo",
    title: "Six of Crows",
    slug: "six-of-crows",
    genre: ["Fantasy"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [4, 3, 2, 1, 5],
  },
  {
    id: 8,
    author: "Agatha Christie",
    title: "Curtain: Poirot's Last Case",
    slug: "curtain:-poirot's-last-case",
    genre: ["Crime", "Mystery"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [3, 5],
  },
  {
    id: 9,
    author: "Elif Shafak",
    title: "The Forty Rules of Love",
    slug: "the-forty-rules-of-love",
    genre: ["Fiction"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [5, 1],
  },
  {
    id: 10,
    author: "Leigh Bardugo",
    title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
    slug: "the-language-of-thorns:-midnight-tales-and-dangerous-magic",
    genre: ["Fantasy"],
    image:
      "https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg",
    available: false,
    borrowedBy: [5],
  },
];

export default books;
