import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Dashboard.module.css'

function SearchBar({show, onClose, children, title}) {
    const [isBrowser, setIsBrowser] = useState(false);

    const modalRef = useRef(null);

    const [windowDimention, detectHW] = useState({
        winWidth: 0,
        winHeight: 0,
      });

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    };


    useEffect(() => {

        setIsBrowser(true);
        /**
         * Alert if clicked on outside of element
         */
         
         document.body.addEventListener("click", onClickOutside);
        

        window.addEventListener("resize", detectSize);

        if (windowDimention.winWidth > 1023) {
            onClose()
        }

        return () => {
          document.body.removeEventListener("click", onClickOutside);
          window.removeEventListener("resize", detectSize);
        };
        
    }, [show,windowDimention]);

    const onClickOutside = (e) => {
        const element = e.target;
        if(show){
            if (modalRef.current && !modalRef.current.contains(element)) {
                e.preventDefault();
                e.stopPropagation();
                onClose()
              }
        }
        
      };

    
    //  const handleCloseClick = () => {
    //     if (!show) {
    //       document.addEventListener("click", this.handleOutsideClick, false);
    //     } else {
    //       document.removeEventListener("click", this.handleOutsideClick, false);
    //     }
    
    //     onClose();
    //   };

 

    // const handleCloseClick = (e) => {
    //     e.preventDefault();
    //     onClose();
    // }

    

    const modalContent = show ? (
        <div className={`${styles.overlay}`} >
            <div  className={`${styles.StyledModal}`}>
                <div  className={`${styles.ModalBody}` } ref={modalRef}>{children}</div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}


export default SearchBar;