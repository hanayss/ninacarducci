module.exports = {
    css: ["./src/bootstrap.min.css"],
    content: [
        "./index.html",
        "./assets/custom-bootstrap.bundle.js",
        "./assets/maugallery.js",
        "./assets/scripts.js",
    ],
    safelist: [/^col-*/],
    output: "./assets/bootstrap-perso.min.css",
};

// safelist trouvé sur https://medium.com/full-human/purgecss-3-0-798b047770da
// col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4s
