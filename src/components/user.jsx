export class User {
  constructor(name, email, dob, picture, gender) {
    this.name = name;
    this.email = email;
    this.dob = new Date (dob.date);
    this.picture = picture;
    this.gender = gender;
  }

  hideEmail() {
    const emailArr = this.email.split("@");
    emailArr[0] = emailArr[0].slice(0, 3) + "...";
    return emailArr.join("@");
  }


    formatDate() {
        const month = this.dob.getMonth();
        

        const day = this.dob.getDate();
        

        const year= this.dob.getFullYear();
        

        return `${day}.${month}.${year}.`;

    }
  }
