import type { Metadata } from "next";
import { Kanit} from "next/font/google";
import "./globals.css";

const kanin = Kanit({
  subsets: ["latin","thai"],
  weight : ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025 by DTI-SAU",
  description: "เครื่องคำนวณหลากหลายโดย DTI-SAU",
  keywords : ["เครื่องคำนวณ", "BMI","BMR","Car Installment"],
  icons : {
    icon : "/calculator.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanin.className}`}
      >
        {children}
      </body>
    </html>
  );
}
