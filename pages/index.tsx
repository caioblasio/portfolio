import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Button, { ButtonVariants } from "../components/shared/Button";
import Emoji from "../components/shared/Emoji";
import profilePic from "../public/images/profile-pic.png";
import Technologies from "../components/pages/index/Technologies";

const Home: NextPage = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push("/about");
  };

  return (
    <>
      <section id="intro" className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-6xl">Hello! I am Caio De Blasio</h1>
            <p className="text-4xl">and welcome to my personal website!</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
            <div className="flex-1 space-y-8">
              <p className="text-xl">
                I am a Frontend Engineer based in Berlin{" "}
                <Emoji symbol="🇩🇪" label="Germany Flag" /> with more than 6
                years of experience in different industries.
              </p>
              <p className="text-xl">
                I build web applications using the latest technologies, such as
                React, Typescript and Nodejs
              </p>
              <p className="text-xl">
                I work at{" "}
                <a
                  className="text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://n26.com"
                >
                  N26
                </a>
                , a digital bank based in Berlin with more than 7 million
                customers and present more than 20 markets
              </p>
              <p className="text-xl">
                I love to travel the world, meeting new people and playing
                guitar, bass and piano.
              </p>
            </div>
            <div className="md:ml-24">
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={321}
                height={321}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button variant={ButtonVariants.PRIMARY} onClick={handleClick}>
              Get to know my work
            </Button>
            <Button variant={ButtonVariants.OUTLINED} onClick={handleClick}>
              Contact me
            </Button>
          </div>
        </div>
      </section>
      <section id="technologies" className="mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl">Favourite Technologies</h2>
        </div>

        <div className="mt-8 bg-gray-200 p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center justify-items-center text-center">
          <Technologies />
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-xl text-blue-600">
            View All
          </a>
        </div>
      </section>
      <section id="projects" className="max-w-7xl mx-auto px-8 mt-24">
        <h2 className="text-4xl">Projects</h2>
      </section>
    </>
  );
};

export default Home;
