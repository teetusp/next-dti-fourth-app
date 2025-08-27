"use client";
import Image from "next/image";
import React from "react";
import Car from "/public/car.png";
export default function page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-red-600 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Car Installment Calculator
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-6">
          คำนวณ Car Installment
        </h2>

        {/* Car Image */}
        <div className="flex justify-center mb-8">
          <Image src={Car} alt="car" width={100} height={100} className="mx-auto mb-4"></Image>
        </div>

        {/* Input Fields */}
        <div className="space-y-6 text-left">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ชื่อผู้คำนวณ
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
            />
          </div>

          <div>
            <label
              htmlFor="carPrice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
            />
          </div>

          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
            />
          </div>

          {/* Down Payment Selection */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">
              เงินดาวน์ (%)
            </span>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[15, 20, 25, 30, 35].map((percent, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={`down-payment-${percent}`}
                    name="downPayment"
                    type="radio"
                    defaultChecked={percent === 15}
                    className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                  />
                  <label
                    htmlFor={`down-payment-${percent}`}
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    {percent}%
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Term Dropdown */}
          <div>
            <label
              htmlFor="loanTerm"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id="loanTerm"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
            >
              {[24, 36, 48, 60, 72].map((months, index) => (
                <option
                  key={index}
                  value={months}
                  defaultChecked={months === 24}
                >
                  {months} เดือน
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-x-4 flex justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200">
            คำนวณ
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200">
            ล้างข้อมูล
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-gray-700">
            ผ่อนชำระต่อเดือน:{" "}
            <span id="installment-value" className="text-red-600">
              0.00
            </span>{" "}
            บาท
          </p>
        </div>
      </div>
    </div>
  );
}
