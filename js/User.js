class User {
  name
  profession
  comment
  imageURL

  constructor({name, profession, comment, imageURL}) {
    this.name = name
    this.profession = profession
    this.comment = comment
    this.imageURL = imageURL
  }

  get name() { 
    return this.name
  }

  get profession() {
    return this.profession
  }

  get imageURL() {
    return this.imageURL
  }

  get comment() { 
    return this.comment
  }  

}