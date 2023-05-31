"use client";
import Main from "../../Compoments/Main";
import Header from "../../Compoments/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home({ posts }) {
  const [isAnsOpened, setisAnsOpened] = useState(false);
  const cardData = {
    image: "url",
    title: "title one",
    excerpts: "some little description here ...",
  };

  const FAQ = [
    {
      question: "who is JESUS ?",
      answer:
        "JESUS is only son of GOD who kindly come down on the earth to serve the world",
      open: false,
    },
    {
      question: "how can i be served ?",
      answer:
        "in todays generation, the salvation is by grace, which we get from having a closely relationship with JESUS CHRIST",
      open: false,
    },
    {
      question: "who is JESUS ?",
      answer:
        "JESUS is only son of GOD who kindly come down on the earth to serve the world",
      open: false,
    },
    {
      question: "who is JESUS ?",
      answer:
        "JESUS is only son of GOD who kindly come down on the earth to serve the world",
      open: false,
    },
  ];
  return (
    <>
      <Header />
      <div className="mt-8 text-center p-4">
        <svg
          className="mx-auto fill-blue-500"
          width={40}
          height={50}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zM208 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272V304c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V192H160c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h48V80z" />
        </svg>
        <h2 className="uppercase text-xl mt-4 font-bold">
          the most recent sermons from different servants of GOD
        </h2>
        <p className="mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>
        <div className="mt-8 text-center uppercase">
          sermons cards goes here...
        </div>

        <div className="mt-8 text-center p-4">
          <svg
            className="mx-auto fill-blue-500"
            width={40}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z" />
          </svg>
          <h1 className="uppercase text-xl font-bold mt-4">
            Jesus Christ Is Our Savior
          </h1>
          <p className="mt-4 ">
            The greatest happiness in life comes from following Jesus. We
            believe in learning all we can about Him. You will feel His love for
            you as you seek to understand His life and teachings.
          </p>
          <div className="mt-4">
            
            <div className="mt-4 bg-blue-200 px-2 py-4 border-l-2 border-l-sky-600">
              <h1 className="font-bold">
                Everything from his ministry from his birth, ministry and death,
                he all did for us.{" "}
              </h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC
              </p>
              <button className="mx-auto rounded-lg bg-blue-500 mt-4 hover:bg-blue-700 duration-300">
                <Link className="text-white block p-2" href="./about-jesus">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4">
          <h1 className="uppercase font-bold text-xl">holy spirit</h1>
          <p className="mt-4">
            I will ask the Father, and he will give you another Helper to be
            with you forever. The Helper is the Spirit of truth. The people of
            the world cannot accept him, because they don’t see him or know him.
            But you know him. He lives with you, and he will be in you
          </p>

          <div className="mt-4 bg-blue-200 px-2 py-4 border-l-2 border-l-sky-600">
            <h1 className="font-bold">
              The Holy Spirit is referred to as the Lord and Giver of Life in
              the Nicene creed. He is the Creator Spirit.{" "}
            </h1>
            <p className="mt-4 text-left indent-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC
            </p>
            <button className="mx-auto rounded-lg bg-blue-500 mt-4 hover:bg-blue-700 duration-300">
              <Link className="text-white block p-2" href="./holy-spirit">
                Learn More
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-8 p-4">
          <svg
            className="mx-auto fill-blue-500"
            width={40}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4v73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384v96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7V224c0-17.7 14.3-32 32-32s32 14.3 32 32v80c0 8.8 7.2 16 16 16s16-7.2 16-16V219.1c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8V304c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-17.7 14.3-32 32-32s32 14.3 32 32V342.3c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480V384c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2V238.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z" />
          </svg>
          <h1 className="uppercase font-bold text-xl">prayers</h1>
          <p className="mt-4 text-left indent-3">
            God is your loving Father in Heaven, and He wants to hear from you.
            You can reach out to Him by praying to Him. As His child, you can
            ask your Heavenly Father for help and guidance in your life.
          </p>

          <div className="mt-4 bg-blue-200 px-2 py-4 border-l-2 border-l-sky-600">
            <h1 className="font-bold">
              Learn about prayers and get connected to creator of the world
            </h1>
            <p className="mt-4 text-left indent-3">
              We can speak directly to Him because of what Jesus Christ did for
              us. There was a barrier between God and His people. The Bible
              tells us, “It’s your sins that have cut you off from God. Because
              of your sins, He has turned away and will not listen anymore”
              (Isaiah 59:2).
            </p>
            <button className="mx-auto rounded-lg bg-blue-500 mt-4 hover:bg-blue-700 duration-300">
              <Link className="text-white block p-2" href="./prayers">
                Learn More
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-bold uppercase">frequency asked questions</h1>
          <div className="mt-4">
            {FAQ.map((item, index) => (
              <div key={index} className="">
                <div className="bg-blue-400 p-2 mt-2 relative">
                  <p>{item.question}</p>{" "}
                  <div
                    onClick={() => {
                      setisAnsOpened(!isAnsOpened);
                    }}
                    className={`absolute p-2 right-2 top-[50%] -translate-y-2/4 rotate-90 duration-300 ${
                      isAnsOpened ? '-rotate-90' : 'rotate-90 duration-300'
                    }`}
                  >
                    <span
                      className={`block text-blue-900 text-4xl font-bold hover:cursor-pointer`}
                    >

<svg width={20} xHeight={20} className="fill-white rotate-90" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>

                  </span>
                  </div>
                </div>
                <div>
                  <p className={`pt-2 bg-blue-500 block ${isAnsOpened && 'hidden' }`}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
