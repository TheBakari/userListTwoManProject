export class User {
  constructor(name, email, dob, picture) {
    this.name = name;
    this.email = email;
    this.dob = new Date(dob);
    this.picture = picture;
  }
}
