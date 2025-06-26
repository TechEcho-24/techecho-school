import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "../components/home/ContactForm";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className='mb-10 md:mb-20'>
        <div className='flex justify-center pt-36'>
          <h1 className='text-3xl text-primary font-bold'>Contact Us</h1>
        </div>
        <div className='flex-col flex mt-6 md:mt-20 md:flex-row justify-around items-center'>
          <figure className=' md:basis-1/3'>
            <video
              src='/assets/home/contact.mp4'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className='pointer-events-none select-none'
            ></video>
          </figure>
          <div className='md:basis-1/2 w-full'>
            <Form />
          </div>
        </div>

        {/* contact details and map  */}
        <h2 className='text-primary text-3xl font-bold text-center mb-4 md:mt-20 mt-10'>
          Visit Us At TechEcho
        </h2>
        <div className='flex gap-10 md:flex-row flex-col items-center justify-between md:pt-20 pt-6 px-10 md:px-32'>
          {/* contact details  */}

          <div className='text-text-muted mb-6 basis-1/2'>
            <h2 className='text-2xl font-bold text-primary md:text-4xl mb-8'>
              Contact Details
            </h2>
            {[
              "techecho.kanpur@gmail.com",
              "+91-8318999388",
              "3rd, Lig 41, Tatya Tope Nagar, Kanpur, Uttar Pradesh 208022",
            ].map((data, index) => (
              <div className='flex items-center gap-4 mb-4' key={index}>
                <FontAwesomeIcon
                  icon={
                    index === 0
                      ? faEnvelope
                      : index === 1
                      ? faPhone
                      : faLocationDot
                  }
                  className='transition duration-300 ease-in-out p-2 border-2 rounded-full border-white text-2xl hover:text-btn-bg hover:shadow-md transform hover:scale-110 box-border'
                />
                <p>{data}</p>
              </div>
            ))}
            <a
              href='mailto:techecho.kanpur@gmail.com'
              className='block mt-4 text-primary underline font-bold'
            >
              Send an Email
            </a>
          </div>
          {/* map  */}
          <div className=' basis-full md:basis-1/2'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.7075395263487!2d80.28335129999998!3d26.432912900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c492af7049c09%3A0xc55382ba5e3faa5b!2sTechEcho!5e0!3m2!1sen!2sin!4v1728320254251!5m2!1sen!2sin'
              width='600'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              className='rounded-lg w-full mx-auto h-52 md:h-96'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
