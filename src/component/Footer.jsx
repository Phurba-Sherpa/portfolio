// import { Facebook, Linkedin, Mail, Instagram } from "react-feather";

export default function Footer() {
  return (
    <div className="text-xl h-[10rem] flex justify-between items-center px-12 text-grayscale-300">
      <div className="basis-1/2">
        <p>Copyright &copy; Phurba Sherpa 2023</p>
      </div>
      <div className="flex gap-x-12 px-28">
        <p>
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly
        </p>
        {/* <p>yours truly. Built with React.js and Tailwind CSS, deployed with</p>
        <p>Vercel. All text is set in the Inter typeface.</p> */}
      </div>
    </div>
  );
}