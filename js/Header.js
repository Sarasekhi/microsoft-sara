//microsoft logo
let fmainmicroimg = async () => {
  let srcmainmicroimg = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let srcmainmicroimgrslt = await srcmainmicroimg.json();
  let mainmicroimgelm = await srcmainmicroimgrslt.header.map((elem) => {
    return `${elem.microimage}`;
  });
  document.querySelector(".mainmicroimg").src = mainmicroimgelm.join();
};

//menu icon
let menuicon = document.querySelector(".menuicon");
let menuiconcntnr = document.querySelector("div.menuiconcntnr");
let menumaindiv = document.querySelector("div.mainmenu");

function menuopenicon() {
  menuiconcntnr.addEventListener("click", () => {
    if (menuicon.classList.contains("fa-bars")) {
      menuicon.classList.add("fa-times");
      menuicon.classList.add("fas");
      menuicon.classList.remove("fa-bars");
      menuicon.classList.remove("fa-solid");
      menumaindiv.classList.add("flex");
      menumaindiv.classList.remove("hidden");
    } else if (menuicon.classList.contains("fa-times")) {
      menuicon.classList.remove("fa-times");
      menuicon.classList.remove("fas");
      menuicon.classList.add("fa-bars");
      menuicon.classList.add("fa-solid");
      menumaindiv.classList.remove("flex");
      menumaindiv.classList.add("hidden");
    }
  });
}

//main menu sm
let mediasmall = window.matchMedia("(max-width: 767px)");
function mediasmallfn() {
  if (mediasmall.matches) {
    let mainmenu = async () => {
      let mainmenudata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
      let mainmenujson = await mainmenudata.json();
      let mainmenucodesm = await mainmenujson.menu.map((elem) => {
        return `
    <li
                  class="w-full border-b border-solid border-stone-200 md:w-[auto]"
                >
                  <a
                    href="${elem.link}"
                    class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] md:w-auto md:text-[13px] md:px-[10px] md:hover:underlin"
                    >${elem.title}</a
                  >
                </li>
    `;
      });
      {
        document.querySelector(".mainul").innerHTML = mainmenucodesm.join("");
      }
    };
    mainmenu();
    let allmicrosoftmenu = async () => {
      let allmicrosoftmenudata = await fetch(
        "https://sarasekhi.github.io/microjsonserver/db.json"
      );
      let allmicrosoftmenujson = await allmicrosoftmenudata.json();
      let allmicrosoftmenusm = await allmicrosoftmenujson.allMicrosoft.map((elem) => {
        if (elem.dropdown.length) {
          return `
      <li class="w-full relative md:w-[auto] dropdownicon">
                          <div
                            class="flex flex-row flex-nowrap justify-end items-center h-[52.5px] w-full absolute top-0 left-0 pr-[18px] cursor-pointer md:hidden dropdowniconcntnr"
                          >
                            <span
                              class="fa-solid fa-angle-up fa-rotate-180 text-[13px] submenuicon"
                            ></span>
                          </div>
                          <span
                            class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:w-[140px] md:text-[13px] md:font-bold md:pl-[24px]"
                            >${elem.title}</span
                          >
                          <div
                            class=" w-full hidden flex-row flex-nowrap justify-end items-center md:flex-wrap md:justify-start"
                          >
                            <ul
                              class="block w-[95%] md:block md:w-[190px] submicro"
                            >
                            ${elem.dropdown
                              .map((e) => {
                                return `
                              <li class="w-full">
                                <a
                                  href="${e.link}"
                                  class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:pl-[24px] md:text-[13px] md:py-[12px] md:hover:underline"
                                  >${e.title}
                                  </a
                                >
                              </li> 
                              `;
                              })
                              .join(
                                ""
                              )}                                                                                        
                            </ul>
                          </div>
                        </li>
  `;
        } else {
          return `
  <li class="w-full relative md:w-[auto]">
                          <a
                            href="${elem.link}"
                            class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:w-[140px] md:text-[13px] md:font-bold md:pl-[24px]"
                            >${elem.title}</a
                          >
                          </li>
  `;
        }
      });
      {
        document.querySelector(".allmicromenu").innerHTML =
          allmicrosoftmenusm.join("");
      }
      function allmicrosubopen() {
        let dropdownselect = document.querySelectorAll("li.dropdownicon");
        let dropdownarray = Array.from(dropdownselect);
        dropdownarray.map((elem) => {
          let subdropdownicon = elem.firstElementChild.firstElementChild;
          let subdropdowncntnr = elem.lastElementChild;
          elem.addEventListener("click", () => {
            if (subdropdownicon.classList.contains("fa-rotate-180")) {
              subdropdownicon.classList.remove("fa-rotate-180");
              subdropdowncntnr.classList.remove("hidden");
              subdropdowncntnr.classList.add("flex");
            } else {
              subdropdownicon.classList.add("fa-rotate-180");
              subdropdowncntnr.classList.add("hidden");
              subdropdowncntnr.classList.remove("flex");
            }
          });
        });
      }
      allmicrosubopen();
    };
    allmicrosoftmenu();
  }
}

