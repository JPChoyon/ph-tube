// get data from the api 
const videoLoad = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    videos = data.data
    console.log(videos)
    showVideo(videos)
}
videoLoad(1000)
// show catagory button 
const showCatagory = () => {

}

// show the video in the card 
const showVideo = (video) => {
    // get the card container 
    const cardCon = document.getElementById('card-container');

    // clear old data 
    cardCon.innerHTML = "";

    // show card data 
    video.forEach((video) => {
        console.log(video)
        const verifiedImage = video?.authors[0]?.verified === true
  ? '<img src="../assest/images/fi_10629607.svg" alt="Verified" />'
  : '';
        // create element for the card data 
        const videoCard = document.createElement('div');
        cardCon.classList = `card card-compact bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`;
        videoCard.innerHTML = `
        <figure class="h-40">
          <img
            src="${video.thumbnail}"
            alt="Shoes"
          />
        </figure>
        <div class="card-body ">
            <div class="flex gap-2">
            <div>
            <img class="inline-block rounded-full h-9 w-9" src="${video?.authors[0]?.profile_picture}" alt="">
        </div>

        <div>
            <h2 class="card-title font-bold">${video.title}</h2>
            <p class="text-sm font-medium flex gap-2 mt-2 text-gray-700 group-hover:text-neutral-600">
            ${video?.authors[0]?.profile_name} <span>${verifiedImage}</span>
          </p>  
            <p class="mt-2">${video?.others?.views} views</p>
        </div>
                
            </div>
        </div>
        `
        // append the div in the card 
        cardCon.appendChild(videoCard);

    });
    
};

