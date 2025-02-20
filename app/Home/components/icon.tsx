"use client";
import Link from "next/link";
import { Wallet, BarChart, ShoppingCart, Store, Boxes, Factory, Shield, Wrench, Home, Users } from "lucide-react";


const services = [
  { icon: Wallet, label: "FINANCE", link: "/finance", color: "text-green-600" },
  { icon: BarChart, label: "SALE", link: "/sale", color: "text-blue-600" },
  { icon: ShoppingCart, label: "PURCHASE", link: "/purchase", color: "text-yellow-600" },
  { icon: Store, label: "POS", link: "/pos", color: "text-red-600" },
  { icon: Boxes, label: "INVENTORY", link: "/inventory", color: "text-purple-600" },
  { icon: Factory, label: "MANUFACTURING", link: "/manufacturing", color: "text-orange-600" },
  { icon: Home, label: "ASSETS", link: "/assets", color: "text-teal-600" },
  { icon: Shield, label: "SECURITY", link: "/security", color: "text-indigo-600" },
  { icon: Wrench, label: "SERVICES", link: "/services", color: "text-pink-600" },
  { icon: Users, label: "HRM", link: "/hrm", color: "text-gray-600" },
];

function Icon() {
  return (
    <div className="text-center w-9/12 mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-800">
        Providing Integrated Solutions for Your Business
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mt-20 place-items-center">
        {services.map(({ icon: Icon, label, link, color }, index) => (
          <div key={index} className="flex flex-col items-center w-36 h-28 justify-center bg-gray-100 rounded-lg shadow-lg hover:bg-purple-700   text-black hover:text-white transition-all">
            {/* Consistent Icon Size */}
            <Icon size={36} className={`${color} mb-2`} />
            <Link href={link} passHref>
              <span className="text-sm font-semibold text-gray-800 hover:text-white ">{label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icon;
