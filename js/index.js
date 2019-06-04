$(document).ready(function() {
        $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
    });

//Disintegraion JS

const DEBUG = false;
const REPETITION_COUNT = 2;
const NUM_FRAMES = 128;

function generateFrames($canvas, count = 32) {
  const { width, height } = $canvas;
  const ctx = $canvas.getContext("2d");
  const originalData = ctx.getImageData(0, 0, width, height);
  const imageDatas = [...Array(count)].map(
  (_, i) => ctx.createImageData(width, height));


  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      for (let i = 0; i < REPETITION_COUNT; ++i) {
        const dataIndex = Math.floor(
        count * (Math.random() + 2 * x / width) / 3);

        const pixelIndex = (y * width + x) * 4;

        for (let offset = 0; offset < 4; ++offset) {
          imageDatas[dataIndex].data[pixelIndex + offset] =
          originalData.data[pixelIndex + offset];
        }
      }
    }
  }

  return imageDatas.map(data => {
    const $c = $canvas.cloneNode(true);
    $c.getContext("2d").putImageData(data, 0, 0);
    return $c;
  });
}


function replaceElementVisually($old, $new) {
  const $parent = $old.offsetParent;
  $new.style.top = `${$old.offsetTop}px`;
  $new.style.left = `${$old.offsetLeft}px`;
  $new.style.width = `${$old.offsetWidth}px`;
  $new.style.height = `${$old.offsetHeight}px`;
  $parent.appendChild($new);
  $old.style.visibility = "hidden";
}

function disintegrate($elm) {
  html2canvas($elm).then($canvas => {

    const $container = document.createElement("div");
    $container.classList.add("disintegration-container");

    const $frames = generateFrames($canvas, NUM_FRAMES);
    $frames.forEach(($frame, i) => {
      $frame.style.transitionDelay = `${1.35 * i / $frames.length}s`;
      $container.appendChild($frame);
    });


    replaceElementVisually($elm, $container);


    $container.offsetLeft;
    if (!DEBUG) {

      $frames.forEach($frame => {
        const randomRadian = 2 * Math.PI * (Math.random() - 0.5);
        $frame.style.transform =
        `rotate(${15 * (Math.random() - 0.5)}deg) translate(${60 * Math.cos(randomRadian)}px, ${30 * Math.sin(randomRadian)}px)
rotate(${15 * (Math.random() - 0.5)}deg)`;
        $frame.style.opacity = 0;
      });
    } else {
      $frames.forEach($frame => {
        $frame.style.animation = `debug-pulse 1s ease ${$frame.style.transitionDelay} infinite alternate`;
      });
    }
  });
}

[...document.querySelectorAll(".disintegration-target")].forEach($elm => {
  $elm.addEventListener("click", () => {
    if ($elm.disintegrated) {return;}
    $elm.disintegrated = true;
    disintegrate($elm);
  });
});


// Background Particles JS

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#178998"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;