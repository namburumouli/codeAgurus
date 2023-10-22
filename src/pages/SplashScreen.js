import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/splashScreen.css";

function SplashScreen() {
  const [active, setActive] = useState("splashscreen");
  useEffect(() => {
    let intro = document.querySelector(".splashscreen");
    let logo = document.querySelector(".logo-header");
    let logoSpan = document.querySelectorAll(".logo");
    let myWindow;
    console.log("DOM not fully loaded and parsed");

    if (document.readyState !== "loading") {
      console.log("document is already ready, just execute code here");
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          console.log("active");
          setTimeout(() => {
            span.classList.add("active");
          }, (idx + 1) * 400);
        });

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove("active");
              span.classList.add("fade");
            }, (idx + 1) * 50);
          });
        }, 2000);

        setTimeout(() => {
          setActive("visibility");
        }, 2400);
      });
    } else {
      window.addEventListener("DOMContentLoaded", () => {
        console.log("DOM fully loaded and parsed");

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            console.log("active");
            setTimeout(() => {
              span.classList.add("active");
            }, (idx + 1) * 400);
          });

          setTimeout(() => {
            logoSpan.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.remove("active");
                span.classList.add("fade");
              }, (idx + 1) * 50);
            });
          }, 2000);

          setTimeout(() => {
            intro.style.top = "-100vh";
            setActive("visibility");
          }, 2300);
        });
      });
    }
  });

  return (
    <div class={active}>
      <h1 class="logo-header">
        <span class="logo">Code</span>
        <span class="logo">Augurs</span>
      </h1>
     
    </div>
  );
}

export default SplashScreen;