// mainmenu md
let mediamedium = window.matchMedia("(min-width: 768px)");
function mediamdfn() {
  if (mediamedium.matches) {
    let mainmenumd = async () => {
      let mainmenudata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
      let mainmenujson = await mainmenudata.json();
      let mainmenujsoncopy = [...mainmenujson.menu];
      let mainmenumdshow = [];
      let mainmenumdhide = [];

      for (let i = 0; i < 4; i++) {
        mainmenumdshow.push(mainmenujsoncopy[i]);
      }
      for (let i = 4; i < mainmenujson.length; i++) {
        mainmenumdhide.push(mainmenujsoncopy[i]);
      }

      let mainmenucodemd = mainmenumdshow.map((elem) => {
        return `
  <li
            class="w-full border-b border-solid border-stone-200 md:border-none lg:block"
              >
                <a
                  href="${elem.link}"
                  class="flex flex-row flex-nowrap md:justify-center md:items-center w-full px-[10px] py-[15px] no-underline text-black font-microsoft text-[15px] md:w-auto md:text-[13px] md:px-[8px] md:hover:underline"
                  >${elem.title}</a
                >
              </li>
  `;
      });
      document.querySelector(".mainul").innerHTML = mainmenucodemd.join("");
      let moreliul = document.querySelector(".mainul");
      let morelicrt = document.createElement("li");
      morelicrt.classList = `moreli w-full border-b border-solid border-stone-200 md:border-none md:w-auto md:relative xl:hidden`;
      let morelicntnt = document.createElement("div");
      morelicntnt.classList =
        "morecntnr hidden w-full h-[53px] md:flex md:flex-nowrap md:justify-center md:items-center no-underline text-black font-microsoft text-[15px] md:block md:w-[73px] md:text-[13px] md:px-[8px] md:hover:bg-stone-100";
      morelicrt.append(morelicntnt);
      let frstspan = document.createElement("span");
      frstspan.textContent = "More";
      frstspan.classList = "md:hover:underline";
      morelicntnt.append(frstspan);
      let scndspan = document.createElement("span");
      scndspan.classList = `arrowspan arrowup fa-solid fa-angle-up fa-rotate-180 text-[11px] px-1`;
      morelicntnt.append(scndspan);
      moreliul.append(morelicrt);
      let morefcursul = document.createElement("ul");
      morefcursul.classList =
        "morefcursul md:hidden md:w-[180px] md:flex-col md:flex-nowrap md:justify-center md:items-start md:bg-stone-100 md:absolute md:top-[53px] md:left-0 z-[1000]";
      morelicrt.append(morefcursul);

      let mainmenumoremd = mainmenumdhide.map((elem) => {
        return `
    <li class="md:w-full md:hover:bg-stone-200">
      <a
        href="${elem.link}"
        class="block w-full p-[18px] no-underline text-black font-microsoft text-[15px] md:w-full md:text-[13px] md:hover:underline lg:hidden"
        >${elem.title}</a
      >
    </li>
    `;
      });

      {
        document.querySelector(".morefcursul").innerHTML =
          mainmenumoremd.join("");
      }
      let morecntnrdiv = document.querySelector(".morecntnr");
      let moreftrscntnrul = document.querySelector(".morefcursul");
      let arrowspan = document.querySelector(".arrowspan");
      morecntnrdiv.addEventListener("click", () => {
        if (arrowspan.classList.contains("arrowup")) {
          moreftrscntnrul.classList.add("md:flex");
          moreftrscntnrul.classList.remove("md:hidden");
          morecntnrdiv.classList.add("md:bg-stone-100");
          arrowspan.classList.remove("arrowup");
        } else {
          moreftrscntnrul.classList.add("md:hidden");
          moreftrscntnrul.classList.remove("md:flex");
          morecntnrdiv.classList.remove("md:bg-stone-100");
          arrowspan.classList.add("arrowup");
        }
      });
    };
    mainmenumd();
    let allmicrocntnr = document.querySelector(".Allmicrocntnr");
    let allmicrocrt = document.createElement("span");
    allmicrocrt.classList = `text-black font-microsoft md:block md:text-[13px] md:px-[2px] md:hover:underline md:cursor-pointer`;
    allmicrocrt.textContent = "All Microsoft";
    allmicrocntnr.append(allmicrocrt);
    let allmicroarrow = document.createElement("span");
    allmicroarrow.classList = `fa-solid fa-angle-up fa-rotate-180 text-[11px] px-1`;
    allmicrocntnr.append(allmicroarrow);
    let allmicrosoftmenumd = async () => {
      let allmicrosoftmenudatamd = await fetch(
        "https://sarasekhi.github.io/microjsonserver/db.json"
      );
      let allmicrosoftmenujsonmd = await allmicrosoftmenudatamd.json();
      let allmicrosoftmenumd = await allmicrosoftmenujsonmd.allMicrosoft.map((elem) => {
        if (elem.dropdown.length) {
          return `
        <li class="w-full relative md:w-auto">
                        <div
                          class="flex flex-row flex-nowrap justify-end items-center h-[52.5px] w-full absolute top-0 left-0 pr-[18px] cursor-pointer md:hidden"
                        >
                          <span
                            class="fa-solid fa-angle-up fa-rotate-180 text-[13px]"
                          ></span>
                        </div>
                        <a
                          href="${elem.link}"
                          class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:w-[140px] md:text-[13px] md:font-bold md:pl-[24px]"
                          >${elem.title}</a
                        >
                        <div
                          class="w-full flex flex-row flex-nowrap justify-end items-center md:flex-wrap md:justify-start"
                        >
                          <ul
                            class="hidden w-[95%] md:block md:w-[190px]"
                          >
                          ${elem.dropdown
                            .map((e) => {
                              return `
                            <li class="w-full">
                              <a
                                href="${e.link}"
                                class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:pl-[24px] md:text-[13px] md:py-[12px] md:hover:underline"
                                >${e.title}</a
                              >
                            </li>
                            `;
                            })
                            .join("")}
                          </ul>
                        </div>
                      </li>
        `;
        } else {
          return `
        <li class="w-full relative md:w-auto">
                        <div
                          class="flex flex-row flex-nowrap justify-end items-center h-[52.5px] w-full absolute top-0 left-0 pr-[18px] cursor-pointer md:hidden"
                        >
                          <span
                            class="fa-solid fa-angle-up fa-rotate-180 text-[13px]"
                          ></span>
                        </div>
                        <a
                          href="${elem.link}"
                          class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-stone-200 md:border-none md:w-[140px] md:text-[13px] md:font-bold md:pl-[24px]"
                          >${elem.title}</a
                        >
                      </li>
        `;
        }
      });
      document.querySelector(".allmicromenu").innerHTML =
        allmicrosoftmenumd.join("");
      let allmicrocntnrdiv = document.querySelector(".Allmicrocntnr");
      let allmicrosub = document.querySelector(".ssmenubody");
      allmicrocntnrdiv.addEventListener("click", () => {
        if (allmicrocntnrdiv.classList.contains("microcntnrdiv")) {
          allmicrosub.classList.remove("md:hidden");
          allmicrosub.classList.add("md:flex");
          allmicrocntnrdiv.classList.remove("microcntnrdiv");
          allmicrocntnrdiv.classList.add("md:bg-stone-100");
        } else {
          allmicrosub.classList.remove("md:flex");
          allmicrosub.classList.add("md:hidden");
          allmicrocntnrdiv.classList.add("microcntnrdiv");
          allmicrocntnrdiv.classList.remove("md:bg-stone-100");
        }
      });
    };
    allmicrosoftmenumd();
  }
}

