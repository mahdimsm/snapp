import Image from "next/image";
import Logo from "../../public/image/snappTextLogo.svg";
const NavBar = () => {
  return (
     <div>
       <div className="w-full border border-b z-50" style={{position: "sticky" ,top:"0px"}}>
        <div className=" sm:w-full md:w-4/5 h-[70px] md:h-[90px] m-auto flex justify-start items-center">
          <div className="flex md:hidden justify-between w-full flex-nowrap mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer dark:bg-white dark:rounded-sm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Image src={Logo} width={70} height={70} alt="snapp logo" />
          </div>
          <Image
            className="md:flex hidden"
            src={Logo}
            width={70}
            height={70}
            alt="snapp logo"
          />
          <ul className="text-clamp list-none dark:text-white justify-start items-center font-iran_Light mx-7 h-[55px] md:flex hidden">
            <li className="flex items-center relative cursor-default px-4 py-1 group/item hover:text-green_snap">
              سوپراپ اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover/item:flex hidden w-[170px] absolute top-6 list-none text-text_nav dark:text-white bg-white dark:bg-bg_dark2 border border-1 flex-col justify-start items-start font-iran_Light rounded-lg leading-9">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test1
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test2
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test3
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test4
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test5
                </li>
              </ul>
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              ثبت نام راننده اسنپ
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              باشگاه رانندگان
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              پنل سازمانی
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              بلاگ
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap group/item_about">
              درباره اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover/item_about:flex hidden w-[170px] absolute top-14 list-none text-text_nav dark:text-white bg-white dark:bg-bg_dark2 border border-1 flex-col justify-start items-start font-iran_Light rounded-lg leading-9 z-50">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test1
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test2
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test3
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test4
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test5
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> 
       <div className=" hidden w-full bg-bg_nav_res text-xs  fixed z-50 h-screen">
        <div className="sm:w-1/2 w-full bg-white dark:bg-bg_dark1 border border-l-1 h-[100vh] sm:flex md:hidden">
          <ul className="list-none flex flex-col justify-start items-start dark:text-white font-iran_Light mx-7 w-full">
            <li className="group/item flex flex-col items-center cursor-default font-iran_Bold w-11/12 my-4">
              <div className="flex justify-between w-full items-center">
                <span>سوپر اسنپ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-chevron-down mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
              <ul className="group-hover/item:flex hidden w-full list-none text-text_nav dark:text-white bg-white dark:bg-bg_dark2 flex-col justify-start items-start font-iran_Light rounded-lg leading-9">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test1
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test2
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test3
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test4
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test5
                </li>
              </ul>
            </li>

            <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
              درخواست تاکسی
              <span className="text-green_snap text-sm mx-2"> (متن تستی) </span>
            </li>
            <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
              درخواست تاکسی
            </li>
            <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
              درخواست تاکسی
            </li>
            <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
              درخواست تاکسی
            </li>

            <li className="group/item_about flex flex-col items-center cursor-default font-iran_Bold w-11/12 my-4">
              <div className="flex justify-between w-full items-center">
                <span>سوپر اسنپ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-chevron-down mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
              <ul className="group-hover/item_about:flex hidden w-full list-none text-text_nav dark:text-white bg-white dark:bg-bg_dark2 flex-col justify-start items-start font-iran_Light rounded-lg leading-9">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test1
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test2
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test3
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test4
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test5
                </li>
              </ul>
            </li>

            <hr className="divide-solid w-full my-2" />
            <li className="group/item_about flex flex-col items-center cursor-default font-iran_Bold w-11/12 my-4 text-green_snap">
              <div className="flex justify-between w-full items-center">
                <span>سوپر اسنپ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-chevron-down mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
              <ul className="group-hover/item_about:flex hidden w-full list-none text-text_nav dark:text-white bg-white dark:bg-bg_dark2 flex-col justify-start items-start font-iran_Light rounded-lg leading-9">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test1
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test2
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test3
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test4
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  test5
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
    </div> 
  );
};

export default NavBar;
