import ImageBox from "@/components/ImageBox";
import { Button } from "@/components/ui/button";

function MainFooter() {
  return (
    <div className="bg-slate-800 relative w-[100%] h-[auto] p-10">
      <div className="flex flex-col">
        <div>
          <div className="w-[60%] p-[64px] bg-yellow-300 left-0 rounded-2xl">
            <div className="flex flex-col gap-12">
              <p className="text-4xl text-pretty font-medium">
                Let’s get started.
              </p>
              <p className="text-xl text-pretty text-gray-800">
                We want to hear from you to get an awesome project started!
              </p>
              <div className="w-[100%]">
                <Button className="w-1/2 h-14 bg-black rounded-3xl">
                  Let Chat
                </Button>
              </div>
            </div>
          </div>
          <img
            className="w-[30%] absolute right-[0%] bottom-[10%]"
            src="https://cdn.prod.website-files.com/650b5cd533962f0f2a3c9f18/6512fc4b30d63c0afe148f09_footer-img2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
