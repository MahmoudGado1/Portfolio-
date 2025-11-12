"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20) 01555664106",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mahmoudgado444@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Cairo, Egypt",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1bcipgo",
        "template_2dy2lwd",
        formRef.current,
        "ByGPZJYnOXo5xa0Cm"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send your message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-accent text-4xl">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                velit incidunt officia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="First Name" required />
                <Input name="lastname" placeholder="Last Name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" placeholder="Phone" required />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="frontend">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="fullstack">
                      FullStack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type Your Message Here."
                required
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
