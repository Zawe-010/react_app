function HeroSection() {
    return (
        <header>
            {/* Background image */}
            <div
                id="intro-example"
                className="text-center bg-image"
                style={{
                    backgroundImage:
                        "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
                    height: "100vh", // full viewport height
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay mask */}
                <div
                    className="mask d-flex justify-content-center align-items-center"
                    style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                >
                    {/* Text container */}
                    <div className="text-white text-center">
                        <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                        <h5 className="mb-4">Best & free guide of responsive web design</h5>

                        {/* Buttons */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-outline-light btn-lg m-2"
                            href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Start tutorial
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn btn-outline-light btn-lg m-2"
                            href="https://mdbootstrap.com/docs/standard/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download MDB UI KIT
                        </a>
                    </div>
                </div>
            </div>
            {/* Background image end */}
        </header>
    );
}

export default HeroSection;
