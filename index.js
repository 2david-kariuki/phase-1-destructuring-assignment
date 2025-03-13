const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// 1. Animal sounds - expecting animal names as values
const { moo, neigh, baa, oink, cluck } = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken",
};

// 2. Four animals with names - expecting animal types as values
const { bessie, dolly, babe, little } = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken",
};

// 3. Three animals with colors - expecting animal types as values
const { blackAndWhite, black, pink } = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig",
};

// 4. Rainbow colors - expecting color names as values
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Six colors with initials - expecting color names as values
const [r, o, y, g, b, v] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
];

// 6. Just indigo - expecting "indigo" as value
const [, , , , , indg] = colors;

// 7. All variables from muppet - expecting exact muppet object values
const { muppetName, color, song, job, partner } = muppet;

// 8. Songs 2 and 4, Kermit's job and partner - expecting exact nestedMuppet values
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
