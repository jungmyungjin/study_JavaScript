const COUNTRY_LS = "country";


function saveCountry(country){
    localStorage.setItem(COUNTRY_LS, country);
}

function handleSubmit (country){
    saveCountry(country);
}

function changeEvent(){
    const selectContry = event.target.value; 

    if (selectContry !== null){
        handleSubmit(selectContry);
    }
}

function CheckLsCountry(){
    const lsCountry = localStorage.getItem(COUNTRY_LS);
    if ( lsCountry !== null){
        document.getElementById(lsCountry).selected = true;
    }
}

function init(){
    CheckLsCountry();
    addEventListener("change",changeEvent);

}

init();

/* <정답>
import "./styles.css";

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

loadCountries();
select.addEventListener("change", handleChange);
*/