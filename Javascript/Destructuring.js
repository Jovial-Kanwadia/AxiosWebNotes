/*

====================Object destructuring===================
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true

---------Assigning to new variable names-----------
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

------Unpacking properties from objects passed as a function parameter-------
Consider this object, which contains information about a user.
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"

---------------Setting a function parameter's default value-----------------
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

In the function signature for drawChart above, the destructured left-hand side has a default value of an empty object = {}.

You could have also written the function without that default. However, if you leave out that default value, the function will look for at least one argument to be supplied when invoked, whereas in its current form, you can call drawChart() without supplying any parameters. Otherwise, you need to at least supply an empty object literal.

------------------Nested object and array destructuring----------------
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

-----------------For of iteration and destructuring--------------
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const { name: n, family: { father: f } } of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

/ "Name: Mike Smith, Father: Harry Smith"
/ "Name: Tom Jones, Father: Richard Jones"

--------------Combined array and object destructuring------------
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;
console.log(name); // "FizzBuzz"

----The prototype chain is looked up when the object is deconstructed---
const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;

console.log(self); // "123"
console.log(prot); // "456"


*/

  