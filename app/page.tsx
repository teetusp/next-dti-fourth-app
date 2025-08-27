import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="container mx-auto max-w-5xl text-center">

        {/*ส่วนหัวเรื่องหลักของหน้า*/}
        <div className="mb-12 ">
          <Image src="/logo.png" alt="logo" width={150} height={150} className="mx-auto mb-4"></Image>
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 drop-shadow-md">
              เครื่องมือคำนวณ
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-red-200">
              เลือกเครื่องมือคำนวณที่คุณต้องการใช้งาน
            </p>
        </div>

        {/*ส่วนของการ์ดคำนวณทั้ง 3 ใบ*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/*การ์ดสำหรับคำนวณ BMI*/}
            <Link href="/bmi" className="card-link block transition-transform transform duration-300 hover:scale-105">
              <div className="card-content bg-gray-800 p-8 rounded-3xl shadow-2xl hover:bg-gray-700 transition-colors duration-300 border-2 border-red-800 hover:border-red-700">
                <div className="text-6xl mb-4">
                  <Image src="/bmi.png" alt="bmi" width={200} height={200} className="mx-auto mb-4"></Image>
                </div>
                <h2 className="text-3xl font-semibold text-red-400">
                  คำนวณ BMI
                </h2>
                <p className="text-5xsmt-2 text-red-300 font-light">
                  คำนวณดัชนีมวลกายเพื่อประเมินน้ำหนัก
                </p>
              </div>
            </Link>

            {/*การ์ดสำหรับคำนวณ BMR*/}
            <Link href="/bmr" className="card-link block transition-transform transform duration-300 hover:scale-105">
              <div className="card-content bg-gray-800 p-8 rounded-3xl shadow-2xl hover:bg-gray-700 transition-colors duration-300 border-2 border-red-800 hover:border-red-700">
                <div className="text-6xl mb-4">
                  <Image src="/bmr.png" alt="logo" width={200} height={200} className="mx-auto mb-4"></Image>
                </div>
                  <h2 className="text-3xl font-semibold text-red-400">
                    คำนวณ BMR
                  </h2>
                  <p className="text-5xs mt-2 text-red-300 font-light">
                    หาอัตราการเผาผลาญพลังงานขั้นพื้นฐานของร่างกาย
                  </p>
              </div>
            </Link>

            {/*การ์ดสำหรับคำนวณสินเชื่อรถยนต์ */}
            <Link href="/carinstallment" className="card-link block transition-transform transform duration-300 hover:scale-105">
              <div className="card-content bg-gray-800 p-8 rounded-3xl shadow-2xl hover:bg-gray-700 transition-colors duration-300 border-2 border-red-800 hover:border-red-700">
                <div className="text-6xl mb-4">
                  <Image src="/car.png" alt="logo" width={200} height={200} className="mx-auto mb-4"></Image>
                </div>
                  <h2 className="text-3xl font-semibold text-red-400">
                    คำนวณสินเชื่อรถยนต์
                  </h2>
                  <p className="text-5xs mt-2 text-red-300 font-light">
                    ประเมินยอดผ่อนชำระต่อเดือนสำหรับรถยนต์
                  </p>
                </div>
            </Link>
        </div>
    </div>
  </div>
  );
}
