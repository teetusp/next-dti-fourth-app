"use client";
import Image from "next/image";
import React from "react";
import BMR from "/public/bmr.png";
export default function page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-red-600 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          BMR Calculator
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-6">คำนวณ BMR</h2>

        {/* BMR Image */}
        <div className="flex justify-center mb-8">
          <Image src={BMR} alt="bmr" width={100} height={100} className="mx-auto mb-4"></Image>
        </div>

        {/* Input Fields */}
        <div className="space-y-6 text-left">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-red-500 focus:ring-red-500 p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 
              focus:ring-red-500 p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-red-500 focus:ring-red-500 p-3 border"
            />
          </div>
          {/* Gender Selection */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">
              เพศ
            </span>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="gender-male"
                  name="gender"
                  type="radio"
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                  defaultChecked
                />
                <label
                  htmlFor="gender-male"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  ชาย
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="gender-female"
                  name="gender"
                  type="radio"
                  className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                />
                <label
                  htmlFor="gender-female"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  หญิง
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-x-4 flex justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200">
            คำนวณ BMR
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200">
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-gray-700">
            ค่า BMR ที่คำนวณได้:{" "}
            <span id="bmr-value" className="text-red-600">
              0.00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