// mainmenu lg
let medialarge = window.matchMedia("(min-width: 1024px)");
function medialargefn() {
  if (medialarge.matches) {
    let mainmenulg = async () => {
      let mainmenudatalg = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
      let mainmenujsonlg = await mainmenudatalg.json();
      let mainmenujsoncopylg = [...mainmenujsonlg.menu];
      let mainmenulgshowlg = [];
      let mainmenulghidelg = [];
      for (let i = 0; i < 6; i++) {
        mainmenulgshowlg.push(mainmenujsoncopylg[i]);
      }
      for (let i = 6; i < mainmenujsonlg.length; i++) {
        mainmenulghidelg.push(mainmenujsoncopylg[i]);
      }
      let mainmenucodelg = mainmenulgshowlg.map((elem) => {
        return `
      <li
      class="w-full border-b border-solid border-stone-200 md:border-none lg:block"
        >
          <a
            href="${elem.link}"
            class="flex flex-row flex-nowrap md:justify-center md:items-center w-full px-[6px] py-[15px] no-underline text-black font-microsoft text-[15px] md:w-auto md:text-[13px] md:px-[6px] md:hover:underline"
            >${elem.title}</a
          >
        </li>
  `;
      });
      document.querySelector(".mainul").innerHTML = mainmenucodelg.join("");
      let moreliul = document.querySelector(".mainul");
      let morelicrt = document.createElement("li");
      morelicrt.classList = `moreli w-full border-b border-solid border-stone-200 md:border-none md:w-auto md:relative xl:hidden`;
      let morelicntnt = document.createElement("div");
      morelicntnt.classList =
        "morecntnr hidden w-full h-[53px] md:flex md:flex-nowrap md:justify-center md:items-center no-underline text-black font-microsoft text-[15px] md:block md:w-[73px] md:text-[13px] md:px-[8px] md:hover:bg-stone-100 cursor-pointer";
      morelicrt.append(morelicntnt);
      let frstspan = document.createElement("span");
      frstspan.textContent = "More";
      frstspan.classList = "md:hover:underline";
      morelicntnt.append(frstspan);
      let scndspan = document.createElement("span");
      scndspan.classList = `arrowspan arrowup fa-solid fa-angle-up fa-rotate-180 text-[11px] px-1`;
      morelicntnt.append(scndspan);
      moreliul.append(morelicrt);
      let morefcursul = document.createElement("ul");
      morefcursul.classList =
        "morefcursul hidden lg:w-[180px] lg:flex-col lg:flex-nowrap lg:justify-center lg:items-start lg:bg-stone-100 lg:absolute lg:top-[53px] lg:left-0 z-[3000]";
      morelicrt.append(morefcursul);

      let mainmenumorelg = mainmenulghidelg.map((elem) => {
        return `
    <li class="lg:w-full lg:hover:bg-stone-200">
      <a
        href="${elem.link}"
        class="block w-full p-[18px] no-underline text-black font-microsoft text-[15px] lg:w-full lg:text-[13px] lg:hover:underline"
        >${elem.title}</a
      >
    </li>
    `;
      });

      document.querySelector(".morefcursul").innerHTML =
        mainmenumorelg.join("");

      let morecntnrdiv = document.querySelector(".morecntnr");
      let moreftrscntnrul = document.querySelector(".morefcursul");
      let arrowspan = document.querySelector(".arrowspan");
      morecntnrdiv.addEventListener("click", () => {
        if (arrowspan.classList.contains("fa-rotate-180")) {
          moreftrscntnrul.classList.add("lg:flex");
          moreftrscntnrul.classList.remove("hidden");
          morecntnrdiv.classList.add("lg:bg-stone-100");
          arrowspan.classList.remove("fa-rotate-180");
        } else {
          moreftrscntnrul.classList.add("lg:hidden");
          moreftrscntnrul.classList.remove("lg:flex");
          morecntnrdiv.classList.remove("lg:bg-stone-100");
          arrowspan.classList.add("fa-rotate-180");
        }
      });
    };
    mainmenulg();
  }
}

