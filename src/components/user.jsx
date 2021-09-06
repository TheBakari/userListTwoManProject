export class User {
  constructor(name, email, dob, picture, gender) {
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.picture = picture;
    this.gender = gender;
  }

  hideEmail() {
    const emailArr = this.email.split("@");
    emailArr[0] = emailArr[0].slice(0, 3) + "...";
    return emailArr.join("@");
  }


    formatDate() {
      const date = new Date (this.dob.date)
        const month = date.getMonth();
        

        const day = date.getDate();
        

        const year= date.getFullYear();
        

        return `${day}.${month}.${year}.`;

    }
  }
