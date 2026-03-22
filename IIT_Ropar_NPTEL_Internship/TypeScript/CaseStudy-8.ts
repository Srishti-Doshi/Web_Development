/*
Case Study: null vs undefined in TypeScript

In a real-time user profile dashboard, some user details
may be intentionally left empty, while others may not be
available yet. TypeScript provides null and undefined to
clearly represent these two different situations.
*/

export {}; // keeps this file isolated from others


// -------------------- BASIC NULL EXAMPLE --------------------

// null represents intentional absence of value
let emptyAgeValue: null = null;
console.log("Empty age:", emptyAgeValue);
console.log("Type of null:", typeof emptyAgeValue);


// -------------------- NULL WITH UNION TYPE --------------------

let userAgeValue: number | null = null;
console.log("User age:", userAgeValue);

userAgeValue = 21;
console.log("User age after update:", userAgeValue);


// -------------------- UNDEFINED EXAMPLE --------------------

// undefined means value not assigned yet
let pendingValue: undefined = undefined;
console.log("Pending value:", pendingValue);
console.log("Type of undefined:", typeof pendingValue);


// Uninitialized variable
let serverDataValue: number;
//console.log("Server data:", serverDataValue); // undefined


// -------------------- FUNCTION RETURNING UNDEFINED --------------------

function greetUser(userName: string): void {
  console.log("Hello " + userName);
}

let greetResultValue = greetUser("Srishti");
console.log("Function return:", greetResultValue); // undefined


// -------------------- USER TYPE WITH NULL & UNDEFINED --------------------

type UserProfileData = {
  userName: string;
  age: number | null;     // intentionally empty allowed
  bio?: string;           // optional, may be undefined
};


// User with null age and defined bio
let profileOne: UserProfileData = {
  userName: "Tinka",
  age: null,
  bio: "Loves reading books"
};

// User with age but bio not set (undefined)
let profileTwo: UserProfileData = {
  userName: "Appu",
  age: 23
};


// -------------------- HANDLING NULL & UNDEFINED --------------------

function printUserProfile(profile: UserProfileData): void {
  let ageInfo =
    profile.age === null ? "Age not provided" : "Age: " + profile.age;

  let bioInfo =
    profile.bio !== undefined ? profile.bio : "Bio not set";

  console.log(profile.userName + " | " + ageInfo + " | " + bioInfo);
}

printUserProfile(profileOne);
printUserProfile(profileTwo);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// Profile type
type SocialProfile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

// Profile with null bio and no avatar
let socialUserOne: SocialProfile = {
  username: "Sahil",
  bio: null
};

// Profile with all fields set
let socialUserTwo: SocialProfile = {
  username: "Sonu",
  bio: "Tech enthusiast",
  avatarUrl: "avatar_sonu.png"
};


// Function to show profile safely
function showProfileDetails(profile: SocialProfile): void {
  let bioText =
    profile.bio === null ? "No bio available" : profile.bio;

  let avatarText =
    profile.avatarUrl !== undefined
      ? profile.avatarUrl
      : "default_avatar.png";

  console.log(
    "Username: " +
      profile.username +
      ", Bio: " +
      bioText +
      ", Avatar: " +
      avatarText
  );
}

showProfileDetails(socialUserOne);
showProfileDetails(socialUserTwo);


/*
Conclusion:
null is used when a value is intentionally empty, while
undefined means a value has not been set yet. Using both
correctly makes code clearer, safer, and easier to
understand in real-world applications.
*/
