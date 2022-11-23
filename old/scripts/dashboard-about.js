const aboutUs = document.querySelector(".about-us");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getAboutUs() {
  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/about-us?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/about-us?populate=*`;
  }

  fetch(tempBaseUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      attributes = result.data.attributes;

      aboutUs.insertAdjacentHTML("afterbegin", attributes.aboutUs);
    })
    .catch((error) => console.log("error", error));
}

getAboutUs();
