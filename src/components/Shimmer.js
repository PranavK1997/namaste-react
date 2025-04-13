const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-3 gap-4 p-4">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card p-4 w-full h-48 bg-gray-200 rounded-lg relative overflow-hidden"
          >
            <div className="shimmer-bg absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
