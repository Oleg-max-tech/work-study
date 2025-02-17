import React from "react";

interface Step {
  number: string;
  title: string;
  points: string[];
}

interface WorkStagesProps {
  steps: Step[];
}

const WorkStages: React.FC<WorkStagesProps> = ({ steps }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-24 mt-10 w-full h-auto px-4 md:px-10 font-roboto">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative border-2  border-dark  p-6 w-full sm:w-64 md:w-80 flex flex-col items-center min-h-[300px] bg-white shadow-lg"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-9xl font-bold text-gray-800">
              {step.number}
            </h3>
            <h4 className="text-xl sm:text-4xl font-semibold mt-2">
              {step.title}
            </h4>
          </div>

          <ul className="mt-4 list-disc pl-5 text-base sm:text-lg text-gray-700 text-left w-full">
            {step.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {index < steps.length - 1 && (
            <div className="absolute top-1/2 right-[-60px] transform translate-y-[-50%] w-6 h-6 bg-accent rounded-full"></div>
          )}

          <div className="absolute bottom-[-10px] right-[-10px] w-full h-full bg-accent  z-[-1]"></div>
        </div>
      ))}
    </div>
  );
};

export default WorkStages;
