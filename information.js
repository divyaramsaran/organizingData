/*
Read the passage below carefully and organize the information into some data in Javascript. Use your organized structure to answer the following questions. The goal is to not write code to answer the questions at the end. The goal is to organise data correctly.

Rahul, a software engineer from Pune, enjoys playing chess and gardening when he's not busy coding. He owns a golden retriever named Max, who is 4 years old, fully vaccinated, and loves playing fetch in the park. Rahul is currently employed and has a car that he uses for weekend trips. Meanwhile, Ananya, who recently turned 30 and lives in Bangalore, is passionate about cooking and often experiments with Italian recipes. She has a parrot named Kiwi, who knows over 20 phrases, mimics her voice, and is also vaccinated. Unlike Rahul, Ananya doesn’t own a car but prefers using public transport. Both Rahul and Ananya studied computer science in college, though Ananya also has a minor in graphic design. Ramesh, a 45-year-old business owner from Jaipur, has little in common with them, except for his love of gardening. He spends his weekends tending to his rose garden and reading historical fiction. Ramesh has two Persian cats, Bella and Leo, who are 3 years old, fully vaccinated, and love lounging in the sun. Unlike Ramesh, Kavya, who’s 28 and a professional dancer from Chennai, prefers modern fantasy novels and binge-watching sci-fi shows in her downtime. Kavya has a rescue rabbit named Snowy, who is 2 years old, vaccinated, and enjoys hopping around her backyard and nibbling on carrots. Kavya, however, is currently unemployed and does not own a vehicle.

**Hypothetical Questions:**

1. How many individuals are currently employed?
2. How many people own a car?
3. How many pets are fully vaccinated?
4. What are the names of all the pets, and what type of animal is each?
5. Which cities do the individuals live in?
6. How many hobbies are shared across the group? What are they?
7. How many pets belong to people who are currently unemployed?
8. What is the average age of the individuals mentioned in the passage?
9. How many individuals have studied computer science, and how many of them  have pets?
10. How many individuals own more than one pet?
11. Which pets are associated with specific favorite activities?
12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
13. How many vaccinated pets belong to people who do not own a car?
14. What is the most common type of pet among the group?
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with Ramesh?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?

 */

const people = [
  {
    name: "rahul",
    age: 22,
    city: "Pune",
    hobbies: ["playing chess", "gardening"],
    qualifications: ["computer science"],
    profession: "software engineer",
    employment: true,
    vehicles: ["car"],
    preferedTransport: "car",

    pets: [
      {
        name: "max",
        animal: "dog",
        breed: "golden retriever",
        hobbies: ["playing fetch in park"],
        age: 4,
        vaccinationStatus: true,
      },
    ],
  },

  {
    name: "ananya",
    age: 30,
    city: "banglore",
    hobbies: ["cooking and experimenting with Italian dishes"],
    qualifications: ["computer science"],
    profession: "graphic design",
    employment: false,
    vehicles: ["bike"],
    preferedTransport: "public Trasport",

    pets: [
      {
        name: "kiwi",
        animal: "parrot",
        breed: "green",
        hobbies: ["mimics voice"],
        age: 1,
        vaccinationStatus: true,
      },
    ],
  },

  {
    name: "ramesh",
    age: 45,
    city: "jaipur",
    hobbies: [
      "gardening",
      " spending time in rose garden",
      "reading historical fiction",
    ],
    qualifications: ["MBA"],
    profession: "business owner",
    employment: false,
    vehicles: ["van"],
    preferedTransport: "flight",

    pets: [
      {
        name: "bella",
        animal: "cat",
        breed: "persian cat",
        hobbies: ["lounging in sun"],
        age: 3,
        vaccinationStatus: true,
      },

      {
        name: "leo",
        animal: "cat",
        breed: "persian cat",
        hobbies: ["lounging in sun"],
        age: 3,
        vaccinationStatus: true,
      },
    ],
  },

  {
    name: "kavya",
    age: 28,
    city: "chennai",
    hobbies: ["fantasy novels", "watching sci - fi shows in downtime"],
    qualifications: ["BCA"],
    profession: "dancer",
    employment: false,
    vehicles: ["truck"],
    preferedTransport: "bus",

    pets: [
      {
        name: "snowy",
        animal: "rabbit",
        breed: "dutch rabbit",
        hobbies: ["hopping arround the backyard", "nibbling carrots"],
        age: 2,
        vaccinationStatus: true,
      },
    ],
  },
];
//------------------------------------------------------------------------------

//1. How many individuals are currently employed?

const numOfEmployees = function (details) {
  const status = details.map((employmentStatus) => employmentStatus.employment);

  return status.filter((employeStatus) => employeStatus).length;
};

console.log(numOfEmployees(people));

//------------------------------------------------------------------------------

//2. How many people own a car?
const numOfPeopleOwnCar = function (details) {
  const vehicalStatus = details.map((vehicalStatus) => vehicalStatus.vehicles);

  return vehicalStatus.flat().filter((vehical) => vehical === "car").length;
};

console.log(numOfPeopleOwnCar(people));
//------------------------------------------------------------------------------

//3. How many pets are fully vaccinated?

const numOfPetsVaccinated = function (details) {
  const pets = details.flatMap((person) => person.pets);
  return pets.filter((pet) => pet.vaccinationStatus).length;
};

console.log(numOfPetsVaccinated(people));
