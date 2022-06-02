import React from 'react';

function Footer() {
   return (
       <footer className="mt-auto bottom-0">
        <h1 className="footer-lines">
                <a className="hover:text-sky-200 transition-all ease-in-out duration-300" style={{ fontSize: '52px', padding: '10px'  }} href="https://github.com/gdav24">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="hover:text-sky-200 transition-all ease-in-out duration-300" href="mailto:g.coding57@gmail.com">
                    <i className="fa-solid fa-paper-plane" style={{ fontSize: '52px', padding: '8px'  }}></i>
                </a>
            </h1>
        </footer>
   ) 
}

export default Footer