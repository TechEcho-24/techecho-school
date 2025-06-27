import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { backendHost } from "../../../constants";
import InputField from "../career/form/InputField";
import TextareaField from "../career/form/TextAreaField";
import SubmitButton from "../career/form/SubmitButton";

export const ContactForm = () => {
  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className='flex justify-center md:my-10 my-20'
      >
        <motion.h2
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className='md:text-5xl text-3xl font-bold text-primary'
        >
          Contact Us
        </motion.h2>
      </motion.div>
      <div className='md:w-2/5 mx-auto w-4/5 text-text-muted'>
        <motion.h3
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className='text-center text-text-muted font-bold md:text-2xl text-xl mb-8'
        >
          Share your goals with us — we’ll explore how our solutions can help
          grow your business.
        </motion.h3>
        <Form />
      </div>
    </>
  );
};

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(`${backendHost}/api/help/contact`, formData);

      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        setLoading(false);
      } else {
        setLoading(false);
        setError("Failed to send message.");
      }
    } catch (err: any) {
      if (err.response.status === 429) {
        alert("you can send only 1 message in 48 hours. Try again later.");
      } else alert("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full text-text-muted mb-10'>
      {error && (
        <div className='bg-red-100 text-red-700 p-4 rounded-lg mb-4'>
          {error}
        </div>
      )}
      <div className='flex flex-row gap-4 mb-4 justify-between items-center'>
        <InputField
          label={"First name"}
          name={"firstName"}
          onChange={handleChange}
          value={formData.firstName}
          placeholder='First name'
          type='text'
          required
        />
        <InputField
          label={"Last name"}
          name={"lastName"}
          onChange={handleChange}
          value={formData.lastName}
          placeholder='Last name'
          type='text'
          required
        />
      </div>
      <div className='flex flex-row gap-4 mb-4 justify-between items-center'>
        <InputField
          label={"Email"}
          required
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label={"Mobile no."}
          type='text'
          name='mobile'
          placeholder='Mobile no.'
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className='my-4'>
        <InputField
          label={"Subject"}
          required
          type='text'
          name='subject'
          placeholder='Email Subject'
          value={formData.subject}
          onChange={handleChange}
          autoComplete='off'
          autoCorrect='off'
        />
      </div>
      <div className='my-4'>
        <TextareaField
          label={"Message"}
          required
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className='w-full rounded-lg md:text-base p-2 text-sm md:p-4 bg-transparent border-4 border-neutral-700'
        />
      </div>
      <SubmitButton loading={loading} value='Send Message' />
    </form>
  );
};
