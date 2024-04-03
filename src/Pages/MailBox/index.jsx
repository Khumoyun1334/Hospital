import { TfiAnnouncement } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { BiStar } from "react-icons/bi";
import { BiCrown } from "react-icons/bi";
import { ImUser } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { BsFillInboxFill } from "react-icons/bs";
import React from "react";
import Mol from "../../components/Mol/iddex";

function MailBox() {
  return (
    <div>
      <div className="md:flex block gap-7">
        <div className="xl:w-[25%] w-full">
          <button className="text-[13px] font-semibold text-white bg-[#2EAAB8] p-2 rounded-[8px] pl-6 px-4 uppercase border">
            Compose
          </button>
          <div className="bg-white mt-4 md:h-[900px] pb-8 md:pb-0 rounded-[8px]">
            <div className="p-5 py-10">
              <p className="text-[13px] text-[#333]">Inbox</p>
            </div>
            <div className="w-full">
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7 flex gap-3 bg-[#2DAAB8] hover:bg-[2daab8] shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] text-white p-2 text-[14px] font-semibold"
              >
                <BsFillInboxFill size={"20px"} />
                Piramery (31)
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7 flex gap-3 hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                <ImUser size={"20px"} /> Social (17)
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7 flex gap-3 hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                <BiCrown size={"20px"} /> Promorions (53)
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full mt-10 flex gap-3 text-start px-7  hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                <BiStar size={"20px"} /> Started
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7 flex gap-3  hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                <TfiEmail size={"20px"} /> Send Mails
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7 flex gap-3 hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                <TfiAnnouncement size={"20px"} />
                Piramery
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full mt-10 text-start px-7  hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                Spam
              </button>
              <button
                style={{ transition: "all .5s ease-in-out" }}
                className="w-full text-start px-7  hover:bg-[#2daab8] text-black hover:text-white hover:shadow-[0_0.625rem_1.875rem_0_rgba(22,187,229,.3)] p-2 text-[14px] font-semibold"
              >
                Trash
              </button>
            </div>
          </div>
        </div>
        <div className="p-7 xl:w-[75%] mt-7 md:mt-0 w-full bg-white rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[13px] font-medium">Andrew Symn</p>
            <div className="flex items-center border w-[60%] px-4 p-2 rounded-[8px] gap-3">
              <BiSearch />
              <input
                className="border-l outline-none px-3 text-[14px] font-extralight"
                placeholder="Serch contect hero..."
                type="text"
              />
            </div>
          </div>
          <div className="flex bg-[#2DAAB8] mt-7 px-7 items-center p-3 rounded-l-full">
            <div className="w-[20%]">
              <input
                className="w-[17px] rounded-full h-[17px]"
                type="checkbox"
              />
            </div>
            <div className="w-[16%]">
              <p className="text-white text-[13px]">Name</p>
            </div>
            <div className="w-[16%]">
              <p className="text-white text-[13px]">Status</p>
            </div>
            <div>
              <p className="text-white text-[13px]">Text</p>
            </div>
          </div>
          <div>
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
            <Mol />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailBox;
