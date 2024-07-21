import { CurrentTime } from "@/components/digital-clock";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full h-16">
      <div className="w-full h-full flex justify-between">
        <div className="w-2/6 h-full bg-primary rounded-br-full shadow-md shadow-gray-500"></div>
        <div className="w-2/6 h-full bg-white shadow-md shadow-gray-300 rounded-b-full">
          <div className="w-full h-full flex justify-center items-center">
            <CurrentTime />
          </div>
        </div>
        <div className="w-1/6 h-full bg-primary rounded-l-full shadow-md shadow-gray-500"></div>
      </div>
    </header>
  );
};
