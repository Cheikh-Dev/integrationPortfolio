import React from 'react'

import { MdPhoneAndroid } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiBank } from "react-icons/ci";

import profil from '../assets/me.png'

export default function Section1() {
  return (
    <>
      <div className="flex border border-w m-5">
        <div className="info-dev flex flex-col justify-center w-2/3 p-5 text-w">
          <div className="flex flex-col mb-8">
            <h1 className="text-4xl font-bold text-w">
              Hello ! je suis{" "}
              <span className="text-y">Cheikh A.T. Gueye</span>
            </h1>
            <p className="text-4xl font-semibold mb-8">Développeur web</p>
          </div>
          <div
            className="relative flex flex-col rounded-md text-md font-bold sm:flex-row sm:justify-around py-5"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 150, 135, 0.3), rgba(255, 255, 255, 0.0))",
            }}
          >
            <div className="flex items-center justify-center mb-4 sm:mb-0">
              <MdPhoneAndroid className="text-y mx-2 size-5" />
              <span className="">78 176 33 25</span>
            </div>
            <div className="flex items-center justify-center mb-4 sm:mb-0">
              <CiMail className="text-y mx-2 size-5" />
              <span className="">cheikhahmedtidiane220@gmail.com</span>
            </div>
            <div className="flex items-center justify-center mb-4 sm:mb-0">
              <CiLocationOn className="text-y mx-2 size-5" />
              <span className="">Dakar Plateau</span>
            </div>
            <div className="flex items-center justify-center">
              <CiBank className="text-y mx-2 size-5" />
              <span className="">Bakeli</span>
            </div>
          </div>
        </div>
        <div className="profil-dev w-1/3">
          <img src={profil} alt="photo de profil" className="rounded-md m-5" />
        </div>
      </div>
    </>
  );
}
