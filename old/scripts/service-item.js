const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

const pageTitle = document.querySelector("title");
const postTitle = document.querySelector("h1");
const postSummary = document.querySelector(
  ".identity-summary-wrapper .summary"
);
const detailsBody = document.querySelector(".service .details");
const postQA = document.querySelector(".service>.postQA");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getService() {
  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/services/${articleId}?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/services/${articleId}?populate=*`;
  }

  fetch(tempBaseUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      attributes = result.data.attributes;

      pageTitle.textContent = attributes.postTitle;
      postTitle.insertAdjacentHTML(
        "afterbegin",
        attributes.postTitle + " Specialist"
      );
      postSummary.insertAdjacentHTML("afterbegin", attributes.postSummary);

      postQA.insertAdjacentHTML("afterbegin", attributes.postTitle + " Q & A");

      detailsBody.insertAdjacentHTML("beforeend", attributes.postBody);
    })
    .catch((error) => console.log("error", error));
}

getService();
