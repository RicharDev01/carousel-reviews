// globals variables
const id = document.getElementById.bind(document),
  btnSurprise = id('btn-surprise'),
  btnArrowLeft = id("arrow-left"),
  btnArrowRight = id("arrow-right"),
  reviewsContainer = id("reviews")

const ely = new User({
  name: "Elizabeth Smith",
  profession: "graphic designer",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem culpa ullam minima unde labore delectus, est atque incidunt doloribus ips modi ea, voluptatum blanditiis ",
  imageURL: "../images/elizabeth.jpg",
});
const peter = new User({
  name: "peter parker",
  profession: "Entrepreneur",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem culpa ullam minima unde labore delectus, est atque incidunt ",
  imageURL: "../images/peter.jpg",
});
const jenny = new User({
  name: "jennifer jhonsson",
  profession: "social media",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem culpa ullam minima unde labore delectus, est atque incidunt doloribus ips modi ea, voluptatum blanditiis pariatur quod ipsa cupiditate, eum tenetur",
  imageURL: "../images/jennifer.jpg",
});
const robert = new User({
  name: "Robert anderson",
  profession: "web developer",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. est atque incidunt doloribus ips modi ea, voluptatum blanditiis pariatur quod ipsa cupiditate, eum tenetur",
  imageURL: "../images/robert.jpg",
});

let listUser = [ely, peter, jenny, robert];


const changeContent = user => {

  reviewsContainer.innerHTML = `
  <div class="reviewsContainer">
    <section class="reviews-image">
      <img src="${user.imageURL}" alt="${user.name}" title="${user.name}" />
    </section>

    <section class="reviews-info">
      <p class="info-name">${user.name}</p>
      <p class="info-profession">${user.profession}</p>
    </section> 

    <section class="reviews-review">
      <p>${user.comment}</p>
    </section>

    <section class="reviews-buttons">
      <div class="arrows">

        <button class="arrow left" id="arrow-left" onclick="changeLeft()">
          <img src="./images/arrows_direction.svg">
        </button>

        <button class="arrow rigth" id="arrow-right" onclick="changeRight()">
          <img src="./images/arrows_direction.svg">
        </button>

      </div>
      <button onclick="randomContent()" class="surprise" id="btn-surprise">Surprise Me</button>
    </section>
  </div>

`;

}

let currentItem = 0

const randomContent = () => {

  currentItem = Math.floor( Math.random() * listUser.length );
  changeContent(listUser[currentItem])

}

const changeRight = () => {

  currentItem++
  currentItem > listUser.length -1 ? currentItem = 0 : null

  changeContent(listUser[currentItem])
}
const changeLeft = () => {
  
  currentItem--
  currentItem < 0 ? currentItem = listUser.length - 1 : null
  
  changeContent(listUser[currentItem])
  
}


addEventListener('DOMContentLoaded', changeContent(ely) )




