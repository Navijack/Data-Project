import React from "react"
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className=" text-green-300 font-bold ">DATA ANALYTICS CENTRALLY</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>Effective data analytics management is crucial for making informed business decisions. By centralizing data analytics, organizations can ensure consistency, improve data accuracy, and streamline processes. Centralized analytics also facilitate better collaboration across departments, enabling a unified approach to data-driven strategies. This approach helps in uncovering valuable insights, optimizing operations, and driving innovation. Centralized data analytics management not only enhances the quality of the data but also ensures compliance with industry regulations and standards, providing a robust foundation for sustainable growth.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-green-300">Get Started</button>
        </div>
      </div>
    </div>
  )
}
export default Analytics