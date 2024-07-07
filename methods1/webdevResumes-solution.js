const webdevResumes = [
  {
    name: "Kevin",
    experiences: [
      { langs: "Python", experience: 8 },
      { langs: "JavaScript", experience: 2 },
    ],
  },
  {
    name: "Prince",
    experiences: [
      { langs: "Python", experience: 4 },
      { langs: "JavaScript", experience: 5 },
      { langs: "java", experience: 2 },
    ],
  },
  { name: "Amy", experiences: [{ langs: "JavaScript", experience: 5 }] },
  { name: "Antoine", experiences: [{ langs: "Python", experience: 5 }] },
];

const getAverageExperienceByTech = (webdevResumes, tech) => {
  const experiencesTech = webdevResumes
    .map((webdevResume) => {
      const experienceFound = webdevResume.experiences.find(
        (experience) => experience.langs === tech
      );
      return experienceFound ? experienceFound.experience : undefined;
    })
    .filter((el) => Boolean(el));
  const averageTech =
    experiencesTech.reduce((a, b) => a + b, 0) / experiencesTech.length;
  return averageTech;
};

const result = getAverageExperienceByTech(webdevResumes, "JavaScript");
console.log(result);
