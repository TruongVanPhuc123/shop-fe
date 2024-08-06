import { Button } from "@/components/ui/button";

function MainFooter() {
  return (
    <div className="bg-slate-800 w-full p-10">
      <div className="xl:flex xl:justify-between flex justify-center w-full items-center">
        <div className="xl:w-[60%] p-[64px] bg-yellow-300 left-0 rounded-2xl">
          <div className="flex flex-col gap-12">
            <p className="text-4xl text-pretty font-medium">
              Let’s get started.
            </p>
            <p className="text-xl text-pretty text-gray-800">
              We want to hear from you to get an awesome project started!
            </p>
            <div className="w-full">
              <Button className="w-1/2 h-14 bg-black rounded-3xl">
                Let Chat
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[30%] hidden xl:block">
          <img
            src="https://cdn.prod.website-files.com/650b5cd533962f0f2a3c9f18/6512fc4b30d63c0afe148f09_footer-img2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
