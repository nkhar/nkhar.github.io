const servicesPath = "/services?populate=*";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getServices() {
  const titleH1 = document.querySelector(".header-container>h1");

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = apiUrlProd;
  } else {
    tempBaseUrl = apiUrlLocal;
  }

  tempBaseUrl += servicesPath;

  fetch(tempBaseUrl, requestOptions)
    .then((response) => response.json())
    .then((services) => {
      let serviceList = document.querySelector(".services-list");
      services.data.forEach((serviceItem) => {
        serviceList.appendChild(createServiceCard(serviceItem));
      });
    })
    .catch((error) => console.log("error", error));
}

function createServiceCard(serviceItem) {
  let card = document.createElement("li");
  card.classList.add("service-item");
  // card.onclick = () => {
  //   window.location.replace(`/services/service.html?id=${serviceItem.id}`);
  // };

  let serviceItemBg = document.createElement("div");
  serviceItemBg.classList.add("service-item-bg");

  let backgroundImg = document.createElement("img");
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }
  backgroundImg.src =
    tempPhotoUrl + serviceItem.attributes.serviceGridIcon.data.attributes.url;

  serviceItemBg.append(backgroundImg);

  let serviceItemLink = document.createElement("a");
  serviceItemLink.href =
    window.location.origin + `/services/service.html?id=${serviceItem.id}`;

  let serviceItemInfo = document.createElement("div");
  serviceItemInfo.classList.add("service-item-info");

  let serviceItemName = document.createElement("h4");
  serviceItemName.classList.add("service-name");
  serviceItemName.textContent = serviceItem.attributes.postTitle;

  let serviceItemReadMore = document.createElement("p");
  serviceItemReadMore.textContent = "Read More";

  serviceItemInfo.append(serviceItemName);
  serviceItemInfo.append(serviceItemReadMore);

  serviceItemLink.append(serviceItemInfo);

  card.append(serviceItemBg);
  card.append(serviceItemLink);

  return card;
}

getServices();
