const landscapingText = "This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer. We have been offering these fake services for over one million years."
const plowingText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const stoneAndCementText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const ourServicesText = "This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer. We have been offering these fake services for over one million years."

module.exports = {
  services: [
  { title: "Landscaping and Gardening", text: landscapingText, imgUrl: 'lawn.jpg' },
  { title: "Snow Removal", text: plowingText, imgUrl: 'plow.jpg' },
  { title: "Stone & Cement Paving", text: stoneAndCementText, imgUrl: 'stonePave.jpeg'},
  ],
  ourServices: {
    title1: "Our",
    title2: "Services",
    text: ourServicesText
  }
}
