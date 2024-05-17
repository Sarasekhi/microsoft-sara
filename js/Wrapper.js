//alert part
let alertpart = async () => {
  let alertpartdate = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let alertpartjson = await alertpartdate.json();
  let alerttags = alertpartjson.alertpart.map((elem) => {
    return `
        <a
          href="${elem.link}"
          class="flex flex-row flex-nowrap justify-center items-baseline w-full text-[16px] font-600 no-underline text-white"
        >
          <p
            class="w-auto flex flex-nowrap flex-row justify-center items-center text-center font-semibold font-microsoft"
          >
            ${elem.description}
          </p>
          <span class="fa-solid fa-angle-right px-1 md:px-2"></span>
        </a>
        `;
  });
  document.querySelector(".alertpart").innerHTML = alerttags.join();
};

//first swiper
let frstswiper = async () => {
  let frstswprdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let frstswprjson = await frstswprdata.json();
  let frstswprtags = frstswprjson.firstswiper.map((elem) => {
    return `
    <div
                class="swiper-slide flex justify-center items-center relative"
              >
                <a
                  href="${elem.mainlink}"
                  class="sildecntnr block w-full h-[inherit] absolute top-0 left-0 z-[2]"
                >
                </a>
                <div class="w-full mx-auto">
                  <div class="w-full lg:relative">
                    <img
                      src="${elem.smimage}"
                      alt="${elem.imgalt}"
                      class="w-full block object-cover object-center lg:hidden"
                    />
                    <img
                      src="${elem.lgimage}"
                      alt="${elem.imgalt}"
                      class="hidden lg:w-full lg:block lg:object-cover lg:object-center xl:hidden"
                    />
                    <img
                      src="${elem.xlimage}"
                      alt="${elem.imgalt}"
                      class="hidden xl:w-full xl:block xl:object-cover xl:object-center"
                    />
                  </div>
                  <div class="w-full md:relative lg:static">
                    <div
                      class="bg-white w-full relative top-0 left-0 mx-auto px-[12px] shadow-md md:w-[98%] md:top-[-60px] md:p-[48px] lg:bg-transparent lg:w-[426px] lg:top-[calc(50%-(200px))] lg:left-[30px] lg:absolute lg:shadow-none xl:left-[40px] xl:w-[480px] 2xl:w-[680px] 2xl:left-[50px]"
                    >
                      <div class="w-full px-[24px] py-[12px]">
                        <div
                          class="flex flex-row flex-nowrap justify-start items-center"
                        >
                          <span
                            class="block w-auto mb-[8px] font-microsoft font-semibold text-[16px] sldesbjct"
                            >${elem.subject}</span
                          >
                        </div>
                        <div
                          class="flex flex-row flex-nowrap justify-start items-center"
                        >
                          <h2
                            class="text-[24px] font-semibold font-microsoft mb-[12px] 2xl:text-[37px] mainttle"
                          >
                            ${elem.title}
                          </h2>
                        </div>
                        <div
                          class="flex flex-row flex-nowrap justify-start items-center"
                        >
                          <p class="text-[16px] font-microsoft mb-[24px] slddscrptn">
                            ${elem.description}
                          </p>
                        </div>
                        <div
                          class="flex flex-row flex-nowrap justify-start items-center"
                        >
                          <a
                            href="${elem.shoplink}"
                            class="py-[10px] px-[12px] text-white bg-black my-[8px] z-[3] lg:hover:shadow-md btnanchr"
                            >${elem.btn}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `;
  });
  document.querySelector(".frstswprcntnr").innerHTML = frstswprtags.join("");
  let frstswiperdiffr =
    document.querySelector(".frstswprcntnr").lastElementChild;
  let sbjcttag = frstswiperdiffr.querySelector(".sldesbjct");
  sbjcttag.classList.remove("text-pink-900");
  sbjcttag.classList.add("text-white");
  sbjcttag.classList.add("py-[2px]");
  sbjcttag.classList.add("px-[12px]");
  sbjcttag.classList.add("bg-pink-900");
  let mnttletag = frstswiperdiffr.querySelector(".mainttle");
  mnttletag.classList.add("lg:text-white");
  let slidedes = frstswiperdiffr.querySelector(".slddscrptn");
  slidedes.classList.add("lg:text-white");
  let btnanchor = frstswiperdiffr.querySelector(".btnanchr");
  btnanchor.classList.remove("lg:hover:shadow-md");
  btnanchor.classList.add("lg:text-black");
  btnanchor.classList.add("lg:bg-white");
  btnanchor.classList.add("lg:font-semibold");
  btnanchor.classList.add("lg:hover:bg-stone-200");
};

