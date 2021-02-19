const landscapingText = "This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer. We have been offering these fake services for over one million years. This is our example text of the services we offer."
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
  },
  chooseUs: [
    {icon:"address-book",title:"Book Appointments",text:"Join our list of customers that rely on our service on a consistent basis. Leave the headache of lawncare to the professionals and enjoy life."},
    {icon:"hand-holding-usd",title:"Affordable Service",text:"We understand the value of a dollar and make our prices are competitive, so you can save your money for what matters most."},
    {icon:"check",title:"Fully Insured",text:"We protect all of our workers. In doing that we protect our customers as well. Saftey is a staple of a succesful business."},
    {icon:"user-tie",title:"Professional Service",text:"With the combination of our great staff and vast experience, we're able to perfect things down to the last detail"},
    {icon:"icicles",title:"All-Season Assistance",text:"Some companies pack it up for the winter, but we're here to help you keep your property clean all year long."},
    {icon:"lightbulb",title:"Expert Ideas",text:"We've been at this for a long time, let us help! We offer free consultation for home improvment goals for all of our customers"}
  ]
}