// mainmenu xl
let mediaxlarge = window.matchMedia("(min-width: 1280px)");
function mediaxlargefn() {
  if (mediaxlarge.matches) {
    let mainmenuxlg = async () => {
      let mainmenudataxlg = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
      let mainmenujsonxlg = await mainmenudataxlg.json();
      let mainmenucodexlg = mainmenujsonxlg.menu.map((elem) => {
        return `
      <li
      class="w-full border-b border-solid border-stone-200 md:border-none lg:block"
        >
          <a
            href="${elem.link}"
            class="flex flex-row flex-nowrap md:justify-center md:items-center w-full px-[6px] py-[15px] no-underline text-black font-microsoft text-[15px] md:w-auto md:text-[13px] md:px-[6px] md:hover:underline xl:px-[10px]"
            >${elem.title}</a
          >
        </li>
  `;
      });
      document.querySelector(".mainul").innerHTML = mainmenucodexlg.join("");
    };
    mainmenuxlg();
  }
}

//site map
let mainsitemapdiv = document.querySelector(".ssmenubody");

function sitemap() {
  let sitemapsdiv = document.createElement("div");
  sitemapsdiv.classList = `w-full border-t border-solid border-stone-200 md:border-none md:bg-stone-200 md:h-[38px] sitemappart`;
  mainsitemapdiv.append(sitemapsdiv);
  let sitemappart = async () => {
    let sitemapinf = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
    let sitemapjson = await sitemapinf.json();
    let sitemapcode = sitemapjson.siteMap.map((elem) => {
      return `    
                    <a
                      href="${elem.link}"
                      class="block w-full p-[15px] no-underline text-black font-microsoft text-[15px] border-b border-solid border-black md:border-b-2 md:border-b-black md:text-[13px] md:p-0 md:h-[38px] md:flex md:flex-row md:flex-nowrap md:justify-center md:items-baseline md:gap-1 md:hover:underline md:leading-[38px]"
                    >
                      <span class="">${elem.title}</span>
                      <span
                        class="hidden fa-solid fa-chevron-right text-[10px] md:inline"
                      ></span
                    ></a>
    `;
    });
    document.querySelector(".sitemappart").innerHTML = sitemapcode.join();
  };
  sitemappart();
}

