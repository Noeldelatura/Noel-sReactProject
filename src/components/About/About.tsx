
import "./About.scss"
const About = () => {
  return (
    <div >
      <div className="main-about-sections ">

        <div className="about-section  dark:text-black drop-shadow-md p-5 rounded-md">
          <h4>Welcome to our registration site!</h4>
          <p>
             We're excited that you've chosen to join us. Here, you can find a wide variety of business cards that can turn your business into a well-known and valued brand.

            Our cards are professionally designed and personally tailored to your needs, ensuring that you leave a strong and lasting impression.

            So what are you waiting for? Join us today and let your business become a brand that can't be forgotten. 
          </p>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center mt-8">

        <p className=" text-center text-lg text-pink-200  dark:text-black">
          Registration is simple and quick. See you on the other side!{' '}
          <a href="/register" >
            Click here to register for free
          </a>
        </p>
      </div>
    </div>
  )
}

export default About