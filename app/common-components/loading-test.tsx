import LoadingImg from "../../public/assets/ivoyant-white.png";

const LoadingTest = () => {
  return (
    <div className="w-full h-full fixed flex items-center justify-center bg-black">
      <img src={LoadingImg} className="z-10 animate-pulse" alt="Ivoyant Logo" />
    </div>
  );
};

export default LoadingTest;
