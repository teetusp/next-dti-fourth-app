"use client";
import Image from "next/image";
import BMI from "/public/bmi.png";
import { useState } from "react";
import React from "react";
export default function Page() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  
  const handleBmiClick = () => {
    if (!weight || !height || parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
      alert('กรุณาป้อนข้อมูลให้ถูกต้อง');
      return;
    }
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);

    const heightM = heightCm / 100;

    const calculatedBmi = (weightKg / (heightM * heightM)).toFixed(2);
    setBmi(calculatedBmi);
  };
  
  const handleResetClick = () => {
    setWeight('');
    setHeight('');
    setBmi('');
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-red-600 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          BMI Calculator
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-6">คำนวณ BMI</h2>

        {/* BMI Image */}
        <div className="flex justify-center mb-8">
          <Image src={BMI} alt="bmi" width={100} height={100} className="mx-auto mb-4"></Image>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <div>
            <label htmlFor="weight" className="block text-left text-sm font-medium text-gray-700 mb-1">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input type="number" id="weight" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500
            focus:ring-red-500 p-3 border" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="height"
            className="block text-left text-sm font-medium text-gray-700 mb-1">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input type="number" id="height"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500
              focus:ring-red-500 p-3 border" value={height} onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-x-4 flex justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 
          rounded-full shadow-lg transition-colors duration-200" onClick={handleBmiClick}>
            คำนวณ BMI
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 
          px-6 rounded-full shadow-lg transition-colors duration-200" onClick={handleResetClick}>
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-gray-700">
            ค่า BMI ที่คำนวณได้:{" "}
            <span id="bmi-value" className="text-red-600">
              {bmi}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
