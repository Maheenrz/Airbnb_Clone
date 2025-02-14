import React from "react";

const ProgressBar = ({ step, setStep, handleSubmit }) => {
  const totalSteps = 13; // Update the total steps to match the ListingForm component

  return (
    <div className="fixed bottom-0 bg-white left-0 w-full dark:bg-gray-700 overflow-hidden z-50">
      <div className="bg-gray-200 text-xs font-medium text-blue-100 text-center p-[0.25rem] leading-none"></div>
      {!step && (
        <div className="flex justify-between">
          <button
            className="right-0 m-4 w-32 h-12 rounded-lg border-none text-white bg-pink-600"
            onClick={() => setStep(1)}
          >
            Get Started
          </button>
        </div>
      )}

      {step > 0 && (
        <div className="flex justify-between">
          <button
            className="m-4 w-24 text-black underline cursor-pointer"
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
          >
            Back
          </button>
          {step < totalSteps - 1 ? (
            <button
              className="m-4 w-24 h-12 rounded-lg border-none text-white bg-black"
              onClick={() => step < totalSteps && setStep(step + 1)}
              disabled={step === totalSteps}
            >
              Next
            </button>
          ) : (
            <button
              className="m-4 w-24 h-12 rounded-lg border-none text-white bg-red-500 hover:bg-red-400"
              onClick={handleSubmit}
            >
              Publish
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;