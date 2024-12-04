import React, { FC } from "react";
import Image from "next/image";
import reactLogo from "../../../../public/images/react-logo.png";
import typescriptLogo from "../../../../public/images/typescript.svg";
import nodejsLogo from "../../../../public/images/nodejs.svg";
import webpackLogo from "../../../../public/images/webpack.svg";
import awsLogo from "../../../../public/images/aws.svg";

const Technologies: FC<any> = () => {
  const technologies = [
    {
      alt: "React Logo",
      image: reactLogo,
      name: "React",
    },
    {
      alt: "Typescript Logo",
      image: typescriptLogo,
      name: "Typescript",
    },
    {
      alt: "NodeJS Logo",
      image: nodejsLogo,
      name: "NodeJS",
    },
    {
      alt: "Webpack Logo",
      image: webpackLogo,
      name: "Webpack",
    },
    {
      alt: "AWS Logo",
      image: awsLogo,
      name: "AWS",
    },
    {
      alt: "AWS Logo",
      image: awsLogo,
      name: "AWS",
    },
  ];

  return (
    <>
      {technologies.map(({ alt, image, name }, index) => (
        <div key={`alt-${index}`}>
          <Image
            alt={alt}
            src={image}
            width={150}
            height={150}
            layout="fixed"
          />
          <p className="text-2xl text-gray-500 mt-2">{name}</p>
        </div>
      ))}
    </>
  );
};

export default Technologies;
