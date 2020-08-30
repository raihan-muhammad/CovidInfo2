const main = async () => {
  const base = "https://covid19.mathdro.id/api";
  const baseIndo = "https://covid19.mathdro.id/api/countries/IDN";
  try {
    // Global
    const res = await fetch(`${base}`);
    const resJes = await res.json();

    // Indo
    const resIndo = await fetch(`${baseIndo}`);
    const jesIndo = await resIndo.json();

    // All function dom
    domGlobalCovid(resJes);
    domIndoCovid(jesIndo);
  } catch (e) {
    console.log(e);
  }
};

function domGlobalCovid(res) {
  const globalPositif = document.querySelector("#positif");
  const globalSembuh = document.querySelector("#sembuh");
  const globalMeninggal = document.querySelector("#meninggal");

  globalPositif.innerHTML = res.confirmed.value;
  globalSembuh.innerHTML = res.recovered.value;
  globalMeninggal.innerHTML = res.deaths.value;
}

function domIndoCovid(resIndo) {
  const indoPositif = document.querySelector("#positif-indo");
  const indoSembuh = document.querySelector("#sembuh-indo");
  const indoMeninggal = document.querySelector("#meninggal-indo");

  indoPositif.innerHTML = resIndo.confirmed.value;
  indoSembuh.innerHTML = resIndo.recovered.value;
  indoMeninggal.innerHTML = resIndo.deaths.value;
}

export default main;