//user part
let userpart = async () => {
  let userparticon = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let userpartjson = await userparticon.json();
  let userpartjsonc = [...userpartjson.userpart];
  let userpartjsoncf = [];
  let userpartjsoncs = [];
  userpartjsoncf.push(userpartjsonc[0]);
  userpartjsoncs.push(userpartjsonc[1]);
  userpartjsoncs.push(userpartjsonc[2]);

  let userpartf = userpartjsoncf.map((elem) => {
    return `
  <div
              class="w-[48px] h-[53px] flex flex-row flex-nowrap justify-center items-center md:w-[40px] "
            >
              <a
                href="${elem.link}"
                class="flex flex-row flex-nowrap justify-center items-center w-[48px] h-[53px] md:w-[40px] 2xl:w-[75px] 2xl:gap-[5px]"
              >
                <span
                  class="hidden 2xl:flex 2xl:flex-row 2xl:flex-nowrap 2xl:justify-center 2xl:items-center text-[13px]"
                  >${elem.title}</span
                >
                <span
                  class="${elem.iconclass}"
                ></span>
              </a>
            </div>
  `;
  });
  document.querySelector(".userpartcntnr").innerHTML = userpartf.join("");

  let maindivuserpart = document.querySelector(".userpartcntnr");
  let suserpartmdiv = document.createElement("div");
  suserpartmdiv.classList = `w-[96px] h-[53px] flex flex-row flex-nowrap justify-between items-center mr-2 md:mr-[20px] md:justify-end md:w-[80px] lg:mr-[60px] 2xl:w-[160px] spartmaindiv`;
  maindivuserpart.append(suserpartmdiv);

  let userparts = userpartjsoncs.map((elem) => {
    return `
    <div
                class="w-[48px] h-[53px] flex flex-row flex-nowrap justify-center items-center md:w-[40px] 2xl:w-[80px] 2xl:gap-[5px]"
              >
                <a
                  href="${elem.link}"
                  class="flex flex-row flex-nowrap justify-center items-center w-[48px] h-[53px] md:w-[40px] 2xl:w-[80px] 2xl:gap-[5px]"
                >
                  <span
                    class="hidden 2xl:flex 2xl:flex-row 2xl:flex-nowrap 2xl:justify-center 2xl:items-center text-[13px]"
                    >${elem.title}</span
                  >
                  <span
                    class="${elem.iconclass}"
                  ></span>
                </a>
              </div>
    `;
  });
  document.querySelector(".spartmaindiv").innerHTML = userparts.join("");
};

export default {
  fmainmicroimg,
  menuopenicon,
  mediasmallfn,
  mediamdfn,
  medialargefn,
  mediaxlargefn,
  sitemap,
  userpart,
};
