export class User {
  constructor(name, email, dob, picture) {
    this.name = name;
    this.email = email;
    this.dob = new Date(dob);
    this.picture = picture;
  }

  hideEmail() {
    const emailArr = this.email.split("@");
    emailArr[0] = emailArr[0].slice(0, 3) + "...";
    return emailArr.join("@");
  }
}