//product part
let prodctpart = async () => {
  let prodctpartdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let prodctpartjson = await prodctpartdata.json();
  let prodctparttags = prodctpartjson.productpart.map((elem) => {
    return `
  <div
              class="w-auto h-[72px] mx-[24px] my-[16px] flex flex-col flex-nowrap justify-center items-center"
            >
              <div class="w-auto">
                <img
                  src="${elem.iconsrc}"
                  alt="${elem.iconalt}"
                  class="block w-[40px] h-[40px] mb-[8px]"
                />
              </div>
              <div class="w-auto">
                <a href="${elem.link}" class="w-auto underline font-semibold text-[16px]"
                  >${elem.title}</a
                >
              </div>
            </div>
  `;
  });
  document.querySelector(".prodctcntnr").innerHTML = prodctparttags.join("");
};

//dicount part
let discountprt = async () => {
  let discountprtdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let discountprtjson = await discountprtdata.json();
  let discountprttags = [...discountprtjson.discountpart];
  let discountprttagsp1 = [];
  let discountprttagsp2 = [];
  for (let i = 0; i < 2; i++) {
    discountprttagsp1.push(discountprttags[i]);
  }
  for (let i = 2; i <= 3; i++) {
    discountprttagsp2.push(discountprttags[i]);
  }
  let frstdiscountprt = discountprttagsp1.map((elem) => {
    return `
  <div
              class="w-full px-[12px] mb-[12px] flex flex-col flex-nowrap justify-center items-center relative"
            >
              <a
                href="${elem.link}"
                class="block w-full h-[100%] absolute top-0 left-0 z-[2]"
              >
              </a>
              <div class="w-full mx-auto">
                <div class="w-full">
                  <img
                    src="${elem.imgsmsrc}"
                    alt="${elem.imgalt}"
                    class="w-full block object-cover object-center sm:hidden"
                  />
                  <img
                    src="${elem.imgmdsrc}"
                    alt="${elem.imgalt}"
                    class="hidden sm:w-full sm:block sm:object-cover sm:object-center"
                  />
                </div>
                <div class="w-full">
                  <div class="bg-white w-full mx-auto py-[16px]">
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <span
                        class="block w-auto font-microsoft font-semibold text-[16px] text-white py-[2px] px-[12px] bg-pink-900"
                        >${elem.subject}</span
                      >
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <h2
                        class="text-[21px] font-semibold font-microsoft mb-[12px] lg:text-[24px] 2xl:text-[28px]"
                      >
                        ${elem.title}
                      </h2>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <p class="text-[16px] font-microsoft mb-[16px]">
                        ${elem.description}
                      </p>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-baseline"
                    >
                      <a
                        href="${elem.btnlink}"
                        class="font-semibold text-[16px] font-microsoft text-pink-900 my-[16px] z-[3] hover:underline"
                        >${elem.btn}</a
                      >
                      <span
                        class="fa-solid fa-angle-right px-[6px] text-pink-900"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  });
  document.querySelector(".dscntfrstcntnr").innerHTML =
    frstdiscountprt.join("");
  let scnddiscountprt = discountprttagsp2.map((elem) => {
    return `
  <div
              class="w-full px-[12px] mb-[12px] flex flex-col flex-nowrap justify-center items-center relative"
            >
              <a
                href="${elem.link}"
                class="block w-full h-[100%] absolute top-0 left-0 z-[2]"
              >
              </a>
              <div class="w-full mx-auto">
                <div class="w-full">
                  <img
                    src="${elem.imgsmsrc}"
                    alt="${elem.imgalt}"
                    class="w-full block object-cover object-center sm:hidden"
                  />
                  <img
                    src="${elem.imgmdsrc}"
                    alt="${elem.imgalt}"
                    class="hidden sm:w-full sm:block sm:object-cover sm:object-center"
                  />
                </div>
                <div class="w-full">
                  <div class="bg-white w-full mx-auto py-[16px]">
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <span
                        class="block w-auto font-microsoft font-semibold text-[16px] text-white py-[2px] px-[12px] bg-pink-900"
                        >${elem.subject}</span
                      >
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <h2
                        class="text-[21px] font-semibold font-microsoft mb-[12px] lg:text-[24px] 2xl:text-[28px]"
                      >
                        ${elem.title}
                      </h2>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <p class="text-[16px] font-microsoft mb-[16px]">
                        ${elem.description}
                      </p>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-baseline"
                    >
                      <a
                        href="${elem.btnlink}"
                        class="font-semibold text-[16px] font-microsoft text-pink-900 my-[16px] z-[3] hover:underline"
                        >${elem.btn}</a
                      >
                      <span
                        class="fa-solid fa-angle-right px-[6px] text-pink-900"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  });
  document.querySelector(".dscntscndtcntnr").innerHTML =
    scnddiscountprt.join("");
};

