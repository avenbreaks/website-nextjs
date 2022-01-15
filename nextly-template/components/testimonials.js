import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import userFourImg from "../public/img/user4.jpg";
import userFiveImg from "../public/img/user5.jpg";
import userSixImg from "../public/img/user6.jpg";
import userSevenImg from "../public/img/user7.jpg";


export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userOneImg}
              name="Michele Evaa Chan"
              title="Smart Contract Engineering"
            />
          </div>
        </div>
        <div className="">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userTwoImg}
              name="Jerry Madez"
              title="Social Media Manager"
            />
          </div>
        </div>
        <div className="">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userThreeImg}
              name="Joey Avenbreaks"
              title="Co-Founder Gitshock Finance"
            />
          </div>
        </div>

                <div className="">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userFourImg}
              name="M Fathur"
              title="Community Manager"
            />
          </div>
        </div>

                <div className="">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userFiveImg}
              name="川田湯田"
              title="Content Writer"
            />
          </div>
        </div>

                <div className="">
          <div className="bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            </p>

            <Avatar
              image={userSixImg}
              name="J.M Tiyo"
              title="Crypto Community Specialist"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
