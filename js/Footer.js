// footer menu
let ftrmnu = async () => {
  let ftrmnudata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let ftrmnujson = await ftrmnudata.json();
  let ftrmnuparts = [...ftrmnujson.footer];
  let ftrmnupart1 = [];
  let ftrmnupart2 = [];
  for (let i = 0; i < 3; i++) {
    ftrmnupart1.push(ftrmnuparts[i]);
  }
  for (let i = 3; i <= 5; i++) {
    ftrmnupart2.push(ftrmnuparts[i]);
  }
  let ftrmnutags1 = ftrmnupart1.map((elem) => {
    return `
    <li
            class="w-full sm:w-1/3 flex flex-col flex-nowrap justify-start items-start pt-[36px] pb-[4px]"
          >
            <ul
              class="w-full flex flex-col flex-nowrap justify-start items-start sm:px-[12px]"
            >
              <li
                class="w-full flex flex-row flex-nowrap justify-start items-center font-microsoft font-semibold text-[15px] py-[4px]"
              >
                ${elem.title}
              </li>
              ${elem.dropdown
                .map((e) => {
                  return `
                <li
                class="w-full flex flex-row flex-nowrap justify-start items-center"
              >
                <a
                  href="#"
                  class="flex flex-row flex-nowrap justify-start items-center text-[11px] font-microsoft hover:underline py-[8px]"
                  >${e.title}</a
                >
              </li>
                `;
                })
                .join("")}
              
            </ul>
          </li>
    `;
  });
  document.querySelector(".frstftrmnu").innerHTML = ftrmnutags1.join("");
  let ftrmnutags2 = ftrmnupart2.map((elem) => {
    return `
    
    <li
            class="w-full sm:w-1/3 flex flex-col flex-nowrap justify-start items-start pt-[36px] pb-[4px]"
          >
            <ul
              class="w-full flex flex-col flex-nowrap justify-start items-start sm:px-[12px]"
            >
              <li
                class="w-full flex flex-row flex-nowrap justify-start items-center font-microsoft font-semibold text-[15px] py-[4px]"
              >
                ${elem.title}
              </li>
              ${elem.dropdown
                .map((e) => {
                  return `
                <li
                class="w-full flex flex-row flex-nowrap justify-start items-center"
              >
                <a
                  href="#"
                  class="flex flex-row flex-nowrap justify-start items-center text-[11px] font-microsoft hover:underline py-[8px]"
                  >${e.title}</a
                >
              </li>
                `;
                })
                .join("")}
              
            </ul>
          </li>
    `;
  });
  document.querySelector(".scndftrmnu").innerHTML = ftrmnutags2.join("");
};

//icon part
function ftricons() {
  document.querySelector(".ftrfrsticon").textContent =
    "English (United States)";
  document.querySelector(".ftrscndicon").textContent = "Your Privacy Choices";
}

//about site
let abtsite = async () => {
  let abtsitedata = await fetch("https://sarasekhi.github.io/microjsonserver/db.json");
  let abtsitejson = await abtsitedata.json();
  let abtsitetags = abtsitejson.aboutsite.map((elem) => {
    return `
    <li class="">
                  <a
                    href="${elem.link}"
                    class="font-microsoft text-[11px] pt-[6px] pr-[10px] md:pb-[4px] md:pr-[20px] hover:underline xl:pr-[10px] xl:pt-0 2xl:pr-[20px]"
                    >${elem.title}</a
                  >
                </li>
    `;
  });
  document.querySelector(".abtsitepart").innerHTML = abtsitetags.join("");
};

export default {
  ftrmnu,
  ftricons,
  abtsite,
};
