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