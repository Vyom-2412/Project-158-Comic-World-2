AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handleComicsListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["batman", "spiderman", "superman", "xmen"];
      if (comicsId.includes(id)) {
        const comicsContainer = document.querySelector("#comics-container");
        comicsContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const comicsId = [
          "batman",
          "spiderman",
          "superman",
          "xmen",
        ];
        if (comicsId.includes(id)) {
          const comicsContainer = document.querySelector("#comics-container");
          comicsContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", { color: "#1565c0" });
        }
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId}=this.data;
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if(id==selectedItemId){
            el.setAttribute("material",{
              color:"#0077cc",
              opacity:1
            })
          }
        }
      });
    },
  });
  