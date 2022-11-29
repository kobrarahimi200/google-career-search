const developer = {
  salay: 20000,
  exprience: 4,
  lookingForWork: true,
  techStack: ["Vue", "HTML"],
  doubleSalary() {
    this.salay = this.salay * 2;
    this.lookingForWork = false;
  }
};
console.log(developer.salay);