//accesorries
let accesorrsprt = async () => {
  let accesorrsprtdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let accesorrsprtjson = await accesorrsprtdata.json();
  let accesorrsprttags = accesorrsprtjson.accesories.map((elem) => {
    return `
  <a
            href="${elem.mainlink}"
            class="sildecntnr block w-full h-[100%] absolute top-0 left-0 z-[2]"
          >
          </a>
          <div class="w-full mx-auto">
            <div class="w-full lg:relative">
              <img
                src="${elem.smimage}"
                alt="${elem.accesory}"
                class="w-full block object-cover object-center lg:hidden"
              />
              <img
                src="${elem.lgimage}"
                alt="${elem.accesory}"
                class="hidden lg:w-full lg:block lg:object-cover lg:object-center xl:hidden"
              />
              <img
                src="${elem.xlimage}"
                alt="${elem.accesory}"
                class="hidden xl:w-full xl:block xl:object-cover xl:object-center"
              />
            </div>
            <div class="w-full md:relative lg:static">
              <div
                class="bg-white w-full relative top-0 left-0 mx-auto px-[12px] shadow-md md:w-[98%] md:top-[-60px] md:p-[48px] lg:bg-transparent lg:w-[426px] lg:top-[calc(50%-(180px))] lg:left-[50px] lg:absolute lg:shadow-none xl:left-[130px] xl:w-[680px]"
              >
                <div class="w-full py-[12px]">
                  <div
                    class="flex flex-row flex-nowrap justify-start items-center"
                  >
                    <span
                      class="block w-auto mb-[8px] font-microsoft font-semibold text-[16px] text-white py-[2px] px-[12px] bg-pink-900"
                      >${elem.subject}</span
                    >
                  </div>
                  <div
                    class="flex flex-row flex-nowrap justify-start items-center"
                  >
                    <h2
                      class="text-[24px] font-semibold font-microsoft mb-[12px] lg:text-white xl:text-[37px]"
                    >
                      ${elem.title}
                    </h2>
                  </div>
                  <div
                    class="flex flex-row flex-nowrap justify-start items-center"
                  >
                    <p
                      class="text-[16px] font-microsoft mb-[24px] lg:text-white"
                    >
                     ${elem.description}
                    </p>
                  </div>
                  <div
                    class="flex flex-row flex-nowrap justify-start items-center"
                  >
                    <a
                      href="${elem.shoplink}"
                      class="py-[10px] px-[12px] text-white bg-black my-[8px] z-[3] lg:text-black lg:bg-white lg:font-semibold lg:hover:bg-stone-200"
                      >${elem.btn}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
  });
  document.querySelector(".accsrscntnr").innerHTML = accesorrsprttags.join("");
};

//for business part
function frbsnsspart() {
  document.querySelector(".frbsnssprtttl").textContent = "For Business";
  let frbsnssprt = async () => {
    let frbsnssprtdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
    let frbsnssprtjson = await frbsnssprtdata.json();
    let frbsnssprtcp = [...frbsnssprtjson.forbusiness];
    let frbsnssprtcp1 = [];
    let frbsnssprtcp2 = [];
    for (let i = 0; i < 2; i++) {
      frbsnssprtcp1.push(frbsnssprtcp[i]);
    }
    for (let i = 2; i <= 3; i++) {
      frbsnssprtcp2.push(frbsnssprtcp[i]);
    }
    let frstfrbsnssprt = frbsnssprtcp1.map((elem) => {
      return `
      <div
              class="w-full px-[12px] mb-[12px] flex flex-col flex-nowrap justify-center items-center relative"
            >
              <a
                href="${elem.link}"
                class="block w-full h-[100%] absolute top-0 left-0 z-[2]"
              >
              </a>
              <div class="w-full mx-auto">
                <div class="w-full">
                  <img
                    src="${elem.imgsrc}"
                    alt="${elem.imgalt}"
                    class="w-full block object-cover object-center"
                  />
                </div>
                <div class="w-full">
                  <div class="bg-white w-full mx-auto py-[16px]">
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <h2
                        class="text-[21px] font-semibold font-microsoft mb-[12px] lg:text-[24px] 2xl:text-[28px]"
                      >
                        ${elem.title}
                      </h2>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <p class="text-[16px] font-microsoft mb-[16px]">
                        ${elem.description}
                      </p>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-baseline"
                    >
                      <a
                        href="${elem.btnlink}"
                        class="font-semibold text-[16px] font-microsoft text-pink-900 my-[16px] z-[3] hover:underline"
                        >${elem.btn}<span
                        class="fa-solid fa-angle-right px-[6px] text-pink-900"
                      ></span></a
                      >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `;
    });
    document.querySelector(".frstfrbsnssprt").innerHTML = frstfrbsnssprt.join();
    let scndfrbsnssprt = frbsnssprtcp2.map((elem) => {
      return `
      <div
              class="w-full px-[12px] mb-[12px] flex flex-col flex-nowrap justify-center items-center relative"
            >
              <a
                href="${elem.link}"
                class="block w-full h-[100%] absolute top-0 left-0 z-[2]"
              >
              </a>
              <div class="w-full mx-auto">
                <div class="w-full">
                  <img
                    src="${elem.imgsrc}"
                    alt="${elem.imgalt}"
                    class="w-full block object-cover object-center"
                  />
                </div>
                <div class="w-full">
                  <div class="bg-white w-full mx-auto py-[16px]">
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <h2
                        class="text-[21px] font-semibold font-microsoft mb-[12px] lg:text-[24px] 2xl:text-[28px]"
                      >
                        ${elem.title}
                      </h2>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-center"
                    >
                      <p class="text-[16px] font-microsoft mb-[16px]">
                        ${elem.description}
                      </p>
                    </div>
                    <div
                      class="flex flex-row flex-nowrap justify-start items-baseline"
                    >
                      <a
                        href="${elem.btnlink}"
                        class="font-semibold text-[16px] font-microsoft text-pink-900 my-[16px] z-[3] hover:underline"
                        >${elem.btn}</a
                      >
                      <span
                        class="fa-solid fa-angle-right px-[6px] text-pink-900"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `;
    });
    document.querySelector(".scndfrbsnssprt").innerHTML =
      scndfrbsnssprt.join("");
  };
  frbsnssprt();
}

//second swiper
let scndswiper = async () => {
  let scndswprdata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let scndswprjson = await scndswprdata.json();
  let scndswprtags = scndswprjson.secondswiper.map((elem) => {
    return `
  <div
                  class="swiper-slide flex justify-center items-center relative"
                >
                  <a
                    href="${elem.mainlink}"
                    class="sildecntnr block w-full h-[inherit] absolute top-0 left-0 z-[2]"
                  >
                  </a>
                  <div class="w-full mx-auto">
                    <div class="w-full lg:relative">
                      <img
                        src="${elem.smimage}"
                        alt="${elem.imgalt}"
                        class="w-full block object-cover object-center lg:hidden"
                      />
                      <img
                        src="${elem.lgimage}"
                        alt="${elem.imgalt}"
                        class="hidden lg:w-full lg:block lg:object-cover lg:object-center 2xl:hidden"
                      />
                      <img
                        src="${elem.xlimage}"
                        alt="${elem.imgalt}"
                        class="hidden 2xl:w-full 2xl:block 2xl:object-cover 2xl:object-center"
                      />
                    </div>
                    <div class="w-full md:relative lg:static">
                      <div
                        class="bg-white w-full relative top-0 left-0 mx-auto px-[12px] shadow-md md:w-[98%] md:top-[-60px] md:p-[48px] lg:w-[426px] lg:top-[calc(50%-(152px))] lg:left-[40px] lg:p-[20px] lg:absolute lg:shadow-none xl:left-[60px] xl:w-[480px] 2xl:w-[600px] 2xl:left-[100px]"
                      >
                        <div class="w-full px-[24px] py-[12px]">
                          <div
                            class="flex flex-row flex-nowrap justify-start items-center"
                          >
                            <h2
                              class="text-[24px] font-semibold font-microsoft mb-[12px] 2xl:text-[37px]"
                            >
                              ${elem.title}
                            </h2>
                          </div>
                          <div
                            class="flex flex-row flex-nowrap justify-start items-center"
                          >
                            <p class="text-[16px] font-microsoft mb-[24px]">
                              ${elem.description}
                            </p>
                          </div>
                          <div
                            class="flex flex-row flex-nowrap justify-start items-center"
                          >
                            <a
                              href="${elem.btnlink}"
                              class="py-[10px] px-[12px] text-white bg-black my-[8px] z-[3] lg:hover:shadow-md"
                              >${elem.btn}</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  `;
  });
  document.querySelector(".scndswprcntnr").innerHTML = scndswprtags.join("");
};

//socialmedia
function socilamedia() {
  document.querySelector(".sclmda").textContent = "Follow Microsoft";
  let sclmedia = async () => {
    let sclmediadata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
    let sclmediajson = await sclmediadata.json();
    let sclmediatags = sclmediajson.socialmedia.map((elem) => {
      return `
  <li class="flex flex-row flex-nowrap justify-center items-center">
                <a
                  href="${elem.link}"
                  class="font-microsoft text-[22px] text-black flex flex-row flex-nowrap justify-start items-baseline px-[16px]"
                >
                  <span class="${elem.iconclass}"></span>
                </a>
              </li>
  `;
    });
    document.querySelector(".sclmediaicon").innerHTML = sclmediatags.join("");
  };
  sclmedia();
}

//back to top
function backtotop() {
  document.querySelector(".bcktp").textContent = "Back to Top";
  let backttpcntnr = document.querySelector(".bckttpcntnr");
  let mediamedium = window.matchMedia("(min-width: 768px)");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800 && mediamedium.matches) {
      backttpcntnr.classList.remove("opacity-0");
      backttpcntnr.classList.add("opacity-100");
    } else {
      backttpcntnr.classList.remove("opacity-100");
      backttpcntnr.classList.add("opacity-0");
    }
  });
}

export default {
  alertpart,
  frstswiper,
  prodctpart,
  discountprt,
  accesorrsprt,
  frbsnsspart,
  scndswiper,
  socilamedia,
  backtotop,
};
