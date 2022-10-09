
let observer = new IntersectionObserver(
  (entries, observer) => {
    for (const entry of entries) {
      
      if (entry.isIntersecting) {
        
        document.getElementById("a1").classList.remove("active");
        document.getElementById("a2").classList.remove("active");
        document.getElementById("a3").classList.remove("active");
        document.getElementById("a4").classList.remove("active");
        document.getElementById("a5").classList.remove("active");
        document.getElementById("a6").classList.remove("active");

        if (entry.target.id === "1") {
          document.getElementById("a1").classList.add("active");
         
        }

        if (entry.target.id === "2") {
          document.getElementById("a2").classList.add("active");
         
        }

        if (entry.target.id === "3") {
          document.getElementById("a3").classList.add("active");
       
        }

        if (entry.target.id === "4") {
          document.getElementById("a4").classList.add("active");
         
        }

        if (entry.target.id === "5") {
          document.getElementById("a5").classList.add("active");
         
        }

        if (entry.target.id === "6") {
          document.getElementById("a6").classList.add("active");
         
        }
      }
    }
  },
  { threshold: 0.1 }
);

const pages = document.getElementsByClassName("chapter");
for (const chapter of pages) {
  observer.observe(chapter);
}
