"use client";
import Image from "next/image";
import React from "react";
import BMR from "/public/bmr.png";
import { useState } from "react";
export default function Page() {
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmrresult, setBmrresult] = useState('0.00');

  const handleBmrClick = () => {
    if (!weight || !height || !age || parseFloat(weight) <= 0 || parseFloat(height) <= 0 || parseInt(age) <= 0) {
      alert('กรุณาป้อนข้อมูลให้ถูกต้อง');
      return;
    }
    if (gender == 'male') {
      const bmr = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.75 * parseInt(age));
      setBmrresult(bmr.toFixed(2));
    } else{
      const bmr = 655.1 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.67 * parseInt(age));
      setBmrresult(bmr.toFixed(2));
    }
  }

  const handleResetClick = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setBmrresult('0.00');
  };

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
              value={weight} onChange={(e) => setWeight(e.target.value)}
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
              value={height} onChange={(e) => setHeight(e.target.value)}
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
              value={age} onChange={(e) => setAge(e.target.value)}
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
                  value="male"
                  checked = {gender == "male"}
                  onChange={(e) => setGender(e.target.value)}
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
                  value="female"
                  checked = {gender == "female"}
                  onChange={(e) => setGender(e.target.value)}
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
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200"
          onClick={handleBmrClick}>
            คำนวณ BMR
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200"
          onClick={handleResetClick}>
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-gray-700">
            ค่า BMR ที่คำนวณได้:{" "}
            <span id="bmr-value" className="text-red-600">
              {bmrresult}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
