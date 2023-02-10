import React, { useEffect, useRef } from 'react';

function Path() {
    const ref = useRef();

    function importAll(r) {
        return r.keys().map(r);
    }
    
    const importedImages = importAll(require.context('../resources/circlesPeople', false, /\.png$/));
      
    useEffect(() => {
        let images = [].slice.call(document.getElementsByClassName("animated-path"));
        let i = 0;
            for(let image of images) {
                image.counter = 0 + i;
                i += 0.125;
                if (images.indexOf(image) === images.length / 2) {
                    i = 0;
                }
            }

        function moveStar() {
            for(let image of images) {
                if (parseInt(image.counter,10) === 1) {
                    image.counter = 0;
                }
                image.counter += 0.001;
                let straightLength = ref.current.getTotalLength();
                image.setAttribute("transform","translate("+ (ref.current.getPointAtLength(image.counter * straightLength).x -15)  + "," + (ref.current.getPointAtLength(image.counter * straightLength).y -9) + "), scale(0.5)");

                if(window.innerWidth >= 768) {
                    image.setAttribute("transform","translate("+ (ref.current.getPointAtLength(image.counter * straightLength).x -15)  + "," + (ref.current.getPointAtLength(image.counter * straightLength).y -9) + "), scale(0.5)");
                } else {
                    image.setAttribute("transform","translate("+ (ref.current.getPointAtLength(image.counter * straightLength).x -15)  + "," + (ref.current.getPointAtLength(image.counter * straightLength).y -18) + "), scale(1)");

                }
            }
            requestAnimationFrame(moveStar);
        }
        requestAnimationFrame(moveStar);
    }, []);
        

    return (
        <div id="path" className="tile">
            <div className="path-wrapper" style={{paddingBottom: "15%"}}>
                <svg viewBox="-200 -25 430 500" preserveAspectRatio="xMidYMin slice" x="0" y="15"> 
                    <path ref={ref} fill="none" d="M -360 0 L -241 0 C -37 -32 32 32 245 -1 L 386 0"/>
                    {importedImages.map((e, i) => {
                        return <image key={i} className="animated-path" href={e}></image>
                        }
                    )}
                </svg>
            </div>
        </div>
    );
}

export default Path;