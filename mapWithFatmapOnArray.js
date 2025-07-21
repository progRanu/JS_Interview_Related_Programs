const movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];













// 🧩 Starter Function
function extractVideoData(movieLists) {
    const result = movieLists.flatMap(list =>
  list.videos.map(video => ({
    id: video.id,
    title: video.title,
    boxArtUrls: video.boxarts.map(box => box.url)
  }))
);  
    
    
  // TODO: Implement logic here
  return result; // Replace with actual implementation
}







// 🧪 Test it here
const result = extractVideoData(movieLists);
console.log(result);

// ✅ Expected format:
// [
//   { id: 70111470, title: "Die Hard", boxArtUrls: [url1, url2] },
//   ...
// ]























