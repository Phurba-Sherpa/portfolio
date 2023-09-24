export default function Footer() {
    return (
        <div className="lg:text-xl h-[8rem] flex justify-between items-center md:px-12 text-grayscale-300 text-sm px-6">
            <div className="md:basis-1/2 whitespace-nowrap">
                <p>Copyright &copy; Phurba Sherpa 2023</p>
            </div>
            <div className="flex opacity-0 gap-x-12 px-28 md:opacity-100">
                <p>
                    Loosely designed in Figma and coded in Visual Studio Code by
                    yours truly
                </p>
            </div>
        </div>
    )
}
