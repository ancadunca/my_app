import React from "react";
import { useState } from "react";

const SourcesInput = ({ selectedSources, setSelectedSources }) => {
  const sources = ["Source 1", "Source 2", "Source 3", "Source 4"];
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleSourceChange = (event) => {
    const value = event.target.value;
    if (!selectedSources.includes(value)) {
      setSelectedSources([...selectedSources, value]);
      setIsPlaceholderVisible(false);
    }
  };

  const handleDeleteSource = (source) => {
    setSelectedSources(selectedSources.filter((s) => s !== source));
    if (selectedSources.length === 1) {
      setIsPlaceholderVisible(true);
    }
  };

  return (
    <div className="relative">
      <select
        className="flex items-center mt-0 justify-center block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
        value={selectedSources[selectedSources.length - 1] || ""}
        onChange={handleSourceChange}
      >
        {isPlaceholderVisible && (
          <option value="" disabled hidden>
            Select a source
          </option>
        )}
        {sources.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>
      <div className="absolute top-1.5  left-2 flex flex-wrap">
        {selectedSources.map((source) => (
          <div
            key={source}
            className="flex items-center bg-sourceColor rounded-sm py-1 px-2 mr-2 mb-2"
          >
            <span className="text-gray-900 mr-2">{source}</span>
            <button
              type="button"
              className="flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={() => handleDeleteSource(source)}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.66149 1.35355C7.85675 1.15829 7.85675 0.841709 7.66149 0.646447C7.46623 0.451185 7.14965 0.451185 6.95439 0.646447L4.30794 3.29289L1.66149 0.646447C1.46623 0.451185 1.14965 0.451185 0.954384 0.646447C0.759122 0.841709 0.759122 1.15829 0.954384 1.35355L3.60083 4L0.954384 6.64645C0.759122 6.84171 0.759122 7.15829 0.954384 7.35355C1.14965 7.54882 1.46623 7.54882 1.66149 7.35355L4.30794 4.70711L6.95439 7.35355C7.14965 7.54882 7.46623 7.54882 7.66149 7.35355C7.85675 7.15829 7.85675 6.84171 7.66149 6.64645L5.01504 4L7.66149 1.35355Z"
                  fill="#637381"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourcesInput;
