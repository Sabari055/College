import React from "react";
import "./Card.css"

export default function Card({ title, description, tags = [], stats = {}, link }) {
  return (
    <div className="event_card">
    <div className="bg-gray-100 text-gray-900 rounded-lg shadow-lg p-4 max-w-sm ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
            {title[0]?.toUpperCase()}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          Read post
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <div className="flex space-x-4">
          {Object.entries(stats).map(([key, value], index) => (
            <div key={index} className="flex items-center space-x-1">
              <span>{value}</span>
              <span>{key}</span>
            </div>
          ))}
        </div>
        <button className="text-gray-500 hover:text-gray-700">Save</button>
      </div>
    </div>
    </div>
  );
}